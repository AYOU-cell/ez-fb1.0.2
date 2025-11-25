import { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { PriceDifferenceSection } from './components/PriceDifferenceSection';
import { FixedWhatsAppBar } from './components/FixedWhatsAppBar';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  useEffect(() => {
    // Meta Pixel Code - ensure it only initializes once
    if ((window as any).fbq) {
      // Pixel already loaded, skip initialization
      return;
    }

    (function(f: any, b: Document, e: string, v: string, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);
    
    (window as any).fbq('init', '2042108606543368');
    (window as any).fbq('track', 'PageView');
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2042108606543368&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        <FixedWhatsAppBar />
        <div className="pt-[140px]">
          <HeroSection />
          <PriceDifferenceSection />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}