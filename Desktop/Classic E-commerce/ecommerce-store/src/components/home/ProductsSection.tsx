'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Sparkles, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';

interface ProductsSectionProps {
  title: string;
  titleEn: string;
  subtitle: string;
  products: Product[];
  viewAllHref?: string;
}

export default function ProductsSection({
  title,
  titleEn,
  subtitle,
  products,
  viewAllHref = '/products',
}: ProductsSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/50 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/10 via-mint-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-teal-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Floating particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 via-mint-500 to-teal-500 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full glass-advanced px-6 py-3 text-sm border border-indigo-500/20"
          >
            {title.includes('ট্রেন্ডিং') ? (
              <TrendingUp className="h-4 w-4 text-indigo-500" />
            ) : (
              <Sparkles className="h-4 w-4 text-mint-500" />
            )}
            <span className="font-medium text-gradient">
              {title.includes('ট্রেন্ডিং') ? '🔥 হট পিকস' : '✨ নতুন এরিভাল'}
            </span>
          </motion.div>

          {/* Title with gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-gradient">{title}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300"
            onClick={() => window.location.href = viewAllHref}
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              সব পণ্য দেখুন
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-mint-500 via-teal-500 to-indigo-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </Button>
        </motion.div>

        {/* Promo Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 relative overflow-hidden rounded-[2.5rem] glass-advanced p-8 md:p-12"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 gradient-animate opacity-80" style={{
            backgroundImage: 'linear-gradient(135deg, rgba(99,102,241,0.9) 0%, rgba(16,185,129,0.8) 50%, rgba(20,184,166,0.9) 100%)'
          }} />

          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 rounded-full border-4 border-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-16 h-16 rounded-full border-4 border-white/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm"
              >
                <Star className="h-4 w-4 fill-white" />
                বিশেষ অফার
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              >
                প্রথম অর্ডারে ২০% ছাড়
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-lg"
              >
                আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং এক্সক্লুসিভ অফার পান
              </motion.p>

              {/* Bengali decorative text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-sm"
              >
                🇧🇩 দেশীয় পণ্য, আন্তর্জাতিক মান
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <Button
                size="lg"
                variant="secondary"
                className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  সাবস্ক্রাইব করুন
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
