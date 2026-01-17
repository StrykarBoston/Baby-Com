import React, { useState } from 'react';
import { Ruler, Baby, Shirt, Package, HelpCircle, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Layout } from '@/components/layout/Layout';

const SizeGuidePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('clothing');

  const sizeCharts = {
    clothing: {
      title: 'Baby Clothing Sizes',
      description: 'Measure your baby for the best fit. If between sizes, size up for comfort.',
      image: 'https://images.unsplash.com/photo-1573403271145-392a1e1d2a1d?w=400&h=300&fit=crop',
      sizes: [
        { size: 'Newborn', weight: '5-8 lbs', height: '17-19"', chest: '13"', waist: '12.5"' },
        { size: '0-3 months', weight: '8-12 lbs', height: '19-23"', chest: '14"', waist: '13.5"' },
        { size: '3-6 months', weight: '12-16 lbs', height: '23-27"', chest: '15"', waist: '14.5"' },
        { size: '6-9 months', weight: '16-20 lbs', height: '27-29"', chest: '16"', waist: '15.5"' },
        { size: '9-12 months', weight: '20-24 lbs', height: '29-31"', chest: '17"', waist: '16.5"' },
        { size: '12-18 months', weight: '24-28 lbs', height: '31-34"', chest: '18"', waist: '17.5"' },
        { size: '18-24 months', weight: '28-32 lbs', height: '34-36"', chest: '19"', waist: '18.5"' }
      ]
    },
    shoes: {
      title: 'Baby Shoe Sizes',
      description: 'Measure baby\'s foot from heel to longest toe while standing.',
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a19?w=400&h=300&fit=crop',
      sizes: [
        { size: '0-3 months', age: '0-3 months', length: '3.5"', euSize: '16-17', ukSize: '0-1' },
        { size: '3-6 months', age: '3-6 months', length: '4"', euSize: '18-19', ukSize: '2-3' },
        { size: '6-9 months', age: '6-9 months', length: '4.5"', euSize: '20-21', ukSize: '3-4' },
        { size: '9-12 months', age: '9-12 months', length: '5"', euSize: '22-23', ukSize: '4-5' },
        { size: '12-18 months', age: '12-18 months', length: '5.5"', euSize: '24-25', ukSize: '6-7' },
        { size: '18-24 months', age: '18-24 months', length: '6"', euSize: '26-27', ukSize: '7-8' }
      ]
    },
    diapers: {
      title: 'Diaper Sizes',
      description: 'Choose based on weight, but consider waist fit and activity level.',
      image: 'https://images.unsplash.com/photo-1544967916-806393e5e5a0?w=400&h=300&fit=crop',
      sizes: [
        { size: 'Preemie', weight: 'Up to 6 lbs', count: 'Per pack: 30-40', features: 'Umbilical cutout' },
        { size: 'Newborn', weight: '6-10 lbs', count: 'Per pack: 35-40', features: 'Extra soft liner' },
        { size: 'Size 1', weight: '8-14 lbs', count: 'Per pack: 40-50', features: 'Wetness indicator' },
        { size: 'Size 2', weight: '12-18 lbs', count: 'Per pack: 35-45', features: 'Stretchy sides' },
        { size: 'Size 3', weight: '16-28 lbs', count: 'Per pack: 30-40', features: 'All-around protection' },
        { size: 'Size 4', weight: '22-37 lbs', count: 'Per pack: 25-35', features: 'Extra absorbency' },
        { size: 'Size 5', weight: 'Over 27 lbs', count: 'Per pack: 20-30', features: 'Overnight protection' }
      ]
    }
  };

  const measuringTips = [
    {
      title: 'Height/Length',
      description: 'Measure from top of head to bottom of feet while baby is lying down.',
      icon: Ruler
    },
    {
      title: 'Weight',
      description: 'Use a baby scale or weigh yourself holding and without baby, then subtract.',
      icon: Package
    },
    {
      title: 'Chest',
      description: 'Measure around the fullest part of the chest, under arms.',
      icon: Shirt
    },
    {
      title: 'Waist',
      description: 'Measure around natural waistline, usually above belly button.',
      icon: Baby
    }
  ];

  const currentChart = sizeCharts[selectedCategory as keyof typeof sizeCharts];

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-br from-mint-light/30 to-peach-light/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Ruler className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl font-bold font-heading mb-4">
              Size Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              Find the perfect fit for your little one with our comprehensive size charts
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Category Selector */}
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.keys(sizeCharts).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === 'clothing' && 'Clothing'}
                {category === 'shoes' && 'Shoes'}
                {category === 'diapers' && 'Diapers'}
              </Button>
            ))}
          </div>

          {/* Size Chart */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>{currentChart.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {currentChart.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3">Size</th>
                          <th className="text-left py-3">Weight</th>
                          <th className="text-left py-3">Height</th>
                          <th className="text-left py-3">Chest</th>
                          <th className="text-left py-3">Waist</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentChart.sizes.map((size, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 font-medium">{size.size}</td>
                            <td className="py-3">{size.weight}</td>
                            <td className="py-3">{size.height}</td>
                            <td className="py-3">{size.chest}</td>
                            <td className="py-3">{size.waist}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              {/* Product Image */}
              <Card>
                <CardContent className="pt-6">
                  <img
                    src={currentChart.image}
                    alt={currentChart.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-3">
                    <h3 className="font-semibold">Quick Tips</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Always measure your baby before ordering</p>
                      <p>• Consider room for growth and layering</p>
                      <p>• Check specific product measurements in descriptions</p>
                      <p>• When in doubt, size up for comfort</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Measuring Guide */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>How to Measure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {measuringTips.map((tip, index) => {
                      const Icon = tip.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h4 className="font-medium text-sm mb-1">{tip.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {tip.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Size Conversion Chart */}
          {selectedCategory === 'clothing' && (
            <Card>
              <CardHeader>
                <CardTitle>International Size Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">US</th>
                        <th className="text-left py-3">UK</th>
                        <th className="text-left py-3">EU</th>
                        <th className="text-left py-3">Age</th>
                        <th className="text-left py-3">Weight (lbs)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Newborn</td>
                        <td className="py-3">0-1</td>
                        <td className="py-3">50-56</td>
                        <td className="py-3">0-1 mo</td>
                        <td className="py-3">5-8</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">0-3M</td>
                        <td className="py-3">1-2</td>
                        <td className="py-3">56-62</td>
                        <td className="py-3">1-3 mo</td>
                        <td className="py-3">8-12</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">3-6M</td>
                        <td className="py-3">2-3</td>
                        <td className="py-3">62-68</td>
                        <td className="py-3">3-6 mo</td>
                        <td className="py-3">12-16</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">6-9M</td>
                        <td className="py-3">3-4</td>
                        <td className="py-3">68-74</td>
                        <td className="py-3">6-9 mo</td>
                        <td className="py-3">16-20</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">9-12M</td>
                        <td className="py-3">4-5</td>
                        <td className="py-3">74-80</td>
                        <td className="py-3">9-12 mo</td>
                        <td className="py-3">20-24</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Fit Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Finding the Perfect Fit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Signs of Good Fit</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <div>
                        <p className="text-sm font-medium">Two fingers fit</p>
                        <p className="text-xs text-muted-foreground">
                          Should fit 2 fingers between clothing and baby's body
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <div>
                        <p className="text-sm font-medium">Easy movement</p>
                        <p className="text-xs text-muted-foreground">
                          Baby can move arms and legs freely
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <div>
                        <p className="text-sm font-medium">No red marks</p>
                        <p className="text-xs text-muted-foreground">
                          No indentation on skin after removing clothing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Signs of Poor Fit</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                      <div>
                        <p className="text-sm font-medium">Too tight</p>
                        <p className="text-xs text-muted-foreground">
                          Difficulty dressing, red marks, restricted movement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                      <div>
                        <p className="text-sm font-medium">Too loose</p>
                        <p className="text-xs text-muted-foreground">
                          Excess fabric, slipping off, safety hazard
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                      <div>
                        <p className="text-sm font-medium">Wrong length</p>
                        <p className="text-xs text-muted-foreground">
                          Too short (rides up) or too long (trips hazard)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Still Unsure About Sizing?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our sizing experts are here to help you find the perfect fit for your baby.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <HelpCircle className="mr-2 h-4 w-4" />
                Chat with Sizing Expert
              </Button>
              <Button size="lg" variant="outline">
                Schedule Fitting Appointment
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Sizing Support: Available 24/7</p>
              <p>Free Returns on Wrong Sizes</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SizeGuidePage;
