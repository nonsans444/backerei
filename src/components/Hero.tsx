import { useTranslation } from 'react-i18next';
import { Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[60vh] flex items-center pt-24 pb-12 overflow-hidden px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hero-gradient w-full max-w-7xl mx-auto rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center text-white shadow-2xl relative"
      >
        <div className="max-w-2xl z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-white/90 font-medium mb-10 max-w-xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+49123456789"
              className="inline-flex items-center justify-center px-8 py-4 bg-bakery-primary text-white rounded-full font-bold text-lg shadow-lg hover:brightness-110 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('hero.cta_call')}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
            >
              <MapPin className="w-5 h-5 mr-2" />
              {t('hero.cta_route')}
            </motion.a>
          </div>
        </div>
        <div className="hidden lg:flex w-64 h-64 bg-white/20 rounded-full border-[12px] border-white/10 items-center justify-center text-8xl shadow-inner animate-pulse">
          🥐
        </div>
      </motion.div>
    </section>
  );
}
