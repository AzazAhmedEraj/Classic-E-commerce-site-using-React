'use client';

import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Truck, Shield } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCartStore } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCartStore();

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
                className="h-32 w-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-800 to-amber-600 flex items-center justify-center shadow-xl"
              >
                <ShoppingBag className="h-16 w-16 text-white" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gradient-bengal">
                আপনার কার্ট খালি
              </h1>
              <p className="text-muted-foreground mb-8">
                মনে হচ্ছে আপনি এখনও কিছু যোগ করেননি। আমাদের সংগ্রহ দেখুন!
              </p>
              <Button size="lg" className="rounded-full bg-gradient-bengal text-white hover:opacity-90" onClick={() => window.location.href = '/products'}>
                <ShoppingBag className="h-5 w-5 mr-2" />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              কেনাকাটা চালিয়ে যান
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-bengal">
              আপনার কার্ট ({totalItems()}টি পণ্য)
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-4 p-4 border rounded-2xl glass-subtle hover:shadow-lg transition-all"
                  >
                    <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl border bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">৳{item.price}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-red-100 hover:text-red-600"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-full overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1.5 hover:bg-muted transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 py-1.5 border-x min-w-[40px] text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1.5 hover:bg-muted transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-bold text-lg text-gradient-bengal">
                          ৳{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="border rounded-2xl p-6 space-y-4 sticky top-24 glass-subtle"
                >
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-red-800" />
                    অর্ডার সারসংক্ষেপ
                  </h2>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">সাবটোটাল</span>
                      <span className="font-medium">৳{totalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">ডেলিভারি</span>
                      <span className="text-green-600 font-medium">ফ্রি</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">ট্যাক্স (২%)</span>
                      <span className="font-medium">৳{(totalPrice() * 0.02).toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-xl">
                      <span>মোট</span>
                      <span className="text-gradient-bengal">৳{(totalPrice() * 1.02).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Truck className="h-4 w-4 text-green-600" />
                      <span>সারা দেশে ফ্রি ডেলিভারি</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span>নিরাপদ পেমেন্ট</span>
                    </div>
                  </div>

                  <Button className="w-full rounded-full bg-gradient-bengal text-white hover:opacity-90 transition-opacity" size="lg" onClick={() => window.location.href = '/checkout'}>
                      চেকআউট করুন
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    অর্ডার করে আপনি আমাদের শর্তাবলী সম্মত হচ্ছেন
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
