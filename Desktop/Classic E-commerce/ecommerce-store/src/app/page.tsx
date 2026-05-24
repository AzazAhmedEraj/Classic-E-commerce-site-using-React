import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import ProductsSection from '@/components/home/ProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { trendingProducts, newArrivals } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <ProductsSection
          title="ট্রেন্ডিং এখন"
          titleEn="Trending Now"
          subtitle="আমাদের সবচেয়ে জনপ্রিয় পণ্য এখন। দেখুন সবাই কি পছন্দ করছে।"
          products={trendingProducts}
        />
        <ProductsSection
          title="নতুন এসেছে"
          titleEn="New Arrivals"
          subtitle="নতুন সংগ্রহ এসে গেছে। প্রথম হোন আমাদের লেটেস্ট কালেকশন শপ করতে।"
          products={newArrivals}
        />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
