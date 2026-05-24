'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SlidersHorizontal, Grid, List, Search } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products, categories } from '@/lib/data';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'সব দাম', labelEn: 'All Prices', min: 0, max: Infinity },
  { label: '৳৫০০ এর নিচে', labelEn: 'Under ৳500', min: 0, max: 500 },
  { label: '৳৫০০ - ৳১০০০', labelEn: '৳500 - ৳1000', min: 500, max: 1000 },
  { label: '৳১০০০ - ৳৫০০০', labelEn: '৳1000 - ৳5000', min: 1000, max: 5000 },
  { label: '৳৫০০০+', labelEn: '৳5000+', min: 5000, max: Infinity },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products
    .filter((p) => selectedCategory === 'All' || p.category === selectedCategory)
    .filter((p) => p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max)
    .filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="relative py-16 md:py-20 overflow-hidden alpona-bg">
          <div className="absolute inset-0 aurora-soft opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
            >
              <span className="text-gradient-bengal">সব</span>
              <span className="text-foreground ml-4">পণ্য</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg text-center max-w-2xl mx-auto"
            >
              আমাদের সম্পূর্ণ সংগ্রহ থেকে খুঁজে নিন আপনার পছন্দের পণ্য
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl mx-auto mt-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="পণ্য খুঁজুন... (Search products)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 rounded-full border-2 focus:border-red-900/50"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="flex items-center justify-between lg:hidden mb-4">
              <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="rounded-full">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                ফিল্টার
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={cn(viewMode === 'grid' && 'bg-muted rounded-full')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={cn(viewMode === 'list' && 'bg-muted rounded-full')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Filters Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                'w-full lg:w-64 flex-shrink-0 space-y-6',
                isFilterOpen ? 'block' : 'hidden lg:block'
              )}
            >
              <div className="sticky top-24 space-y-6 glass-subtle p-6 rounded-2xl border">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    ক্যাটাগরি
                    <span className="text-xs text-muted-foreground">(Categories)</span>
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className={cn(
                        'block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors',
                        selectedCategory === 'All'
                          ? 'font-semibold bg-gradient-bengal text-white'
                          : 'text-muted-foreground hover:bg-muted'
                      )}
                    >
                      সব পণ্য (All)
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.name)}
                        className={cn(
                          'block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors',
                          selectedCategory === category.name
                            ? 'font-semibold bg-gradient-bengal text-white'
                            : 'text-muted-foreground hover:bg-muted'
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    দাম
                    <span className="text-xs text-muted-foreground">(Price)</span>
                  </h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPriceRange(range)}
                        className={cn(
                          'block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors',
                          selectedPriceRange.label === range.label
                            ? 'font-semibold bg-gradient-bengal text-white'
                            : 'text-muted-foreground hover:bg-muted'
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    সাজান
                    <span className="text-xs text-muted-foreground">(Sort)</span>
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:border-red-900/50"
                  >
                    <option value="featured">নির্বাচিত (Featured)</option>
                    <option value="price-low">দাম: কম থেকে বেশি</option>
                    <option value="price-high">দাম: বেশি থেকে কম</option>
                    <option value="rating">সর্বোচ্চ রেটিং</option>
                  </select>
                </div>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Desktop Toolbar */}
              <div className="hidden lg:flex items-center justify-between mb-6 glass-subtle p-4 rounded-2xl">
                <p className="text-sm text-muted-foreground">
                  দেখানো হচ্ছে {filteredProducts.length}টি পণ্য
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">ভিউ:</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setViewMode('grid')}
                    className={cn(viewMode === 'grid' && 'bg-muted rounded-full')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setViewMode('list')}
                    className={cn(viewMode === 'list' && 'bg-muted rounded-full')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Products */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16 glass-subtle rounded-2xl">
                  <p className="text-muted-foreground text-lg">কোনো পণ্য পাওয়া যায়নি</p>
                  <Button
                    variant="outline"
                    className="mt-4 rounded-full"
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedPriceRange(priceRanges[0]);
                      setSearchQuery('');
                    }}
                  >
                    ফিল্টার মুছুন
                  </Button>
                </div>
              ) : (
                <div
                  className={cn(
                    'gap-6',
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                      : 'flex flex-col'
                  )}
                >
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
