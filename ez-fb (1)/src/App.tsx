import { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { PriceDifferenceSection } from './components/PriceDifferenceSection';
import { FixedWhatsAppBar } from './components/FixedWhatsAppBar';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  // Meta Pixel (Facebook)
  useEffect(() => {
    if ((window as any).fbq) {
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
    
    (window as any).fbq('init', '650527014720673');
    (window as any).fbq('track', 'PageView');
  }, []);

  // TikTok Pixel
  useEffect(() => {
    // 防止重复初始化
    if ((window as any).ttq) return;

    const pixelId = 'D53CCDBC77U0DP19B9L0'; // 你的 TikTok Pixel ID

    (function (w: any, d: any, t: any) {
      w.TiktokAnalyticsObject = t;
      var ttq = w[t] = w[t] || [];
      ttq.methods = [
        "page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"
      ];
      ttq.setAndDefer = function (t: any, e: any) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      };
      for (var i = 0; i < ttq.methods.length; i++)
        ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (t: any) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
          ttq.setAndDefer(e, ttq.methods[n]);
        return e;
      };
      ttq.load = function (e: any, n: any) {
        var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {};
        ttq._i[e] = [];
        ttq._i[e]._u = r;
        ttq._t = ttq._t || {};
        ttq._t[e] = +new Date();
        ttq._o = ttq._o || {};
        ttq._o[e] = n || {};
        
        var c = d.createElement("script");
        c.type = "text/javascript";
        c.async = true;
        c.src = r + "?sdkid=" + e + "&lib=" + t;
        var s = d.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(c, s);
      };

      ttq.load(pixelId);
      ttq.page();
    })(window, document, 'ttq');
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
            src="https://www.facebook.com/tr?id=650527014720673&ev=PageView&noscript=1"
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
