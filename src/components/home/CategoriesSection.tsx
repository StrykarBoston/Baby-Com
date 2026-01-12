import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';
import { cn } from '@/lib/utils';

export function CategoriesSection() {
  const colorMap: Record<string, string> = {
    'soft-pink': 'bg-soft-pink',
    'soft-blue': 'bg-soft-blue',
    'soft-yellow': 'bg-soft-yellow',
    'peach-light': 'bg-peach-light',
    'lavender-light': 'bg-lavender-light',
    'mint-light': 'bg-mint-light',
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our carefully curated collections, designed to meet every need of your growing baby.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-card animate-fade-in",
                colorMap[category.color] || 'bg-muted'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 group-hover:animate-wiggle transition-transform">
                {category.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-foreground text-sm md:text-base mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.productCount} products
              </p>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
                <ArrowRight className="h-4 w-4 text-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
