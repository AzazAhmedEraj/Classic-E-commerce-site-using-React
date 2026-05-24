'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/store/cart-store';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container with gradient border and glow effect */}
      <div className={cn(
        "relative aspect-square overflow-hidden rounded-3xl bg-card/80 backdrop-blur-xl transition-all duration-500 border border-border/50",
        "group-hover:shadow-2xl group-hover:shadow-indigo-500/20 group-hover:border-indigo-500/30",
        isHovered && "glow-indigo"
      )}>
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-mint-500/20 to-teal-500/20 blur-xl" />
        </div>

        {/* Image container */}
        <Link href={`/products/${product.slug}`}>
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover"
              animate={{
                scale: isHovered ? 1.15 : 1,
                rotate: isHovered ? 2 : 0,
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          </div>
        </Link>

        {/* Image overlay gradient */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )} />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {discount > 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 500, delay: index * 0.1 }}
            >
              <Badge className="font-semibold shadow-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white border-0">
                <Sparkles className="h-3 w-3 mr-1" />
                {discount}% OFF
              </Badge>
            </motion.div>
          )}
          {product.rating >= 4.5 && (
            <motion.div
              initial={{ scale: 0, x: -20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 500, delay: index * 0.1 + 0.1 }}
            >
              <Badge className="bg-gradient-to-r from-mint-500 to-teal-500 text-white font-semibold shadow-lg border-0">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Top Rated
              </Badge>
            </motion.div>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="bg-black/80 text-white shadow-lg backdrop-blur-sm">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Wishlist Button with animation */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className={cn(
            "absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md shadow-lg transition-all z-10",
            isWishlisted
              ? "bg-gradient-to-r from-indigo-500 to-mint-500 text-white shadow-xl"
              : "bg-white/90 text-muted-foreground hover:text-indigo-500 hover:bg-white"
          )}
        >
          <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
        </motion.button>

        {/* Quick View Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ delay: 0.1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-full bg-white/95 backdrop-blur-md shadow-xl font-medium text-sm flex items-center gap-2 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-mint-500 hover:to-teal-600 hover:text-white transition-all z-10"
          onClick={(e) => e.preventDefault()}
        >
          <Eye className="h-4 w-4" />
          দ্রুত দেখুন
        </motion.button>

        {/* Quick Add to Cart - slides up on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ delay: 0.05 }}
          className={cn(
            'absolute bottom-3 left-3 right-3 flex gap-2 z-10',
          )}
        >
          <Button
            className="flex-1 shadow-lg bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 border-0"
            onClick={(e) => {
              e.preventDefault();
              addItem({
                id: product.id,
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: 1,
              });
            }}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            কার্টে যোগ করুন
          </Button>
        </motion.div>

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          initial={{ x: '-100%', rotate: 45 }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Product Info */}
      <motion.div
        className="mt-4 space-y-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {/* Category pill with gradient */}
        <motion.span
          className="inline-block px-3 py-1.5 text-xs font-medium text-muted-foreground bg-muted/80 backdrop-blur-sm rounded-full border border-border/50"
          whileHover={{
            scale: 1.05,
            background: 'linear-gradient(135deg, #6366f1, #10b981, #14b8a6)',
            color: 'white',
            borderColor: 'transparent'
          }}
          transition={{ duration: 0.2 }}
        >
          {product.category}
        </motion.span>

        {/* Product name with dual language */}
        <Link href={`/products/${product.slug}`}>
          <motion.div
            className="space-y-1 cursor-pointer"
            whileHover={{ x: 4 }}
          >
            <h3 className="font-semibold text-base hover:text-muted-foreground transition-colors line-clamp-1">
              {product.name}
            </h3>
            {product.nameEn && product.name !== product.nameEn && (
              <p className="text-xs text-muted-foreground/70 italic line-clamp-1">
                {product.nameEn}
              </p>
            )}
          </motion.div>
        </Link>

        {/* Rating with animated stars */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: index * 0.1 + 0.4 + i * 0.05,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.3, rotate: 15 }}
              >
                <Star
                  className={cn(
                    'h-4 w-4',
                    i < Math.floor(product.rating)
                      ? 'text-yellow-500 fill-yellow-500'
                      : 'text-muted-foreground/30'
                  )}
                />
              </motion.div>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews} রিভিউ)
          </span>
        </motion.div>

        {/* Price with Bangladeshi Taka symbol */}
        <div className="flex items-center gap-2 pt-1">
          <motion.span
            className="text-xl font-bold text-transparent bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 bg-clip-text"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            ৳{product.price.toLocaleString()}
          </motion.span>
          {product.comparePrice && (
            <motion.span
              className="text-sm text-muted-foreground line-through"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              ৳{product.comparePrice.toLocaleString()}
            </motion.span>
          )}
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-1.5 pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.7 }}
          >
            {product.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.8 + tagIndex * 0.05 }}
                className="inline-block px-2 py-1 text-[10px] font-medium text-muted-foreground bg-muted/50 rounded-md hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-mint-500/10 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
