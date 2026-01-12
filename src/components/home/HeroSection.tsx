import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-peach/30 blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-lavender/30 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-mint/30 blur-xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Trusted by 100,000+ Parents
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Everything Your{' '}
              <span className="text-gradient">Little One</span>{' '}
              Needs to Bloom
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Premium, organic baby products designed with love. From cozy clothing to gentle care essentials, we've got your bundle of joy covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products" className="gap-2">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-mint-light flex items-center justify-center">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span>100% Safe</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-peach-light flex items-center justify-center">
                  <Heart className="h-4 w-4 text-peach" />
                </div>
                <span>Organic Materials</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-lavender-light flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-lavender" />
                </div>
                <span>Free Shipping 50+</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-mint-light to-peach-light p-2 shadow-elevated rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600"
                  alt="Happy baby with toys"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 bg-background rounded-xl shadow-card p-3 animate-bounce-gentle">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👶</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Happy Babies</p>
                    <p className="font-bold text-sm">100K+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-background rounded-xl shadow-card p-3 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <p className="font-bold text-sm">4.9/5</p>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/4 -bottom-4 bg-background rounded-xl shadow-card p-3 animate-bounce-gentle" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Organic</p>
                    <p className="font-bold text-sm">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
