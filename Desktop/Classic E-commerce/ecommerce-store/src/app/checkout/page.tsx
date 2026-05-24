'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check, CreditCard, Truck, Lock, Shield, Gift, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCartStore } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const steps = [
  { name: 'শিপিং', nameEn: 'Shipping' },
  { name: 'পেমেন্ট', nameEn: 'Payment' },
  { name: 'নিশ্চিতকরণ', nameEn: 'Confirmation' },
];

export default function CheckoutPage() {
  const { items, totalPrice } = useCartStore();
  const [currentStep, setCurrentStep] = useState(0);

  if (items.length === 0) {
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
                <ShoppingCart className="h-16 w-16 text-white" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">
                আপনার কার্ট খালি
              </h1>
              <p className="text-muted-foreground mb-8">
                মনে হচ্ছে আপনি এখনও কিছু যোগ করেননি। আমাদের সংগ্রহ দেখুন!
              </p>
              <Button size="lg" className="rounded-full bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white hover:opacity-90" onClick={() => window.location.href = '/products'}>
                  এখনই কিনুন
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
        <div className="container mx-auto px-4 py-8">
          {/* Steps */}
          <div className="max-w-4xl mx-auto mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4"
            >
              {steps.map((step, index) => (
                <div key={step.name} className="flex items-center">
                  <motion.div
                    className={cn(
                      'h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors',
                      index <= currentStep
                        ? 'border-red-800 bg-gradient-bengal text-white'
                        : 'border-muted-foreground/30 text-muted-foreground'
                    )}
                    whileHover={{ scale: 1.1 }}
                  >
                    {index < currentStep ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </motion.div>
                  <div className="ml-2 text-left hidden sm:block">
                    <p
                      className={cn(
                        'text-sm font-semibold',
                        index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                      )}
                    >
                      {step.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{step.nameEn}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <motion.div
                      className={cn(
                        'w-8 sm:w-16 h-0.5 mx-4',
                        index < currentStep ? 'bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600' : 'bg-muted-foreground/30'
                      )}
                      initial={{ width: 0 }}
                      animate={{ width: index < currentStep ? '2rem' : '2rem', opacity: 1 }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="shipping"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="border rounded-2xl p-6 space-y-6 glass-subtle"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-400 text-white">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gradient">শিপিং তথ্য</h2>
                        <p className="text-sm text-muted-foreground">আপনার ডেলিভারির বিবরণ লিখুন</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          প্রথম নাম <span className="text-muted-foreground">(First Name)</span>
                        </label>
                        <Input type="text" placeholder="আজাহ" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          শেষ নাম <span className="text-muted-foreground">(Last Name)</span>
                        </label>
                        <Input type="text" placeholder="এরাজ" className="rounded-xl" />
                      </div>
                      <div className="sm:col-span-2 space-y-2">
                        <label className="text-sm font-medium">
                          ইমেইল <span className="text-muted-foreground">(Email)</span>
                        </label>
                        <Input type="email" placeholder="eraj@example.com" className="rounded-xl" />
                      </div>
                      <div className="sm:col-span-2 space-y-2">
                        <label className="text-sm font-medium">
                          ঠিকানা <span className="text-muted-foreground">(Address)</span>
                        </label>
                        <Input type="text" placeholder="১২৩ প্রধান সড়ক" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          শহর <span className="text-muted-foreground">(City)</span>
                        </label>
                        <Input type="text" placeholder="ঢাকা" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          পোস্টাল কোড <span className="text-muted-foreground">(Postal Code)</span>
                        </label>
                        <Input type="text" placeholder="১০০০" className="rounded-xl" />
                      </div>
                      <div className="sm:col-span-2 space-y-2">
                        <label className="text-sm font-medium">
                          দেশ <span className="text-muted-foreground">(Country)</span>
                        </label>
                        <select className="w-full rounded-xl border bg-background px-3 py-2 focus:border-indigo-600/50">
                          <option>বাংলাদেশ</option>
                          <option>ভারত</option>
                          <option>পাকিস্তান</option>
                          <option>যুক্তরাজ্য</option>
                          <option>যুক্তরাষ্ট্র</option>
                        </select>
                      </div>
                    </div>
                    <Button
                      className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white hover:opacity-90 transition-opacity"
                      size="lg"
                      onClick={() => setCurrentStep(1)}
                    >
                      পেমেন্টে যান
                    </Button>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="border rounded-2xl p-6 space-y-6 glass-subtle"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-teal-600 to-teal-400 text-white">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gradient">পেমেন্ট বিবরণ</h2>
                        <p className="text-sm text-muted-foreground">নিরাপদ পেমেন্ট পদ্ধতি</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">কার্ড নম্বর</label>
                        <Input type="text" placeholder="৪২৪২ ৪২৪২ ৪২৪২ ৪২৪২" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">কার্ডহোল্ডার নাম</label>
                        <Input type="text" placeholder="আজাহ আহমেদ এরাজ" className="rounded-xl" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">মেয়াদ</label>
                          <Input type="text" placeholder="MM/YY" className="rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">CVV</label>
                          <Input type="text" placeholder="১২৩" className="rounded-xl" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
                      <Shield className="h-4 w-4 text-indigo-600" />
                      <p className="text-xs text-indigo-700 dark:text-indigo-300">
                        আপনার পেমেন্ট তথ্য সম্পূর্ণ নিরাপদ এবং এনক্রিপ্টেড
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="flex-1 rounded-full"
                        onClick={() => setCurrentStep(0)}
                      >
                        পেছনে যান
                      </Button>
                      <Button
                        className="flex-1 rounded-full bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white hover:opacity-90"
                        size="lg"
                        onClick={() => setCurrentStep(2)}
                      >
                        অর্ডার দিন
                      </Button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border rounded-2xl p-6 text-center space-y-6 glass-subtle"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-mint-600 to-mint-400 flex items-center justify-center shadow-xl"
                    >
                      <Check className="h-10 w-10 text-white" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-gradient">
                        অর্ডার নিশ্চিত হয়েছে!
                      </h2>
                      <p className="text-muted-foreground">
                        আপনার কেনাকাটার জন্য ধন্যবাদ। আপনার অর্ডার নম্বর #১২৩৪৫।
                        আমরা আপনার ইমেইলে একটি নিশ্চিতকরণ বার্তা পাঠিয়েছি।
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
                      <Gift className="h-4 w-4 text-indigo-600" />
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">
                        আপনার প্রথম অর্ডারে ১০% ছাড়ের কোড: WELCOME10
                      </p>
                    </div>
                    <Button
                      className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white hover:opacity-90"
                      size="lg"
                      onClick={() => window.location.href = '/products'}
                    >
                      কেনাকাটা চালিয়ে যান
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="border rounded-2xl p-6 space-y-4 sticky top-24 h-fit glass-subtle"
              >
                <h3 className="font-bold text-lg flex items-center gap-2 text-gradient">
                  <ShoppingCart className="h-5 w-5" />
                  অর্ডার সারসংক্ষেপ
                </h3>
                <div className="space-y-3 max-h-64 overflow-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="h-16 w-16 rounded-xl border bg-muted flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">পরিমাণ: {item.quantity}</p>
                        <p className="text-sm font-bold text-transparent bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 bg-clip-text">
                          ৳{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">সাবটোটাল</span>
                    <span className="font-medium">৳{totalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ডেলিভারি</span>
                    <span className="text-mint-600 font-medium">ফ্রি</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ট্যাক্স (২%)</span>
                    <span className="font-medium">৳{(totalPrice() * 0.02).toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>মোট</span>
                    <span className="text-transparent bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 bg-clip-text">৳{(totalPrice() * 1.02).toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4">
                  <Lock className="h-3 w-3" />
                  <span>নিরাপদ চেকআউট - ২৫৬-বিট এনক্রিপশন</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
