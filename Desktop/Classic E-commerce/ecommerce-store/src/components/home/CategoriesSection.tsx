'use client';

import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Sparkles, ShoppingBag, Heart } from 'lucide-react';
import Link from 'next/link';
import { Category } from '@/types';
import { Button } from '@/components/ui/button';
import { categories } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function CategoriesSection() {
  const controls = useAnimation();
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  useEffect(() => {
    controls.start({
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: { duration: 5, repeat: Infinity, ease: 'linear' }
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/10 via-mint-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-bengali opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with enhanced styling */}
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
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span className="font-medium text-gradient">আমাদের ক্যাটাগরি সমূহ</span>
            <Sparkles className="h-4 w-4 text-indigo-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-gradient">জনপ্রিয়</span>
            <span className="text-foreground ml-4">বিভাগসমূহ</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            আবিষ্কার করুন আমাদের যত্নসহকারে বাছাই করা ক্যাটাগরি, প্রতিটি অফার করে
            আপনার জীবনের প্রতিটি দিকের জন্য প্রিমিয়াম মানের পণ্য।
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link href={`/categories/${category.slug}`} className="block">
                <div className="relative aspect-square overflow-hidden rounded-3xl gradient-border-animated glass-advanced group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      transform: hoveredCategory === index ? 'scale(1.15) rotate(2deg)' : 'scale(1)',
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"
                    style={{ opacity: hoveredCategory === index ? 1 : 0.7 }}
                  />

                  {/* Content */}
                  <div className="relative inset-0 p-6 flex flex-col justify-end h-full">
                    {/* Category count badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/80 to-mint-500/80 backdrop-blur-sm text-white text-xs w-fit mb-3"
                    >
                      <Heart className="h-3 w-3 fill-white" />
                      {category.count}টি পণ্য
                    </motion.div>

                    {/* Category names */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/70 mb-3">
                      {category.nameEn}
                    </p>
                    <p className="text-xs text-white/50">
                      {category.description}
                    </p>

                    {/* Arrow button */}
                    <motion.div
                      className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      animate={{
                        rotate: hoveredCategory === index ? 45 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%', rotate: 45 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Holographic border on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none holographic" />
                </div>

                {/* Floating info card */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-advanced rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <ShoppingBag className="h-4 w-4 inline mr-2" />
                  এক্সপ্লোর করুন →
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300"
            onClick={() => window.location.href = '/categories'}
          >
            <span className="relative z-10 flex items-center gap-2">
              সব ক্যাটাগরি দেখুন
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
      </div>
    </section>
  );
}
