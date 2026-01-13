import React, { useState } from 'react';
import { ArrowLeft, Package, Truck, CheckCircle, AlertCircle, RefreshCw, Clock, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const ReturnsPage = () => {
  const [returnReason, setReturnReason] = useState('');
  const [returnType, setReturnType] = useState('refund');
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');

  const returnReasons = [
    'Wrong item received',
    'Item defective or damaged',
    'Item not as described',
    'No longer needed',
    'Size too small',
    'Size too large',
    'Color not as expected',
    'Quality issues',
    'Changed mind',
    'Other'
  ];

  const returnPolicy = [
    {
      title: '30-Day Return Window',
      description: 'You have 30 days from the delivery date to initiate a return.',
      icon: Clock
    },
    {
      title: 'Unused Condition Required',
      description: 'Items must be unused, unworn, and in original packaging with all tags attached.',
      icon: Package
    },
    {
      title: 'Proof of Purchase',
      description: 'Original receipt or order confirmation email required for all returns.',
      icon: CheckCircle
    },
    {
      title: 'Free Return Shipping',
      description: 'We provide prepaid return shipping labels for all domestic returns.',
      icon: Truck
    }
  ];

  const nonReturnableItems = [
    'Personalized items',
    'Final sale items',
    'Gift cards',
    'Intimate apparel (underwear, socks)',
    'Perishable items',
    'Items damaged by customer',
    'Items returned after 30 days'
  ];

  const returnProcess = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Fill out the return form below or contact customer service.'
    },
    {
      step: 2,
      title: 'Receive Label',
      description: 'We\'ll email you a prepaid return shipping label within 24 hours.'
    },
    {
      step: 3,
      title: 'Package Item',
      description: 'Pack the item securely in original packaging if possible.'
    },
    {
      step: 4,
      title: 'Ship Back',
      description: 'Drop off the package at any authorized shipping location.'
    },
    {
      step: 5,
      title: 'Processing',
      description: 'Once we receive the item, we\'ll process your return within 3-5 business days.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Return submitted:', { orderNumber, email, returnReason, returnType });
    // In real app, this would submit to backend
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-br from-mint-light/30 to-peach-light/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <RefreshCw className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl font-bold font-heading mb-4">
              Returns & Exchanges
            </h1>
            <p className="text-lg text-muted-foreground">
              Easy returns and exchanges within 30 days of purchase
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Return Policy Overview */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">
              Our Return Policy
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {returnPolicy.map((policy, index) => {
                const Icon = policy.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{policy.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {policy.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Return Process */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">
              How to Return an Item
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {returnProcess.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="relative mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto font-bold">
                        {step.step}
                      </div>
                      {index < returnProcess.length - 1 && (
                        <div className="hidden md:block absolute top-5 left-full w-full h-0.5 bg-border -translate-x-4" />
                      )}
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Return Form */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Start Your Return</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="orderNumber">Order Number</Label>
                    <Input
                      id="orderNumber"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      placeholder="e.g., LSS-12345"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="returnReason">Return Reason</Label>
                    <select
                      id="returnReason"
                      value={returnReason}
                      onChange={(e) => setReturnReason(e.target.value)}
                      className="w-full p-3 border rounded-md"
                      required
                    >
                      <option value="">Select a reason</option>
                      {returnReasons.map((reason, index) => (
                        <option key={index} value={reason}>{reason}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label>Return Type</Label>
                    <RadioGroup value={returnType} onValueChange={setReturnType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="refund" id="refund" />
                        <Label htmlFor="refund" className="cursor-pointer">
                          Full Refund
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exchange" id="exchange" />
                        <Label htmlFor="exchange" className="cursor-pointer">
                          Exchange for Different Item
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="store-credit" id="store-credit" />
                        <Label htmlFor="store-credit" className="cursor-pointer">
                          Store Credit
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Return Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {/* Quick Tips */}
              <Card>
                <CardHeader>
                  <CardTitle>Return Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Keep Original Packaging</p>
                      <p className="text-xs text-muted-foreground">
                        Returns process faster with original packaging and tags.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Take Photos</p>
                      <p className="text-xs text-muted-foreground">
                        Document item condition before shipping.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Use Provided Label</p>
                      <p className="text-xs text-muted-foreground">
                        Don't use your own shipping - use our prepaid label.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Non-Returnable Items */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    Non-Returnable Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {nonReturnableItems.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  </CardContent>
              </Card>
            </div>
          </div>

          {/* Exchange Information */}
          <Card>
            <CardHeader>
              <CardTitle>Exchange Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Size Exchanges</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Exchanging for a different size? We'll ship the new size immediately 
                    once we receive your return, and you'll only pay return shipping if the original item was your error.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      <strong>Pro Tip:</strong> Order the new size first to ensure availability, 
                      then return the original item for a refund.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Different Item Exchanges</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Want to exchange for a completely different item? We'll process this as a return 
                    and new purchase. You'll receive a refund for the returned item once processed.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Processing Time:</strong> 3-5 business days</p>
                    <p className="text-sm"><strong>Refund Method:</strong> Original payment method</p>
                    <p className="text-sm"><strong>Shipping Credit:</strong> Available for immediate use</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Need Help with Returns?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our return specialists are here to help make the process as smooth as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Email Returns Team
              </Button>
              <Button size="lg" variant="outline">
                Start Live Chat
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Returns Support: Available 24/7</p>
              <p>Average Response Time: 2 hours</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnsPage;
