import React, { useState } from 'react';
import { Truck, Clock, Shield, Package, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Layout } from '@/components/layout/Layout';

const ShippingInfoPage = () => {
  const [selectedCountry, setSelectedCountry] = useState('US');

  const shippingOptions = [
    {
      type: 'Standard',
      price: 5.99,
      freeThreshold: 50,
      deliveryTime: '5-7 business days',
      tracking: 'Yes',
      features: ['Free shipping on orders over $50', 'Tracking included', 'Insurance included']
    },
    {
      type: 'Express',
      price: 15.99,
      freeThreshold: null,
      deliveryTime: '2-3 business days',
      tracking: 'Yes',
      features: ['Priority processing', 'Express delivery', 'Full tracking', 'Signature required']
    },
    {
      type: 'Overnight',
      price: 29.99,
      freeThreshold: null,
      deliveryTime: '1 business day',
      tracking: 'Yes',
      features: ['Same-day processing', 'Overnight delivery', 'Real-time tracking', 'Signature required']
    }
  ];

  const internationalRates = [
    { country: 'Canada', price: 12.99, time: '7-10 business days' },
    { country: 'UK', price: 19.99, time: '10-14 business days' },
    { country: 'Australia', price: 24.99, time: '12-18 business days' },
    { country: 'Germany', price: 18.99, time: '8-12 business days' },
    { country: 'France', price: 18.99, time: '8-12 business days' }
  ];

  const shippingProcess = [
    {
      step: 1,
      title: 'Order Processing',
      description: 'We process your order within 1-2 business days',
      icon: Package,
      time: '1-2 days'
    },
    {
      step: 2,
      title: 'Quality Check',
      description: 'Items are inspected and carefully packaged',
      icon: Shield,
      time: 'Same day'
    },
    {
      step: 3,
      title: 'Shipping',
      description: 'Your package is handed to our shipping partner',
      icon: Truck,
      time: '1 day'
    },
    {
      step: 4,
      title: 'Delivery',
      description: 'Package arrives at your doorstep',
      icon: CheckCircle,
      time: 'Based on shipping method'
    }
  ];

  const restrictions = [
    'Hazardous materials (batteries, chemicals)',
    'Perishable items',
    'Items over 50 lbs',
    'PO Boxes for express shipping',
    'International orders over $500'
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-br from-mint-light/30 to-peach-light/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl font-bold font-heading mb-4">
              Shipping Information
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about getting your order delivered
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Domestic Shipping */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">
              Domestic Shipping (United States)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {shippingOptions.map((option, index) => (
                <Card key={index} className={`relative ${option.type === 'Standard' ? 'ring-2 ring-primary' : ''}`}>
                  {option.type === 'Standard' && (
                    <Badge className="absolute -top-2 -right-2 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Truck className="h-5 w-5" />
                      {option.type} Shipping
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        {option.freeThreshold && 'FREE'}
                        {!option.freeThreshold && `$${option.price}`}
                      </div>
                      {option.freeThreshold && (
                        <p className="text-sm text-muted-foreground">
                          on orders over ${option.freeThreshold}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{option.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{option.tracking ? 'Tracking available' : 'No tracking'}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* International Shipping */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">
              International Shipping
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>International Rates & Delivery Times</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Country</th>
                        <th className="text-left py-3">Shipping Cost</th>
                        <th className="text-left py-3">Delivery Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {internationalRates.map((rate, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3">{rate.country}</td>
                          <td className="py-3">${rate.price}</td>
                          <td className="py-3">{rate.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> International orders may be subject to customs duties and taxes. 
                    These charges are the responsibility of the recipient and vary by country.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shipping Process */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">
              Our Shipping Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {shippingProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="relative mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        {index < shippingProcess.length - 1 && (
                          <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-border -translate-x-6" />
                        )}
                      </div>
                      <div className="text-lg font-bold text-primary mb-2">
                        Step {step.step}
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <div className="text-sm text-muted-foreground mb-2">
                        {step.description}
                      </div>
                      <Badge variant="outline">{step.time}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Order Tracking */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">
              Track Your Order
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>How to Track</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-sm">
                      <strong>1. Order Confirmation:</strong> You'll receive an email with your order details within minutes of purchase.
                    </p>
                    <p className="text-sm">
                      <strong>2. Shipping Notification:</strong> When your order ships, we'll email you a tracking number.
                    </p>
                    <p className="text-sm">
                      <strong>3. Live Tracking:</strong> Use the tracking number on our website or the carrier's site.
                    </p>
                    <p className="text-sm">
                      <strong>4. Delivery Confirmation:</strong> You'll get an email when your package is delivered.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tracking Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Real-time location updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Estimated delivery date</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Delivery notifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Photo proof of delivery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Shipping Restrictions */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">
              Shipping Restrictions
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Items We Cannot Ship</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Prohibited Items</h4>
                    <ul className="space-y-2">
                      {restrictions.map((restriction, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          {restriction}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Special Requirements</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Some items may require special handling</p>
                      <p>• Large items may have additional shipping fees</p>
                      <p>• International orders require customs forms</p>
                      <p>• Military addresses may have delays</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Need Shipping Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our shipping specialists are here to help with any questions about your delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call Support
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Email Shipping Team
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Shipping Support: Monday-Friday 9AM-6PM EST</p>
              <p>Phone: 1-800-SPROUT-1</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingInfoPage;
