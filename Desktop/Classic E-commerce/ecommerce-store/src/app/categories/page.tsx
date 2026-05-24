'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { categories } from '@/lib/data';

export default function CategoriesPage() {
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
                className="inline-flex items-center gap-2 rounded-full glass-subtle px-6 py-3 text-sm border border-red-900/20"
              >
                <Heart className="h-4 w-4 text-red-800" />
                <span className="font-medium text-gradient-bengal">আমাদের ক্যাটাগরি সমূহ</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="text-gradient-bengal">সব</span>
                <span className="text-foreground ml-4">বিভাগ</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                আবিষ্কার করুন আমাদের সম্পূর্ণ কালেকশন। প্রতিটি ক্যাটাগরিতে রয়েছে
                ঐতিহ্যবাহী বাংলার সেরা পণ্য।
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  className="group relative"
                >
                  <Link href={`/products?category=${category.slug}`}>
                    <div className="relative aspect-square overflow-hidden rounded-3xl gradient-border-bengal glass-subtle group-hover:shadow-2xl group-hover:shadow-red-900/10 transition-all duration-500">
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-900/80 to-amber-700/80 backdrop-blur-sm text-white text-xs w-fit mb-3">
                          <Heart className="h-3 w-3 fill-white" />
                          {category.count}টি পণ্য
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                        <p className="text-sm text-white/70 mb-2">{category.nameEn}</p>
                        <p className="text-xs text-white/50">{category.description}</p>
                        <div className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-subtle rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ShoppingBag className="h-4 w-4 inline mr-2" />
                      এক্সপ্লোর করুন →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
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
              <div className="absolute inset-0 gradient-bengal opacity-90" />
              <div className="absolute inset-0 nakshi-pattern opacity-10" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  কোনো ক্যাটাগরি খুঁজে পাচ্ছেন না?
                </h2>
                <p className="text-white/80 max-w-xl mx-auto">
                  আমাদের কাছে আরও অনেক পণ্য আছে। যোগাযোগ করুন এবং আমরা আপনাকে সাহায্য করব।
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-red-900 font-semibold hover:bg-amber-100 transition-colors"
                >
                  যোগাযোগ করুন
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
