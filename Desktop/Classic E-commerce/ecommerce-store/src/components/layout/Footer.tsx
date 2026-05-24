'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Truck, RefreshCcw, Headphones, Send, Image, Mail, Globe, Heart, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Truck,
    title: 'ফ্রি শিপিং',
    titleEn: 'Free Shipping',
    description: '৳৫০০+ অর্ডারে',
    descriptionEn: 'On orders over ৳৫০০',
    color: 'from-indigo-600 to-indigo-400',
  },
  {
    icon: RefreshCcw,
    title: 'সহজ রিটার্ন',
    titleEn: 'Easy Returns',
    description: '৭ দিনের রিটার্ন পলিসি',
    descriptionEn: '7-day return policy',
    color: 'from-mint-500 to-mint-400',
  },
  {
    icon: Headphones,
    title: '২৪/৭ সাপোর্ট',
    titleEn: '24/7 Support',
    description: 'সর্বদা প্রস্তুত',
    descriptionEn: 'Always ready',
    color: 'from-teal-500 to-teal-400',
  },
  {
    icon: ShoppingBag,
    title: 'নিরাপদ পেমেন্ট',
    titleEn: 'Secure Payment',
    description: '১০০% নিরাপদ লেনদেন',
    descriptionEn: '100% secure transactions',
    color: 'from-indigo-500 to-indigo-400',
  },
];

const footerLinks = {
  'শপ': [
    { label: 'সব পণ্য', labelEn: 'All Products', href: '/products' },
    { label: 'নতুন এরিভাল', labelEn: 'New Arrivals', href: '/products?sort=new' },
    { label: 'বেস্ট সেলার', labelEn: 'Best Sellers', href: '/products?sort=popular' },
    { label: 'সেল', labelEn: 'Sale', href: '/products?sale=true' },
  ],
  'সাপোর্ট': [
    { label: 'হেল্প সেন্টার', labelEn: 'Help Center', href: '/help' },
    { label: 'শিপিং তথ্য', labelEn: 'Shipping Info', href: '/shipping' },
    { label: 'রিটার্নস', labelEn: 'Returns', href: '/returns' },
    { label: 'যোগাযোগ', labelEn: 'Contact Us', href: '/contact' },
  ],
  'কোম্পানি': [
    { label: 'আমাদের সম্পর্কে', labelEn: 'About Us', href: '/about' },
    { label: 'ক্যারিয়ার', labelEn: 'Careers', href: '/careers' },
    { label: 'প্রেস', labelEn: 'Press', href: '/press' },
    { label: 'ব্লগ', labelEn: 'Blog', href: '/blog' },
  ],
  'লিগ্যাল': [
    { label: 'প্রাইভেসি পলিসি', labelEn: 'Privacy Policy', href: '/privacy' },
    { label: 'টার্মস অফ সার্ভিস', labelEn: 'Terms of Service', href: '/terms' },
    { label: 'কুকি পলিসি', labelEn: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Send, href: '#', label: 'Facebook', color: 'hover:bg-indigo-600' },
  { icon: Image, href: '#', label: 'Instagram', color: 'hover:bg-teal-600' },
  { icon: Mail, href: 'https://www.linkedin.com/in/azaz-ahmed-eraj/', label: 'LinkedIn', color: 'hover:bg-indigo-700', external: true },
  { icon: Globe, href: '#', label: 'Website', color: 'hover:bg-mint-600' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background via-muted/50 to-muted border-t relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-500/10 via-mint-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-bengali opacity-20" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-start space-x-4 p-5 rounded-2xl glass-advanced hover:bg-muted/70 transition-all duration-300 group cursor-pointer border border-border/50"
            >
              <motion.div
                className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <feature.icon className="h-6 w-6" />
              </motion.div>
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">{feature.descriptionEn}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Separator className="mb-12 bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-1 space-y-4"
          >
            <Link href="/" className="inline-block">
              <motion.div
                className="flex items-center gap-3"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 via-mint-500 to-teal-600 flex items-center justify-center shadow-lg">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <motion.span
                  className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  DeshiBazar
                </motion.span>
              </motion.div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              আপনার বিশ্বস্ত অনলাইন শপিং গন্তব্য - Authentic Bengali products,
              Jamdani sarees, Nakshi kantha, traditional crafts and more.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Quality meets heritage. দেশীয় পণ্য, আন্তর্জাতিক মান।
            </p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-3 flex-wrap"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className={`p-3 rounded-full bg-muted ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                {category}
                <motion.div
                  className="h-0.5 w-8 bg-gradient-to-r from-indigo-500 via-mint-500 to-teal-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                />
              </h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors relative inline-block group"
                    >
                      {link.label}
                      <motion.span
                        className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-mint-500"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                    <p className="text-xs text-muted-foreground/50">{link.labelEn}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full glass-advanced px-6 py-3 text-sm mb-4 border border-indigo-500/20"
          >
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span className="font-medium text-gradient">নিউজলেটার</span>
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">সাবস্ক্রাইব করুন আমাদের নিউজলেটার</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest updates on new products and upcoming sales.
          </p>
          <motion.div
            className="flex gap-3 max-w-md mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Input
              type="email"
              placeholder="আপনার ইমেইল দিন"
              className="flex-1 focus:ring-2 focus:ring-indigo-500/20 rounded-full"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white shadow-lg hover:shadow-xl">
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  সাবস্ক্রাইব
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-mint-500 via-teal-500 to-indigo-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <Separator className="mb-8 bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground"
          >
            <p>© ২০২৪ DeshiBazar. সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="hidden md:inline">(All rights reserved)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 flex-wrap justify-center"
          >
            {['প্রাইভেসি', 'টার্মস', 'কুকিজ'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative inline-block group"
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-mint-500"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Heart className="h-4 w-4 text-indigo-500 fill-indigo-500" />
            <span>Developed by</span>
            <Link
              href="https://www.linkedin.com/in/azaz-ahmed-eraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 bg-clip-text font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-1 group"
            >
              Eraj
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Made with love badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-muted-foreground/60"
        >
          <span>🇧🇩</span>
          <span>Made with ❤️ in Bangladesh</span>
        </motion.div>
      </div>
    </footer>
  );
}
