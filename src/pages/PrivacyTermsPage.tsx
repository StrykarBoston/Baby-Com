import React, { useState } from 'react';
import { Shield, Eye, Lock, FileText, Users, Database, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const PrivacyTermsPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const privacySections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          heading: 'Personal Information',
          text: 'When you create an account or make a purchase, we collect information such as your name, email address, shipping address, phone number, and payment details.'
        },
        {
          heading: 'Usage Data',
          text: 'We automatically collect information about how you use our website, including IP address, browser type, pages visited, and time spent on our site.'
        },
        {
          heading: 'Device Information',
          text: 'We collect information about the device you use to access our services, including hardware model, operating system, and unique device identifiers.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        {
          heading: 'Provide Services',
          text: 'To process your orders, manage your account, and provide customer support.'
        },
        {
          heading: 'Improve Experience',
          text: 'To personalize your shopping experience, recommend products, and optimize our website performance.'
        },
        {
          heading: 'Communications',
          text: 'To send order confirmations, shipping updates, and marketing communications (with your consent).'
        }
      ]
    },
    {
      title: 'Information Sharing',
      icon: Eye,
      content: [
        {
          heading: 'Service Providers',
          text: 'We share information with trusted third parties who help us operate our business, such as payment processors and shipping companies.'
        },
        {
          heading: 'Legal Requirements',
          text: 'We may disclose your information when required by law or to protect our rights, property, or safety.'
        },
        {
          heading: 'Business Transfers',
          text: 'If we are acquired by or merge with another company, your information may be transferred as part of the deal.'
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          heading: 'Encryption',
          text: 'All data transmissions are secured using SSL/TLS encryption protocols.'
        },
        {
          heading: 'Access Controls',
          text: 'Only authorized personnel have access to your personal information, and they are bound by confidentiality agreements.'
        },
        {
          heading: 'Regular Audits',
          text: 'We conduct regular security audits to ensure the ongoing protection of your data.'
        }
      ]
    }
  ];

  const termsSections = [
    {
      title: 'Account Terms',
      icon: Users,
      content: [
        {
          heading: 'Account Creation',
          text: 'You must provide accurate, complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.'
        },
        {
          heading: 'Account Responsibility',
          text: 'You are responsible for all activities under your account. Notify us immediately of any unauthorized use.'
        },
        {
          heading: 'Account Termination',
          text: 'We reserve the right to suspend or terminate accounts that violate our terms or are used for fraudulent purposes.'
        }
      ]
    },
    {
      title: 'Product Information',
      icon: FileText,
      content: [
        {
          heading: 'Product Descriptions',
          text: 'We strive to provide accurate product descriptions, but do not guarantee that all information is error-free.'
        },
        {
          heading: 'Pricing',
          text: 'Prices are subject to change without notice. We reserve the right to correct pricing errors.'
        },
        {
          heading: 'Availability',
          text: 'Product availability is not guaranteed. Items may be discontinued or out of stock.'
        }
      ]
    },
    {
      title: 'Order and Payment',
      icon: Shield,
      content: [
        {
          heading: 'Order Acceptance',
          text: 'Your order constitutes an offer to purchase. We reserve the right to accept or decline any order.'
        },
        {
          heading: 'Payment Terms',
          text: 'Payment must be received before order processing. All prices are in USD and applicable taxes will be added.'
        },
        {
          heading: 'Risk of Loss',
          text: 'Risk of loss passes to you upon delivery to the shipping carrier.'
        }
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Lock,
      content: [
        {
          heading: 'Website Content',
          text: 'All content on our website, including text, graphics, logos, and images, is owned by Little Sprout Shop.'
        },
        {
          heading: 'Product Images',
          text: 'Product images are for illustrative purposes and may not exactly represent the actual product.'
        },
        {
          heading: 'Restricted Use',
          text: 'You may not use our content for commercial purposes without explicit written permission.'
        }
      ]
    }
  ];

  const userRights = [
    {
      title: 'Access and Correction',
      description: 'You can access and update your personal information through your account settings.'
    },
    {
      title: 'Data Portability',
      description: 'You can request a copy of your personal data in a machine-readable format.'
    },
    {
      title: 'Deletion',
      description: 'You can request deletion of your personal data, subject to legal retention requirements.'
    },
    {
      title: 'Opt-Out',
      description: 'You can opt out of marketing communications at any time through your account settings.'
    }
  ];

  const currentSections = activeTab === 'privacy' ? privacySections : termsSections;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-br from-mint-light/30 to-peach-light/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl font-bold font-heading mb-4">
              {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {activeTab === 'privacy' 
                ? 'How we collect, use, and protect your information'
                : 'Rules and guidelines for using our services'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1 inline-flex">
              <Button
                variant={activeTab === 'privacy' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('privacy')}
                className="rounded-md"
              >
                <Shield className="mr-2 h-4 w-4" />
                Privacy Policy
              </Button>
              <Button
                variant={activeTab === 'terms' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('terms')}
                className="rounded-md"
              >
                <FileText className="mr-2 h-4 w-4" />
                Terms of Service
              </Button>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Last updated: January 13, 2026
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {currentSections.map((section, sectionIndex) => (
              <Card key={sectionIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {section.icon && (
                      <section.icon className="h-6 w-6 text-primary" />
                    )}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-semibold text-lg mb-2">
                        {item.heading}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                      {itemIndex < section.content.length - 1 && (
                        <Separator className="my-4" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}

            {/* User Rights Section - Only for Privacy */}
            {activeTab === 'privacy' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    Your Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {userRights.map((right, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">{right.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {right.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us About Privacy/Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Privacy Questions</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      For questions about this Privacy Policy or how we handle your data:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> privacy@littlesproutshop.com</p>
                      <p><strong>Mail:</strong> Privacy Officer, Little Sprout Shop, 1234 Market St, San Francisco, CA 94102</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Legal Questions</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      For questions about these Terms of Service or legal matters:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> legal@littlesproutshop.com</p>
                      <p><strong>Mail:</strong> Legal Department, Little Sprout Shop, 1234 Market St, San Francisco, CA 94102</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notice */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Important Notice</h4>
                    <p className="text-sm text-orange-700">
                      By using Little Sprout Shop's services, you acknowledge that you have read, 
                      understood, and agree to be bound by these Terms of Service and Privacy Policy. 
                      If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download Options */}
          <div className="text-center mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Download Documents</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Save copies of our policies for your records or offline reference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Download Privacy Policy (PDF)
              </Button>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Download Terms of Service (PDF)
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyTermsPage;
