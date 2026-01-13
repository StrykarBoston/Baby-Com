import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  sendEmailVerification as sendEmailVerificationFn,
  GoogleAuthProvider,
  signInWithPopup,
  linkWithPopup
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<{ error?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signInWithGoogle: () => Promise<{ error?: string }>;
  signOutUser: () => Promise<{ error?: string }>;
  resetPassword: (email: string) => Promise<{ error?: string }>;
  updateUserProfile: (data: { displayName?: string; photoURL?: string }) => Promise<{ error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const FirebaseAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: name
      });

      // Send email verification
      if (!userCredential.user.emailVerified) {
        await sendEmailVerificationFn(userCredential.user);
      }

      // Store user data in Firestore with error handling
      try {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: name,
          createdAt: new Date().toISOString(),
          emailVerified: userCredential.user.emailVerified
        });
      } catch (firestoreError: unknown) {
        console.warn('Firestore write failed:', firestoreError);
        // Continue even if Firestore fails - auth is successful
      }

      return {};
    } catch (error: unknown) {
      let errorMessage = 'An error occurred during sign up';
      
      if (error && typeof error === 'object' && 'code' in error) {
        const errorCode = (error as { code: string }).code;
        switch (errorCode) {
          case 'auth/email-already-in-use':
            errorMessage = 'This email is already registered';
            break;
          case 'auth/weak-password':
            errorMessage = 'Password should be at least 6 characters';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Invalid email address';
            break;
          case 'auth/network-request-failed':
            errorMessage = 'Network error. Please check your connection';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'Too many requests. Please try again later';
            break;
          default:
            errorMessage = (error as { message?: string }).message || errorMessage;
        }
      } else {
        errorMessage = error instanceof Error ? error.message : errorMessage;
      }
      
      return { error: errorMessage };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return {};
    } catch (error: unknown) {
      let errorMessage = 'An error occurred during sign in';
      
      if (error && typeof error === 'object' && 'code' in error) {
        const errorCode = (error as { code: string }).code;
        switch (errorCode) {
          case 'auth/user-not-found':
            errorMessage = 'No account found with this email';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Incorrect password';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Invalid email address';
            break;
          case 'auth/user-disabled':
            errorMessage = 'This account has been disabled';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'Too many failed attempts. Please try again later';
            break;
          default:
            errorMessage = (error as { message?: string }).message || errorMessage;
        }
      } else {
        errorMessage = error instanceof Error ? error.message : errorMessage;
      }
      
      return { error: errorMessage };
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      return {};
    } catch (error: unknown) {
      return { error: error instanceof Error ? error.message : 'An error occurred during sign out' };
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return {};
    } catch (error: unknown) {
      let errorMessage = 'An error occurred while sending reset email';
      
      if (error && typeof error === 'object' && 'code' in error) {
        const errorCode = (error as { code: string }).code;
        switch (errorCode) {
          case 'auth/user-not-found':
            errorMessage = 'No account found with this email';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Invalid email address';
            break;
          default:
            errorMessage = (error as { message?: string }).message || errorMessage;
        }
      } else {
        errorMessage = error instanceof Error ? error.message : errorMessage;
      }
      
      return { error: errorMessage };
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Store user data in Firestore
      try {
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          createdAt: new Date().toISOString(),
          emailVerified: result.user.emailVerified,
          provider: 'google'
        }, { merge: true });
      } catch (firestoreError: unknown) {
        console.warn('Firestore write failed:', firestoreError);
      }

      return {};
    } catch (error: unknown) {
      let errorMessage = 'An error occurred during Google sign in';
      
      if (error && typeof error === 'object' && 'code' in error) {
        const errorCode = (error as { code: string }).code;
        switch (errorCode) {
          case 'auth/popup-closed-by-user':
            errorMessage = 'Sign-in popup was closed before completion';
            break;
          case 'auth/popup-blocked':
            errorMessage = 'Sign-in popup was blocked by the browser';
            break;
          case 'auth/cancelled-popup-request':
            errorMessage = 'Sign-in was cancelled';
            break;
          default:
            errorMessage = (error as { message?: string }).message || errorMessage;
        }
      } else {
        errorMessage = error instanceof Error ? error.message : errorMessage;
      }
      
      return { error: errorMessage };
    }
  };

  const updateUserProfile = async (data: { displayName?: string; photoURL?: string }) => {
    if (!user) return { error: 'No user is currently signed in' };
    
    try {
      await updateProfile(user, data);
      
      // Update Firestore document
      await setDoc(doc(db, 'users', user.uid), {
        ...data,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      return {};
    } catch (error: unknown) {
      return { error: error instanceof Error ? error.message : 'An error occurred while updating profile' };
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOutUser,
    resetPassword,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
