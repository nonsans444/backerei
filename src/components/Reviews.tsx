import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 'olga',
      author: 'Olga',
      text: t('reviews.olga.text'),
    },
    {
      id: 'franc',
      author: 'Franc Pirjevac',
      text: t('reviews.franc.text'),
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-bakery-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-widest text-bakery-primary mb-4">Kundenstimmen (4.6 ★)</h2>
          <h3 className="text-4xl md:text-5xl font-black text-bakery-brown italic">
            "{t('reviews.title')}"
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-bakery-border relative flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1 text-bakery-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-bakery-orange/20" />
              </div>
              <div className="relative z-10 mb-8">
                <p className="text-lg md:text-xl font-bold italic text-bakery-brown leading-relaxed">
                  {review.text}
                </p>
              </div>
              <div className="mt-auto flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-bakery-primary text-white flex items-center justify-center font-black">
                  {review.author[0]}
                </div>
                <span className="font-bold text-bakery-brown">
                  {review.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
