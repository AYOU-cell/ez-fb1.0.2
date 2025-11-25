import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, MessageCircle } from 'lucide-react';
import portraitImage from 'figma:asset/a2edbe24bbc5a0658ee8c3d1cca64b073afb87a3.png';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-br from-[#F8F9FE] via-[#FFF5F8] to-[#F3F7FB] px-5 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A73E8]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3BB273]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Main Headline - Large Serif */}
        <h1 
          className="text-center mb-6 text-[#1A1F36] pt-4" 
          style={{ 
            fontFamily: 'Georgia, Merriweather, serif', 
            fontSize: '2.75rem', 
            lineHeight: '1.15',
            letterSpacing: '-0.02em'
          }}
        >
          {t('hero.title')}
        </h1>

        {/* Sub-headline */}
        <div className="text-center mb-10 px-4">
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            {t('hero.description')}
          </p>
        </div>

        {/* Instructor Photo with Floating Labels */}
        <div className="relative mb-12 flex justify-center">
          {/* Main Portrait */}
          <div className="relative w-72 h-72">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback 
                src={portraitImage}
                alt="EZ Academy Instructor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Labels */}
            <div className="absolute -top-4 -left-4 bg-[#1A73E8] text-white px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm">
              <p className="text-sm">OZON</p>
            </div>

            <div className="absolute top-8 -right-4 bg-white text-[#1A1F36] px-4 py-2 rounded-xl shadow-lg border border-gray-200">
              <p className="text-sm">Amazon</p>
            </div>

            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg">
              <p className="text-sm">TikTok Shop</p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 mb-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl text-[#1A73E8] mb-1">15K+</p>
              <p className="text-xs text-gray-600">{t('hero.stats.students')}</p>
            </div>
            <div className="border-l border-r border-gray-200">
              <p className="text-3xl text-[#3BB273] mb-1">{t('hero.stats.rating')}</p>
              <p className="text-xs text-gray-600">Rating</p>
            </div>
            <div>
              <p className="text-3xl text-[#1A1F36] mb-1">50+</p>
              <p className="text-xs text-gray-600">{t('hero.stats.countries')}</p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA Button */}
        <div className="mb-6">
          <a
            href="https://wa.me/85257437376"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white py-5 px-8 rounded-2xl shadow-xl transition-all duration-200 hover:shadow-2xl active:scale-95"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="text-xl">{t('whatsapp.cta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}