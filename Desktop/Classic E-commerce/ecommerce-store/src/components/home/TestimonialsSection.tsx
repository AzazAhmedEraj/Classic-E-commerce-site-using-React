'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Heart, CheckCircle } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating quote marks */}
        <motion.div
          className="absolute top-20 left-10 text-9xl font-serif text-indigo-500/5"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          &ldquo;
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-9xl font-serif text-mint-500/5 rotate-180"
          animate={{ y: [0, 20, 0], rotate: [180, 185, 180] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          &rdquo;
        </motion.div>

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-mint-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-teal-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-bengali opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 rounded-full glass-advanced px-6 py-3 text-sm border border-pink-500/20"
          >
            <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />
            <span className="font-medium text-gradient">গ্রাহকদের মতামত</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-foreground">আমাদের </span>
            <span className="text-gradient">গ্রাহকরা </span>
            <span className="text-foreground">কি বলেন</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            আমাদের কথা বিশ্বাস করবেন না? দেখুন আমাদের তৃপ্ত গ্রাহকরা
            তাদের অভিজ্ঞতা সম্পর্কে কি বলছেন।
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card with gradient border effect */}
              <div className="relative rounded-3xl border bg-card/80 backdrop-blur-xl p-8 space-y-6 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/30">
                {/* Gradient border animation */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-mint-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  className="absolute top-6 right-6 p-3 rounded-full bg-gradient-to-br from-indigo-500/10 to-mint-500/10"
                >
                  <Quote className="h-5 w-5 text-indigo-500" />
                </motion.div>

                {/* Rating stars with animation */}
                <motion.div
                  className="flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.3 + i * 0.05,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Content with Bengali text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="space-y-3"
                >
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground/70 italic">
                    ({testimonial.contentEn})
                  </p>
                </motion.div>

                {/* Author */}
                <motion.div
                  className="flex items-center gap-3 pt-6 border-t border-border/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-indigo-500/20 ring-offset-2 ring-offset-background"
                    />
                    {/* Verified badge */}
                    <motion.div
                      className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-gradient-to-br from-mint-500 to-teal-600 shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6, type: 'spring' }}
                    >
                      <CheckCircle className="h-3 w-3 text-white" />
                    </motion.div>
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.authorEn}
                    </p>
                    <motion.div
                      className="flex items-center gap-2 mt-1"
                      whileHover={{ x: 2 }}
                    >
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 text-xs font-medium">
                        <CheckCircle className="h-3 w-3" />
                        ✓ যাচাইকৃত ক্রেতা
                      </span>
                      <span className="text-xs text-muted-foreground">
                        | {testimonial.role}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-mint-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8"
          >
            <span className="text-gradient font-semibold">৫০,০০০+</span> খুশি গ্রাহকের উপর বিশ্বস্ত
          </motion.p>
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {[
              { label: '৪.৯/৫ রেটিং', labelEn: 'Rating', color: 'from-indigo-500 to-indigo-400' },
              { label: 'ফাস্ট ডেলিভারি', labelEn: 'Fast Shipping', color: 'from-mint-500 to-mint-400' },
              { label: 'নিরাপদ পেমেন্ট', labelEn: 'Secure Payment', color: 'from-teal-500 to-teal-400' },
              { label: 'সহজ রিটার্ন', labelEn: 'Easy Returns', color: 'from-indigo-500 to-indigo-400' },
            ].map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl glass-advanced border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${badge.color} pulse-glow`} />
                <p className="font-semibold text-foreground">{badge.label}</p>
                <p className="text-xs text-muted-foreground">{badge.labelEn}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">
            আপনিও কি আমাদের সাথে যুক্ত হতে চান?
          </p>
          <p className="text-sm text-muted-foreground/70 mb-6">
            (Want to join us too?)
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                এখনই কিনুন
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-mint-500 via-teal-500 to-indigo-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
