import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Cookie, Croissant, Utensils } from 'lucide-react';

export default function Products() {
  const { t } = useTranslation();

  const products = [
    {
      id: 'burek',
      title: t('products.burek.name'),
      desc: t('products.burek.desc'),
      icon: <Croissant className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1935&auto=format&fit=crop"
    },
    {
      id: 'bread',
      title: t('products.bread.name'),
      desc: t('products.bread.desc'),
      icon: <Utensils className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 'sweets',
      title: t('products.sweets.name'),
      desc: t('products.sweets.desc'),
      icon: <Cookie className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-24 bg-[#FDFBF7] dark:bg-bakery-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-bakery-primary dark:text-bakery-orange mb-4">
              Unsere Spezialitäten
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-bakery-brown dark:text-bakery-dark-text">
              {t('products.title')}
            </h3>
          </div>
          <div className="bg-bakery-orange/10 dark:bg-bakery-orange/20 p-4 rounded-2xl text-xs italic border-l-4 border-bakery-orange font-bold text-bakery-brown dark:text-bakery-dark-text/90">
            {t('products.price_info')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-bakery-dark-card rounded-[2rem] overflow-hidden shadow-lg border border-bakery-border dark:border-bakery-dark-border hover:shadow-2xl transition-all group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-bakery-tag-bg text-bakery-tag-text px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                    Traditionell
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-black text-bakery-brown dark:text-bakery-dark-text">
                    {product.title}
                  </h3>
                  <div className="text-bakery-primary dark:text-bakery-orange">
                    {product.icon}
                  </div>
                </div>
                <p className="text-bakery-brown/70 dark:text-bakery-dark-text/70 leading-relaxed font-medium mb-6">
                  {product.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-bakery-border dark:border-bakery-dark-border">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase tracking-widest text-bakery-brown/40 dark:text-bakery-dark-text/30">Qualität</span>
                    <span className="text-bakery-primary dark:text-bakery-orange font-bold">11/10</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
