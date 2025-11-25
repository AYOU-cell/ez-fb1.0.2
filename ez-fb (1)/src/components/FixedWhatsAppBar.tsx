import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function FixedWhatsAppBar() {
  const { t } = useLanguage();
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#1A73E8' }}>
      <div className="max-w-md mx-auto px-5 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Title */}
          <div className="text-white text-sm font-medium flex-shrink-0">
            {t('whatsapp.title')}
          </div>
          
          {/* Right: Language Switcher */}
          <div className="flex-shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
        
        {/* WhatsApp CTA Button */}
        <a
          href="https://wa.me/85257437376"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-6 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 mt-3"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">{t('whatsapp.cta')}</span>
        </a>
      </div>
    </div>
  );
}