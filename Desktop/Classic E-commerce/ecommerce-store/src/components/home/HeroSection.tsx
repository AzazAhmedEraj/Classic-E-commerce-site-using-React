'use client';

import { motion, useAnimation, useScroll, useMotionValueEvent } from 'framer-motion';
import { ShoppingBag, Sparkles, ArrowRight, Star, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollPosition(latest);
  });

  useEffect(() => {
    controls.start({
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      transition: { duration: 20, repeat: Infinity, ease: 'linear' }
    });
  }, [controls]);

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={controls}
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(220, 38, 38, 0.4) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(251, 191, 36, 0.3) 0px, transparent 50%),
            radial-gradient(at 40% 80%, rgba(124, 58, 237, 0.3) 0px, transparent 50%),
            radial-gradient(at 90% 70%, rgba(8, 145, 178, 0.3) 0px, transparent 50%),
            radial-gradient(at 10% 60%, rgba(236, 72, 153, 0.3) 0px, transparent 50%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-indigo-500 via-mint-500 to-teal-500 opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Decorative rings */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 border-2 border-indigo-500/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 border-2 border-mint-500/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full glass-advanced px-6 py-3 text-sm border border-indigo-500/20"
            >
              <Sparkles className="h-4 w-4 text-indigo-500" />
              <span className="font-medium text-gradient">স্বাগতম DeshiBazar-এ</span>
              <Sparkles className="h-4 w-4 text-indigo-500" />
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="block text-foreground">বাংলার</span>
                <span className="block text-gradient">ঐতিহ্য</span>
                <span className="block text-foreground">আপনার</span>
                <span className="block text-gradient">দোরগোড়ায়</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
              >
                আপনার বিশ্বস্ত অনলাইন শপিং গন্তব্য - authentic Bengali products,
                Jamdani sarees, Nakshi kantha, traditional crafts and more.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300"
                onClick={() => window.location.href = '/products'}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  এখনই কিনুন
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-mint-500 via-teal-500 to-indigo-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group rounded-full px-8 py-6 text-lg font-semibold border-2 gradient-border-animated hover:bg-indigo-500/10 transition-all duration-300"
                onClick={() => window.location.href = '/categories'}
              >
                <Globe className="h-5 w-5 mr-2" />
                সব বিভাগ
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8"
            >
              {[
                { icon: Star, value: '৫০,০০০+', label: 'খুশি গ্রাহক', labelEn: 'Happy Customers' },
                { icon: ShoppingBag, value: '১০,০০০+', label: 'পণ্য', labelEn: 'Products' },
                { icon: Zap, value: '২৪/৭', label: 'সাপোর্ট', labelEn: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 text-indigo-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Decorative circles */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-indigo-500/10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border-4 border-mint-500/10"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-16 rounded-full border-4 border-teal-500/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central image with glass effect */}
              <motion.div
                className="absolute inset-0 glass-advanced rounded-full flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-4/5 h-4/5 rounded-full overflow-hidden gradient-border-animated">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98d58908610b?w=600&h=600&fit=crop"
                    alt="Bangladeshi Traditional Products"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/30 via-transparent to-mint-500/30" />
                </div>
              </motion.div>

              {/* Floating product cards */}
              <motion.div
                className="absolute -top-4 -right-4 glass-advanced rounded-2xl p-4 shadow-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-mint-500 flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">জামদানি শাড়ি</p>
                    <p className="text-sm text-muted-foreground">Starting ৳৪,৫০০</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-advanced rounded-2xl p-4 shadow-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mint-500 to-teal-500 flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">৪.৯ ★ রেটিং</p>
                    <p className="text-sm text-muted-foreground">৫০,০০০+ রিভিউ</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 glass-advanced rounded-2xl p-3 shadow-xl"
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-indigo-500" />
                  <span className="font-medium text-sm">ফাস্ট ডেলিভারি</span>
                </div>
              </motion.div>

              {/* Rotating decorative elements */}
              <motion.div
                className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-mint-500"
                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 right-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"
                animate={{ rotate: -360, scale: [1, 1.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-sm text-muted-foreground">স্ক্রল করুন</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-mint-500"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
