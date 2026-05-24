'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, ShoppingCart, Truck, RefreshCcw, Shield, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCartStore } from '@/store/cart-store';
import { products } from '@/lib/data';
import ProductCard from '@/components/products/ProductCard';

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { addItem } = useCartStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
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
                <Shield className="h-16 w-16 text-white" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gradient-bengal">
                পণ্য পাওয়া যায়নি
              </h1>
              <p className="text-muted-foreground mb-8">
                দুঃখিত, এই পণ্যটি এখনো উপলব্ধ নয়। আমাদের অন্যান্য পণ্য দেখুন!
              </p>
              <Button size="lg" className="rounded-full bg-gradient-bengal text-white hover:opacity-90" onClick={() => window.location.href = '/products'}>
                সব পণ্য দেখুন
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const discount = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 0;

  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">হোম</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-foreground">পণ্য</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square overflow-hidden rounded-2xl bg-muted glass-subtle border"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                {discount > 0 && (
                  <Badge className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-red-800 to-red-600 text-white">
                    -{discount}% ছাড়
                  </Badge>
                )}
              </motion.div>
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                        selectedImage === index
                          ? 'border-red-800 shadow-lg'
                          : 'border-transparent hover:border-muted-foreground/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="rounded-full border-red-800/50 text-red-800">
                    {product.category}
                  </Badge>
                  {product.inStock && (
                    <Badge className="rounded-full bg-green-600 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      স্টকে আছে
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-bengal">
                  {product.name}
                </h1>
                <p className="text-sm text-muted-foreground">{product.nameEn}</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.reviews}টি পর্যালোচনা
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gradient-bengal">
                  ৳{product.price.toLocaleString()}
                </span>
                {product.comparePrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ৳{product.comparePrice.toLocaleString()}
                  </span>
                )}
                {discount > 0 && (
                  <Badge className="rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                    {discount}% ছাড়
                  </Badge>
                )}
              </div>

              <Separator />

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              {product.descriptionEn && (
                <p className="text-sm text-muted-foreground italic">{product.descriptionEn}</p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full border-amber-700/50 text-amber-700 dark:border-amber-500/50 dark:text-amber-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm p-3 rounded-xl glass-subtle border">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-600 to-green-400 text-white">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold">ফ্রি ডেলিভারি</p>
                    <p className="text-xs text-muted-foreground">সারা দেশে</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm p-3 rounded-xl glass-subtle border">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 text-white">
                    <RefreshCcw className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold">সহজ রিটার্ন</p>
                    <p className="text-xs text-muted-foreground">৭ দিনের মধ্যে</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm p-3 rounded-xl glass-subtle border">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 text-white">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold">নিরাপদ</p>
                    <p className="text-xs text-muted-foreground">১০০% খাঁটি</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-full overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 hover:bg-muted transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-3 border-x min-w-[60px] text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <Button
                    size="lg"
                    className="flex-1 rounded-full bg-gradient-bengal text-white hover:opacity-90 transition-opacity"
                    onClick={() =>
                      addItem({
                        id: `${product.id}-${Date.now()}`,
                        productId: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.images[0],
                        quantity,
                      })
                    }
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {product.inStock ? 'কার্টে যোগ করুন' : 'স্টকে নেই'}
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="grid w-full max-w-md grid-cols-3 rounded-full glass-subtle">
              <TabsTrigger value="description" className="rounded-full">বিস্তারিত</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-full">পর্যালোচনা</TabsTrigger>
              <TabsTrigger value="shipping" className="rounded-full">শিপিং</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="glass-subtle p-6 rounded-2xl border space-y-4">
                <h3 className="font-bold text-lg text-gradient-bengal">পণ্যের বিস্তারিত</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {product.tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="glass-subtle p-6 rounded-2xl border space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-gradient-bengal">গ্রাহক পর্যালোচনা</h3>
                  <Badge className="rounded-full bg-amber-600 text-white">
                    {product.rating}★ ({product.reviews})
                  </Badge>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'ফাতেমা খাতুন', nameEn: 'Fatema K.', rating: 5, comment: 'পণ্যটি চমৎকার! কোয়ালিটি দেখে মুগ্ধ হয়েছি।', date: '২ দিন আগে' },
                    { name: 'আহমেদ চৌধুরী', nameEn: 'Ahmed C.', rating: 5, comment: 'দ্রুত ডেলিভারি এবং ভালো পণ্য। ধন্যবাদ!', date: '১ সপ্তাহ আগে' },
                    { name: 'নুসরাত জাহান', nameEn: 'Nusrat J.', rating: 4, comment: 'ভালো পণ্য, তবে প্যাকেজিং আরও ভালো হতে পারত।', date: '২ সপ্তাহ আগে' },
                  ].map((review, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl border glass-subtle">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-800 to-amber-600 flex items-center justify-center text-white font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-xs text-muted-foreground">{review.nameEn}</p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, j) => (
                              <Star
                                key={j}
                                className={`h-4 w-4 ${
                                  j < review.rating
                                    ? 'text-amber-500 fill-amber-500'
                                    : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{review.comment}</p>
                        <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6">
              <div className="glass-subtle p-6 rounded-2xl border space-y-4">
                <h3 className="font-bold text-lg text-gradient-bengal">শিপিং তথ্য</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20">
                    <Truck className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-300">ফ্রি স্ট্যান্ডার্ড শিপিং</p>
                      <p className="text-sm text-green-600 dark:text-green-400">৫-৭ কর্মদিবস - সারা দেশে</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-700 dark:text-blue-300">এক্সপ্রেস ডেলিভারি</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">২-৩ কর্মদিবস (৳৯৯)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20">
                    <Truck className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-semibold text-purple-700 dark:text-purple-300">আগামীকাল ডেলিভারি</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">দুপুর ২টার মধ্যে অর্ডার করুন (৳১৯৯)</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-4 border-t">
                  ৩০ দিনের রিটার্ন পলিসি। পণ্যটি মূল অবস্থায় থাকতে হবে।
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-gradient-bengal">সম্পর্কিত পণ্য</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
