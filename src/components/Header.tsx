import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const nextLng = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(nextLng);
  };

  const navItems = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.products'), href: '#products' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-bakery-dark-bg/90 backdrop-blur-md border-b border-bakery-orange/10 dark:border-bakery-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-bakery-primary rounded-full flex items-center justify-center text-white font-bold text-xl italic shadow-md">D</div>
            <span className="font-bold text-xl tracking-tight text-bakery-brown dark:text-bakery-dark-text">
              Balkan Bäckerei <span className="text-bakery-primary dark:text-bakery-orange">Dora</span>
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-bakery-brown/70 dark:text-bakery-dark-text/70 hover:text-bakery-primary dark:hover:text-bakery-orange transition-colors uppercase tracking-tight"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l border-bakery-orange/20">
              <button
                onClick={toggleTheme}
                className="p-2 text-bakery-brown/70 dark:text-bakery-dark-text/70 hover:text-bakery-primary transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleLanguage}
                className="text-xs font-black px-2 py-1 border-2 border-bakery-orange/20 dark:border-bakery-dark-border rounded-md bg-white dark:bg-bakery-dark-card dark:text-bakery-dark-text hover:bg-bakery-orange/5 transition-colors uppercase tracking-tighter cursor-pointer"
              >
                {i18n.language === 'de' ? 'DE / EN' : 'EN / DE'}
              </button>
              <span className="hidden lg:block text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded font-bold uppercase tracking-wider">
                {t('about.highlight')}
              </span>
            </div>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-bakery-brown/70 dark:text-bakery-dark-text/70 cursor-pointer"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="p-2 text-bakery-brown/70 cursor-pointer"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-bakery-brown/70 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bakery-bg border-b border-bakery-orange/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-black text-bakery-brown hover:text-bakery-primary uppercase tracking-tight"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
