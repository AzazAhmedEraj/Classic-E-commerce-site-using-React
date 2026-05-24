'use client';

import { ShoppingBag, ShoppingCart, Search, User, Menu, X, Heart, Zap, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import CartDrawer from '@/components/cart/CartDrawer';

const navLinks = [
  { href: '/', label: 'হোম', labelEn: 'Home' },
  { href: '/products', label: 'শপ', labelEn: 'Shop' },
  { href: '/categories', label: 'ক্যাটাগরি', labelEn: 'Categories' },
  { href: '/about', label: 'আমাদের', labelEn: 'About' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, toggleCart } = useCartStore();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 glass-advanced ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-lg shadow-red-500/10'
            : 'bg-background/60 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo with animated gradient */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-mint-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="h-5 w-5 text-white" />
              </motion.div>
              <motion.div
                className="flex flex-col"
                animate={{
                  x: isScrolled ? [0, 2, 0] : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  DeshiBazar
                </motion.span>
                <span className="text-[10px] text-muted-foreground -mt-1">
                  দেশীয় পণ্য, আন্তর্জাতিক মান
                </span>
              </motion.div>
              {isScrolled && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-mint-500 pulse-glow"
                />
              )}
            </Link>

            {/* Desktop Navigation with underline animation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-full hover:bg-muted/50"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    <span className="text-[10px] text-muted-foreground/60 hidden lg:inline">
                      ({link.labelEn})
                    </span>
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-indigo-500 via-mint-500 to-teal-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-1">
              {/* Search with expand animation */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 280, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <Input
                      type="search"
                      placeholder="অনুসন্ধান করুন..."
                      className="h-9 w-full border-primary/20 focus:border-primary focus:ring-2 focus:ring-red-500/20 rounded-full"
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="hidden sm:flex rounded-full"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </motion.div>

              {/* Cart button with animated badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full"
                  onClick={toggleCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <AnimatePresence>
                    {totalItems() > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                        className="absolute -top-1 -right-1"
                      >
                        <Badge
                          variant="destructive"
                          className="h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center bg-gradient-to-r from-indigo-600 to-mint-500 border-0 shadow-lg"
                        >
                          {totalItems()}
                        </Badge>
                        {/* Pulse animation for cart badge */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-indigo-500"
                          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="md:hidden"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="rounded-full"
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="x"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Menu with stagger animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu panel */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden border-t bg-background"
              >
                <nav className="flex flex-col space-y-1 py-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted rounded-md mx-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="flex items-center gap-2">
                          {link.label}
                          <span className="text-xs text-muted-foreground/60">
                            ({link.labelEn})
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="flex items-center space-x-2 pt-4 border-t mx-2"
                  >
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                    <div className="flex-1" />
                    <Badge variant="secondary" className="flex items-center gap-1 rounded-full">
                      <Zap className="h-3 w-3" />
                      {totalItems()} items
                    </Badge>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Promotional banner below header */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="hidden md:block bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white py-2 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center gap-2 text-sm font-medium"
            animate={{
              x: [0, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="h-4 w-4" />
            <span>🎉 প্রথম অর্ডারে ২০% ছাড়! কোড: WELCOME20</span>
            <Sparkles className="h-4 w-4" />
          </motion.div>
        </div>
      </motion.div>

      <CartDrawer />
    </>
  );
}
