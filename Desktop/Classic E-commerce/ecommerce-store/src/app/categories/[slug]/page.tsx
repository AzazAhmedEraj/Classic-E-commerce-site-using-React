'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Star, Heart, Truck, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, products } from '@/lib/data';
import ProductCard from '@/components/products/ProductCard';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.category === category?.nameEn);

  if (!category) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center py-16 alpona-bg">
          <div className="text-center max-w-md mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="h-32 w-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-600 to-mint-500 flex items-center justify-center shadow-xl"
              >
                <ShoppingBag className="h-16 w-16 text-white" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gradient-bengal">
                ক্যাটাগরি পাওয়া যায়নি
              </h1>
              <p className="text-muted-foreground mb-8">
                দুঃখিত, এই ক্যাটাগরিটি এখনো উপলব্ধ নয়।
              </p>
              <Button size="lg" className="rounded-full bg-gradient-to-r from-indigo-600 to-mint-500 text-white hover:opacity-90" onClick={() => window.location.href = '/categories'}>
                সব ক্যাটাগরি দেখুন
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden alpona-bg">
          <div className="absolute inset-0 aurora-soft opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 rounded-full glass-subtle px-6 py-3 text-sm border border-indigo-500/20"
              >
                <Heart className="h-4 w-4 text-indigo-500" />
                <span className="font-medium text-gradient-bengal">{category.name}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="text-gradient-bengal">{category.name}</span>
                <span className="text-foreground ml-4">{category.nameEn}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                {category.description} - {category.count}টি পণ্য available
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Category Image Showcase */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden glass-subtle"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8 রেটিং</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                    <Truck className="h-4 w-4" />
                    <span className="text-sm font-medium">ফ্রি ডেলিভারি</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">১০০% খাঁটি</span>
                  </div>
                </div>
                <p className="text-white/80 max-w-2xl">{category.description}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 alpona-bg">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-6 -mt-32 relative z-10">
              {[
                { icon: Truck, title: 'ফ্রি ডেলিভারি', titleEn: 'Free Delivery', desc: 'সারা দেশে ফ্রি ডেলিভারি', color: 'from-indigo-600 to-indigo-400' },
                { icon: Shield, title: 'খাঁতি পণ্য', titleEn: 'Authentic Products', desc: '১০০% আসল পণ্য', color: 'from-mint-500 to-mint-400' },
                { icon: Zap, title: 'দ্রুত ডেলিভারি', titleEn: 'Fast Delivery', desc: '২-৩ দিনের মধ্যে', color: 'from-teal-500 to-teal-400' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-subtle p-6 rounded-2xl border text-center"
                >
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 mx-auto`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.titleEn}</p>
                  <p className="text-sm text-muted-foreground mt-2">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-bengal">
                এই ক্যাটাগরির পণ্য
              </h2>
              <p className="text-muted-foreground">
                {categoryProducts.length}টি পণ্য পাওয়া যাচ্ছে
              </p>
            </motion.div>

            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center py-16 glass-subtle rounded-2xl"
              >
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">এই ক্যাটাগরিতে কোনো পণ্য নেই</h3>
                <p className="text-muted-foreground mb-6">
                  আমরা খুব শীঘ্রই নতুন পণ্য যোগ করব
                </p>
                <Button
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-mint-500 text-white"
                  onClick={() => window.location.href = '/products'}
                >
                  সব পণ্য দেখুন
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem] glass-subtle p-8 md:p-12 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 opacity-90" />
              <div className="absolute inset-0 nakshi-pattern opacity-10" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  আরও দেখতে চান?
                </h2>
                <p className="text-white/80 max-w-xl mx-auto">
                  আমাদের সব ক্যাটাগরি এক্সপ্লোর করুন এবং আরও amazing পণ্য খুঁজে নিন
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 text-lg bg-white text-indigo-600 hover:bg-mint-100"
                    onClick={() => window.location.href = '/categories'}
                  >
                    সব ক্যাটাগরি
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-lg border-2 text-white hover:bg-white/10"
                    onClick={() => window.location.href = '/products'}
                  >
                    সব পণ্য
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
