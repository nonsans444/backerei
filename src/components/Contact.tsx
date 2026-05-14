import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';
import MapComponent from './Map';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border border-bakery-border rounded-[3rem] overflow-hidden bg-[#FDFBF7] shadow-xl">
          <div className="p-12 md:p-16 space-y-12">
            <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-bakery-primary mb-4">Kontakt & Standort</h2>
              <h3 className="text-4xl md:text-5xl font-black text-bakery-brown leading-tight">
                {t('contact.title')}
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-bakery-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-tighter text-bakery-brown/50">
                    {t('contact.address_label')}
                  </h4>
                  <p className="text-lg font-bold text-bakery-brown">
                    {t('contact.address_value')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-bakery-orange w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-tighter text-bakery-brown/50">
                    {t('contact.hours_label')}
                  </h4>
                  <p className="text-lg font-bold text-bakery-brown">
                    {t('contact.hours_value')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-bakery-border">
              <p className="text-sm leading-relaxed text-bakery-brown/70 font-medium">
                Seit Generationen pflegen wir die Kunst des balkanischen Backens. Stolz auf 4,6 Sterne in der Austraße!
              </p>
            </div>
          </div>

          <div className="min-h-[400px] lg:min-h-full bg-stone-100">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
