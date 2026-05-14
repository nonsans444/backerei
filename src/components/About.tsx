import { useTranslation } from 'react-i18next';
import { Star, Accessibility } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-bakery-bg dark:bg-bakery-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white dark:border-bakery-dark-card">
              <img
                src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2000&auto=format&fit=crop"
                alt="Bakery Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-sm font-black uppercase tracking-widest text-bakery-primary dark:text-bakery-orange">
              Über Uns
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-bakery-brown dark:text-bakery-dark-text leading-tight">
              {t('about.title')}
            </h3>
            <p className="text-xl text-bakery-brown dark:text-bakery-dark-text/80 leading-relaxed font-medium">
              {t('about.text')}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-lg font-black uppercase tracking-wider shadow-sm flex items-center gap-2">
                <Accessibility className="w-4 h-4" />
                {t('about.highlight')}
              </span>
              <span className="text-xs bg-bakery-tag-bg dark:bg-bakery-orange/20 text-bakery-tag-text dark:text-bakery-orange px-3 py-1.5 rounded-lg font-black uppercase tracking-wider shadow-sm flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                4.6 Sterne
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
