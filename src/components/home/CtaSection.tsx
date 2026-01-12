import { Link } from 'react-router-dom';
import { Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-mint p-8 md:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-primary-foreground text-sm font-medium mb-6">
                <Gift className="h-4 w-4" />
                New Arrivals Weekly
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Get 15% Off Your First Order
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Join our family of happy parents and enjoy exclusive discounts, early access to new products, and expert parenting tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="xl"
                  asChild
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link to="/signup" className="gap-2">
                    Create Account
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  asChild
                  className="border-white/50 text-primary-foreground hover:bg-white/10"
                >
                  <Link to="/products">Browse Products</Link>
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500"
                  alt="Baby with toys"
                  className="relative rounded-3xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
