'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Heart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: MapPin,
    title: 'ঠিকানা',
    titleEn: 'Address',
    content: 'পুরান ঢাকা, বাংলাদেশ',
    contentEn: 'Old Dhaka, Bangladesh',
    color: 'from-indigo-800 to-indigo-600',
  },
  {
    icon: Phone,
    title: 'ফোন',
    titleEn: 'Phone',
    content: '+৮৮০ ১৭১১-০০০০০০',
    contentEn: '+880 1711-000000',
    color: 'from-mint-700 to-mint-500',
  },
  {
    icon: Mail,
    title: 'ইমেইল',
    titleEn: 'Email',
    content: 'hello@deshibazar.com',
    color: 'from-teal-800 to-teal-600',
  },
  {
    icon: Clock,
    title: 'সময়',
    titleEn: 'Hours',
    content: 'শনি - বৃহস্পতি: ৯টা - ৬টা',
    contentEn: 'Sat - Thu: 9AM - 6PM',
    color: 'from-indigo-800 to-indigo-600',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।');
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden alpona-bg">
          <div className="absolute inset-0 aurora-soft opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 rounded-full glass-subtle px-6 py-3 text-sm"
              >
                <MessageCircle className="h-4 w-4 text-indigo-600" />
                <span className="font-medium text-gradient">যোগাযোগ করুন</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="text-gradient-bengal">আমাদের</span>
                <span className="text-foreground ml-4">সাথে যোগাযোগ</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                আপনার যেকোনো প্রশ্ন বা মতামতের জন্য আমরা সর্বদা প্রস্তুত
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-subtle p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all group"
                >
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${info.color} text-white mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-foreground">{info.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{info.titleEn}</p>
                  <p className="text-foreground">{info.content}</p>
                  {info.contentEn && (
                    <p className="text-xs text-muted-foreground">{info.contentEn}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 alpona-bg">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="glass-subtle p-8 rounded-3xl border">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gradient-bengal">
                    বার্তা পাঠান
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    নিচের ফর্মটি পূরণ করুন, আমরা শীঘ্রই যোগাযোগ করব
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          নাম <span className="text-muted-foreground">(Name)</span>
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="আপনার নাম"
                          className="rounded-xl"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          ইমেইল <span className="text-muted-foreground">(Email)</span>
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        ফোন <span className="text-muted-foreground">(Phone)</span>
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+৮৮০..."
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        বিষয় <span className="text-muted-foreground">(Subject)</span>
                      </label>
                      <Input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="আপনার বার্তার বিষয়"
                        className="rounded-xl"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        বার্তা <span className="text-muted-foreground">(Message)</span>
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="আপনার বার্তা লিখুন..."
                        className="rounded-xl min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-mint-500 to-teal-600 text-white hover:opacity-90 transition-opacity"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      বার্তা পাঠান
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Map / Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-3xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1566371486490-560a255018fe?w=800&h=1200&fit=crop"
                  alt="Bangladesh"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="h-6 w-6 text-indigo-500 fill-indigo-500" />
                      <span className="text-lg font-semibold">বাংলাদেশ</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      ঐতিহ্যবাহী বাংলার সংস্কৃতি
                    </h3>
                    <p className="text-white/80 mb-6">
                      হাজার বছরের ঐতিহ্যবাহী সংস্কৃতি এবং হস্তশিল্পের দেশ বাংলাদেশ।
                      আমরা এই ঐতিহ্যকে বিশ্ব দরবারে তুলে ধরতে কাজ করছি।
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                        🇧🇩 বাংলাদেশ
                      </span>
                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                        🎨 হস্তশিল্প
                      </span>
                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                        🏺 ঐতিহ্য
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-20 h-20 rounded-full border-4 border-white/20" />
                <div className="absolute top-16 right-16 w-12 h-12 rounded-full border-4 border-white/20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-bengal">
                প্রায়শই জিজ্ঞাসিত প্রশ্ন
              </h2>
              <p className="text-muted-foreground">
                সাধারণ কিছু প্রশ্নের উত্তর
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: 'ডেলিভারি দিতে কত সময় লাগে?',
                  qEn: 'How long does delivery take?',
                  a: 'ঢাকার ভিতরে ২-৩ কর্মদিবস এবং সারা দেশে ৫-৭ কর্মদিবসের মধ্যে ডেলিভারি দেওয়া হয়।',
                },
                {
                  q: 'পণ্য ফেরত দেওয়া যাবে?',
                  qEn: 'Can I return products?',
                  a: 'জী হ্যাঁ, ৭ দিনের মধ্যে যেকোনো পণ্য ফেরত দেওয়া যাবে যদি পণ্যটি অক্ষত অবস্থায় থাকে।',
                },
                {
                  q: 'কোনো পেমেন্ট মেথড আছে?',
                  qEn: 'What payment methods are available?',
                  a: 'বিকাশ, নগদ, রকেট, ব্যাংক কার্ড এবং ক্যাশ অন ডেলিভারি - সব পেমেন্ট মেথড গ্রহণ করা হয়।',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-subtle p-6 rounded-2xl border"
                >
                  <h3 className="font-bold text-lg text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{faq.qEn}</p>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
