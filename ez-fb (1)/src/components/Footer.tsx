import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200 px-5 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Links Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-[#666666] text-xs">
          <a 
            href="https://excited-thyme-80b.notion.site/Privacy-Policy-2b64ba773e9680d894bfdf91dd8851dd?source=copy_link" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1A73E8] transition-colors"
          >
            {t('footer.privacy')}
          </a>
          <span className="text-gray-400">|</span>
          <a 
            href="https://excited-thyme-80b.notion.site/Terms-of-Service-2b64ba773e9680af84e4c9625603a229?source=copy_link" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1A73E8] transition-colors"
          >
            {t('footer.terms')}
          </a>
          <span className="text-gray-400">|</span>
          <a 
            href="https://wa.me/85257437376" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1A73E8] transition-colors"
          >
            {t('footer.contact')}
          </a>
        </div>

        {/* Disclaimer Block */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <p className="text-[#9E9E9E] text-center leading-relaxed mb-3" style={{ fontSize: '10px', lineHeight: '1.5' }}>
            {t('footer.disclaimer.income.text')}
          </p>
          <p className="text-[#9E9E9E] text-center leading-relaxed mb-3" style={{ fontSize: '10px', lineHeight: '1.5' }}>
            NOT FACEBOOK: This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p className="text-[#9E9E9E] text-center leading-relaxed" style={{ fontSize: '10px', lineHeight: '1.5' }}>
            {t('footer.disclaimer.guarantee.text')}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#666666] text-xs">
          <p>{t('footer.copyright')}</p>
          <p className="mt-2" style={{ fontSize: '11px' }}>
            {t('footer.contact.info')}
          </p>
        </div>
      </div>
    </footer>
  );
}