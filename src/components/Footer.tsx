import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-100 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[11px] font-bold text-stone-500 uppercase tracking-widest">
            <span>© {currentYear} Balkan Bäckerei Dora</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-bakery-primary transition-colors">{t('footer.imprint')}</a>
              <a href="#" className="hover:text-bakery-primary transition-colors">{t('footer.privacy')}</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-black uppercase tracking-widest text-stone-400">
              {t('footer.social')}
            </span>
            <a 
              href="https://www.google.com/maps/place/Austra%C3%9Fe,+N%C3%BCrnberg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white border border-stone-200 rounded-lg flex items-center justify-center text-bakery-primary hover:bg-bakery-primary hover:text-white transition-all shadow-sm group"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
