import React, { useState } from 'react';
import { Users, Settings, Shield, Package, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const UserAdminPage = () => {
  const [activeTab, setActiveTab] = useState('users');

  const adminTabs = [
    { id: 'users', name: 'Users', icon: Users },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', joinDate: '2024-01-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', joinDate: '2024-02-01' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold font-heading mb-8">Admin Dashboard</h1>
          
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Menu</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {adminTabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted transition-colors ${
                            activeTab === tab.id ? 'bg-muted border-l-4 border-primary' : ''
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {tab.name}
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </button>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'users' && (
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium">{user.name}</h3>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                            <p className="text-xs text-muted-foreground">Joined: {user.joinDate}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                              {user.status}
                            </Badge>
                            <Button size="sm" variant="outline">Edit</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'products' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Product Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Product management features coming soon...</p>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'settings' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Site Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Site settings configuration coming soon...</p>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'security' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Security settings and logs coming soon...</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserAdminPage;
