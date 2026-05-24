'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Award, Globe, Sparkles, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const stats = [
  { icon: Users, value: '৫০,০০০+', label: 'খুশি গ্রাহক', labelEn: 'Happy Customers' },
  { icon: Award, value: '১০,০০০+', label: 'পণ্য', labelEn: 'Products' },
  { icon: Globe, value: '৬৪', label: 'জেলায় ডেলিভারি', labelEn: 'Districts Covered' },
  { icon: Heart, value: '১০০%', label: 'খাঁটি পণ্য', labelEn: 'Authentic Products' },
];

const values = [
  {
    icon: Sparkles,
    title: 'গুণমান',
    titleEn: 'Quality',
    description: 'আমরা শুধুমাত্র সেরা মানের পণ্য সরবরাহ করি। প্রতিটি পণ্য কঠোর পরীক্ষার মধ্য দিয়ে যায়।',
    descriptionEn: 'We provide only the best quality products. Each item goes through rigorous testing.',
    color: 'from-red-800 to-red-600',
  },
  {
    icon: Heart,
    title: 'বিশ্বাস',
    titleEn: 'Trust',
    description: 'আমাদের গ্রাহকদের বিশ্বাসই আমাদের সবচেয়ে বড় সম্পদ।',
    descriptionEn: 'Our customers trust is our greatest asset.',
    color: 'from-amber-700 to-amber-500',
  },
  {
    icon: CheckCircle,
    title: 'খাঁতিত্ব',
    titleEn: 'Authenticity',
    description: '১০০% খাঁটি বাংলার ঐতিহ্যবাহী পণ্যের নিশ্চয়তা।',
    descriptionEn: '100% authentic traditional Bengali products guaranteed.',
    color: 'from-green-800 to-green-600',
  },
];

const team = [
  { name: 'আজাহ আহমেদ এরাজ', nameEn: 'Azah Ahmed Eraj', role: 'প্রতিষ্ঠাতা ও সিইও', roleEn: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
  { name: 'ফাতিমা খাতুন', nameEn: 'Fatema Khatun', role: 'প্রধান ডিজাইনার', roleEn: 'Lead Designer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' },
  { name: 'করিম উদ্দিন', nameEn: 'Karim Uddin', role: 'উৎপাদন প্রধান', roleEn: 'Production Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop' },
  { name: 'নুসরাত জাহান', nameEn: 'Nusrat Jahan', role: 'মার্কেটিং প্রধান', roleEn: 'Marketing Head', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1596238648689-89a9e15c6d97?w=1600&h=800&fit=crop"
            alt="About DeshiBazar"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center text-white px-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full glass-subtle px-6 py-3 text-sm mb-6"
              >
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>দেশীয় পণ্য, আন্তর্জাতিক মান</span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient-bengal">আমাদের</span>
                <span className="text-white ml-4">সম্পর্কে</span>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
                বাংলার ঐতিহ্যবাহী হস্তশিল্প এবং সংস্কৃতির অনলাইন গন্তব্য
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 alpona-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-bengal">
                  আমাদের গল্প
                </h2>
                <div className="w-24 h-1 bg-gradient-bengal mx-auto mb-6 rounded-full" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6 text-lg text-muted-foreground leading-relaxed glass-subtle p-8 rounded-3xl border"
              >
                <p>
                  <strong className="text-foreground">DeshiBazar</strong> শুরু হয়েছিল ২০২৪ সালে একটি সাধারণ কিন্তু শক্তিশালী উদ্দেশ্য নিয়ে -
                  বাংলার ঐতিহ্যবাহী হস্তশিল্প এবং সংস্কৃতিকে বিশ্ব দরবারে তুলে ধরা।
                </p>
                <p>
                  আমাদের যাত্রা শুরু হয় ঢাকার পুরান ঢাকা থেকে, যেখানে আজও অনেক কারিগর তাদের পূর্বপুরুষদের
                  ঐতিহ্য বজায় রেখে কাজ করে যাচ্ছে। জামদানি শাড়ি, নকশী কাঁথা, মাটির কাজ, বাঁশের শিল্প -
                  এই সব অসাধারণ শিল্পকর্মকে আমরা অনলাইনের মাধ্যমে সবার কাছে পৌঁছে দিচ্ছি।
                </p>
                <p>
                  আজ আমরা গর্বিত যে আমাদের মাধ্যমে হাজার হাজার কারিগর তাদের জীবিকা নির্বাহ করছেন এবং
                  আমাদের ঐতিহ্যবাহী শিল্প বেঁচে আছে।
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  className="text-center glass-subtle p-8 rounded-3xl border group hover:shadow-xl transition-all"
                >
                  <motion.div
                    className="inline-flex p-4 rounded-2xl bg-gradient-bengal text-white mb-4 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <stat.icon className="h-8 w-8" />
                  </motion.div>
                  <p className="text-4xl md:text-5xl font-bold text-gradient-bengal mb-2">
                    {stat.value}
                  </p>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.labelEn}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 alpona-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-bengal">
                আমাদের মূল্যবোধ
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                যে নীতিমালার উপর ভিত্তি করে আমরা পরিচালিত হই
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-subtle p-8 rounded-3xl border text-center group hover:shadow-xl transition-all"
                >
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <value.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{value.titleEn}</p>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-bengal">
                আমাদের টিম
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                যারা দিনরাত কাজ করছেন আপনার কাছে সেরা পণ্য পৌঁছে দিতে
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-4 overflow-hidden rounded-3xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.nameEn}</p>
                  <p className="text-sm text-gradient-bengal font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.roleEn}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem] glass-subtle p-8 md:p-12 text-center"
            >
              <div className="absolute inset-0 gradient-bengal opacity-90" />
              <div className="absolute inset-0 nakshi-pattern opacity-10" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  আমাদের সাথে যুক্ত হোন
                </h2>
                <p className="text-white/80 max-w-xl mx-auto">
                  হাজার হাজার খুশি গ্রাহকের মধ্যে একজন হোন
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 text-lg bg-white text-red-900 hover:bg-amber-100"
                    onClick={() => window.location.href = '/products'}
                  >
                    এখনই কিনুন
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-lg border-2 text-white hover:bg-white/10"
                    onClick={() => window.location.href = '/contact'}
                  >
                    যোগাযোগ করুন
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
