import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'pt' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero Section
    'hero.badge': 'Free to Join',
    'hero.title': 'Empowering Ambitious People to Build Real Skills and Scalable Income — For Free',
    'hero.description': 'Learn proven strategies to source products from China and sell globally. Join thousands who have transformed their financial future with our comprehensive training.',
    'hero.cta': 'Start Learning Free',
    'hero.stats.students': '15,000+ Active Students',
    'hero.stats.rating': '⭐4.9/5 Average Rating',
    'hero.stats.countries': '50+ Countries Worldwide',
    
    // Price Difference Section
    'price.title': 'The Price Difference Profit Showcase',
    'price.subtitle': 'Real Example: Michael Kors Watches',
    'price.china.label': 'China Price',
    'price.china.price': '¥580',
    'price.china.usd': '≈ $80 USD',
    'price.europe.label': 'Europe Retail',
    'price.europe.price': '€299',
    'price.europe.usd': '≈ $320 USD',
    'price.profit.title': 'Your Potential Profit',
    'price.profit.margin': '$240 per unit',
    'price.profit.percentage': '300% markup potential',
    'price.profit.note': '*Profit margins may vary based on shipping, taxes, and market conditions. This is an educational example.',
    'price.clickToZoom': 'Click images to zoom',
    
    // Footer
    'footer.disclaimer.title': 'Important Disclaimers',
    'footer.disclaimer.income': 'Income Disclaimer',
    'footer.disclaimer.income.text': 'Any earnings or income statements, or any earnings or income examples, are only estimates of what we think you could earn. There is no assurance you will do as well as stated in any examples. If you rely upon any figures provided, you must accept the entire risk of not doing as well as the information indicates. This applies whether the earnings or income examples are monetary in nature or pertain to advertising credits which may be earned (whether such credits are convertible to cash or not).',
    'footer.disclaimer.guarantee': 'No Guarantee',
    'footer.disclaimer.guarantee.text': 'There is no guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas, techniques and the effort put forth. We do not purport this as a "get rich scheme."',
    'footer.disclaimer.liability': 'Liability Disclaimer',
    'footer.disclaimer.liability.text': 'You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided "as is" and "as available" for your use, without any representation, warranties or conditions of any kind, either express or implied.',
    'footer.disclaimer.affiliate': 'Affiliate Disclosure',
    'footer.disclaimer.affiliate.text': 'Some links on this page may be affiliate links. If you purchase a product or service through an affiliate link, we may receive a commission. This does not affect the price you pay.',
    'footer.disclaimer.testimonials': 'Testimonials Disclaimer',
    'footer.disclaimer.testimonials.text': 'The testimonials and examples used are exceptional results, which do not apply to the average purchaser, and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual\'s success depends on his or her background, dedication, desire and motivation.',
    'footer.links': 'Quick Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact Us',
    'footer.copyright': '© 2025 EZ Entrepreneur Academy. All Rights Reserved.',
    'footer.contact.info': 'Email: a2487806918@gmail.com  New York, USA',
    
    // WhatsApp Bar
    'whatsapp.title': 'EZ Entrepreneur Academy',
    'whatsapp.cta': 'Join Free on WhatsApp',
  },
  de: {
    // Hero Section
    'hero.badge': 'Kostenlos Beitreten',
    'hero.title': 'Befähigung ehrgeiziger Menschen, echte Fähigkeiten und skalierbares Einkommen aufzubauen — Kostenlos',
    'hero.description': 'Lernen Sie bewährte Strategien, um Produkte aus China zu beziehen und weltweit zu verkaufen. Schließen Sie sich Tausenden an, die ihre finanzielle Zukunft mit unserer umfassenden Schulung verändert haben.',
    'hero.cta': 'Kostenlos Lernen',
    'hero.stats.students': '15.000+ Aktive Studenten',
    'hero.stats.rating': '⭐4,9/5 Durchschnittliche Bewertung',
    'hero.stats.countries': '50+ Länder Weltweit',
    
    // Price Difference Section
    'price.title': 'Preisunterschied-Gewinn-Präsentation',
    'price.subtitle': 'Echtes Beispiel: Michael Kors Uhren',
    'price.china.label': 'China-Preis',
    'price.china.price': '¥580',
    'price.china.usd': '≈ 75€',
    'price.europe.label': 'Europa-Einzelhandel',
    'price.europe.price': '€299',
    'price.europe.usd': '≈ 299€',
    'price.profit.title': 'Ihr Potenzieller Gewinn',
    'price.profit.margin': '224€ pro Einheit',
    'price.profit.percentage': '300% Aufschlagspotenzial',
    'price.profit.note': '*Gewinnmargen können je nach Versand, Steuern und Marktbedingungen variieren. Dies ist ein Bildungsbeispiel.',
    'price.clickToZoom': 'Klicken Sie auf Bilder zum Vergrößern',
    
    // Footer
    'footer.disclaimer.title': 'Wichtige Haftungsausschlüsse',
    'footer.disclaimer.income': 'Einkommens-Haftungsausschluss',
    'footer.disclaimer.income.text': 'Alle Ertrags- oder Einkommensaussagen oder Ertrags- oder Einkommensbeispiele sind nur Schätzungen dessen, was wir denken, dass Sie verdienen könnten. Es gibt keine Garantie, dass Sie so gut abschneiden werden, wie in den Beispielen angegeben. Wenn Sie sich auf bereitgestellte Zahlen verlassen, müssen Sie das gesamte Risiko akzeptieren, nicht so gut abzuschneiden, wie die Informationen angeben.',
    'footer.disclaimer.guarantee': 'Keine Garantie',
    'footer.disclaimer.guarantee.text': 'Es gibt keine Garantie, dass Sie mit den Techniken und Ideen in diesen Materialien Geld verdienen werden. Beispiele in diesen Materialien sollten nicht als Versprechen oder Garantie für Einnahmen interpretiert werden. Das Einkommenspotenzial hängt vollständig von der Person ab, die unser Produkt, unsere Ideen, Techniken und die aufgewandte Mühe verwendet.',
    'footer.disclaimer.liability': 'Haftungsausschluss',
    'footer.disclaimer.liability.text': 'Sie stimmen ausdrücklich zu, dass Ihre Nutzung oder Nichtnutzung des Dienstes auf Ihr eigenes Risiko erfolgt. Der Dienst und alle Produkte und Dienstleistungen, die Ihnen über den Dienst bereitgestellt werden, werden "wie besehen" und "wie verfügbar" für Ihre Nutzung bereitgestellt, ohne jegliche Darstellung, Garantien oder Bedingungen jeglicher Art.',
    'footer.disclaimer.affiliate': 'Partner-Offenlegung',
    'footer.disclaimer.affiliate.text': 'Einige Links auf dieser Seite können Affiliate-Links sein. Wenn Sie ein Produkt oder eine Dienstleistung über einen Affiliate-Link kaufen, erhalten wir möglicherweise eine Provision. Dies hat keinen Einfluss auf den Preis, den Sie zahlen.',
    'footer.disclaimer.testimonials': 'Erfahrungsbericht-Haftungsausschluss',
    'footer.disclaimer.testimonials.text': 'Die verwendeten Erfahrungsberichte und Beispiele sind außergewöhnliche Ergebnisse, die nicht für den durchschnittlichen Käufer gelten und nicht dazu bestimmt sind, zu vertreten oder zu garantieren, dass jemand die gleichen oder ähnlichen Ergebnisse erzielen wird. Der Erfolg jedes Einzelnen hängt von seinem Hintergrund, seiner Hingabe, seinem Wunsch und seiner Motivation ab.',
    'footer.links': 'Schnelllinks',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.contact': 'Kontaktieren Sie uns',
    'footer.copyright': '© 2025 EZ Entrepreneur Academy. Alle Rechte vorbehalten.',
    'footer.contact.info': 'E-Mail: a2487806918@gmail.com  New York, USA',
    
    // WhatsApp Bar
    'whatsapp.title': 'EZ Entrepreneur Academy',
    'whatsapp.cta': 'Kostenlos auf WhatsApp Beitreten',
  },
  es: {
    // Hero Section
    'hero.badge': 'Gratis para Unirse',
    'hero.title': 'Empoderando a Personas Ambiciosas para Desarrollar Habilidades Reales e Ingresos Escalables — Gratis',
    'hero.description': 'Aprende estrategias probadas para obtener productos de China y vender globalmente. Únete a miles que han transformado su futuro financiero con nuestra formación integral.',
    'hero.cta': 'Comenzar Gratis',
    'hero.stats.students': '15,000+ Estudiantes Activos',
    'hero.stats.rating': '⭐4.9/5 Calificación Promedio',
    'hero.stats.countries': '50+ Países en Todo el Mundo',
    
    // Price Difference Section
    'price.title': 'Demostración de Ganancias por Diferencia de Precios',
    'price.subtitle': 'Ejemplo Real: Relojes Michael Kors',
    'price.china.label': 'Precio en China',
    'price.china.price': '¥580',
    'price.china.usd': '≈ $80 USD',
    'price.europe.label': 'Venta al por Menor en Europa',
    'price.europe.price': '€299',
    'price.europe.usd': '≈ $320 USD',
    'price.profit.title': 'Tu Ganancia Potencial',
    'price.profit.margin': '$240 por unidad',
    'price.profit.percentage': '300% de margen potencial',
    'price.profit.note': '*Los márgenes de beneficio pueden variar según el envío, los impuestos y las condiciones del mercado. Este es un ejemplo educativo.',
    'price.clickToZoom': 'Haz clic en las imágenes para ampliar',
    
    // Footer
    'footer.disclaimer.title': 'Avisos Importantes',
    'footer.disclaimer.income': 'Aviso de Ingresos',
    'footer.disclaimer.income.text': 'Cualquier declaración de ganancias o ingresos, o cualquier ejemplo de ganancias o ingresos, son solo estimaciones de lo que creemos que podrías ganar. No hay garantía de que obtendrás los mismos resultados que se indican en los ejemplos. Si confías en cualquier cifra proporcionada, debes aceptar todo el riesgo de no obtener los resultados que indica la información.',
    'footer.disclaimer.guarantee': 'Sin Garantía',
    'footer.disclaimer.guarantee.text': 'No hay garantía de que ganarás dinero utilizando las técnicas e ideas de estos materiales. Los ejemplos en estos materiales no deben interpretarse como una promesa o garantía de ganancias. El potencial de ganancias depende completamente de la persona que usa nuestro producto, ideas, técnicas y el esfuerzo realizado.',
    'footer.disclaimer.liability': 'Exención de Responsabilidad',
    'footer.disclaimer.liability.text': 'Aceptas expresamente que el uso o la incapacidad de usar el servicio es bajo tu propio riesgo. El servicio y todos los productos y servicios entregados a través del servicio se proporcionan "tal cual" y "según disponibilidad" para su uso, sin ninguna representación, garantía o condición de ningún tipo.',
    'footer.disclaimer.affiliate': 'Divulgación de Afiliados',
    'footer.disclaimer.affiliate.text': 'Algunos enlaces en esta página pueden ser enlaces de afiliados. Si compras un producto o servicio a través de un enlace de afiliado, podemos recibir una comisión. Esto no afecta el precio que pagas.',
    'footer.disclaimer.testimonials': 'Aviso de Testimonios',
    'footer.disclaimer.testimonials.text': 'Los testimonios y ejemplos utilizados son resultados excepcionales, que no se aplican al comprador promedio, y no pretenden representar o garantizar que cualquiera logrará los mismos resultados similares. El éxito de cada individuo depende de su experiencia, dedicación, deseo y motivación.',
    'footer.links': 'Enlaces Rápidos',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.contact': 'Contáctanos',
    'footer.copyright': '© 2025 EZ Entrepreneur Academy. Todos los Derechos Reservados.',
    'footer.contact.info': 'Email: a2487806918@gmail.com  Nueva York, EE.UU.',
    
    // WhatsApp Bar
    'whatsapp.title': 'EZ Entrepreneur Academy',
    'whatsapp.cta': 'Unirse Gratis en WhatsApp',
  },
  pt: {
    // Hero Section
    'hero.badge': 'Gratuito para Participar',
    'hero.title': 'Capacitando Pessoas Ambiciosas a Desenvolver Habilidades Reais e Renda Escalável — Gratuitamente',
    'hero.description': 'Aprenda estratégias comprovadas para adquirir produtos da China e vender globalmente. Junte-se a milhares que transformaram seu futuro financeiro com nosso treinamento abrangente.',
    'hero.cta': 'Começar Gratuitamente',
    'hero.stats.students': '15,000+ Alunos Ativos',
    'hero.stats.rating': '⭐4.9/5 Avaliação Média',
    'hero.stats.countries': '50+ Países no Mundo Todo',
    
    // Price Difference Section
    'price.title': 'Demonstração de Lucro por Diferença de Preço',
    'price.subtitle': 'Exemplo Real: Relógios Michael Kors',
    'price.china.label': 'Preço na China',
    'price.china.price': '¥580',
    'price.china.usd': '≈ $80 USD',
    'price.europe.label': 'Varejo na Europa',
    'price.europe.price': '€299',
    'price.europe.usd': '≈ $320 USD',
    'price.profit.title': 'Seu Lucro Potencial',
    'price.profit.margin': '$240 por unidade',
    'price.profit.percentage': '300% de margem potencial',
    'price.profit.note': '*As margens de lucro podem variar com base no frete, impostos e condições de mercado. Este é um exemplo educacional.',
    'price.clickToZoom': 'Clique nas imagens para ampliar',
    
    // Footer
    'footer.disclaimer.title': 'Avisos Importantes',
    'footer.disclaimer.income': 'Aviso de Renda',
    'footer.disclaimer.income.text': 'Quaisquer declarações de ganhos ou renda, ou quaisquer exemplos de ganhos ou renda, são apenas estimativas do que achamos que você poderia ganhar. Não há garantia de que você obterá os mesmos resultados indicados em qualquer exemplo. Se você confiar em quaisquer números fornecidos, você deve aceitar todo o risco de não obter os resultados que a informação indica.',
    'footer.disclaimer.guarantee': 'Sem Garantia',
    'footer.disclaimer.guarantee.text': 'Não há garantia de que você ganhará dinheiro usando as técnicas e ideias destes materiais. Os exemplos nestes materiais não devem ser interpretados como uma promessa ou garantia de ganhos. O potencial de ganhos depende inteiramente da pessoa usando nosso produto, ideias, técnicas e o esforço realizado.',
    'footer.disclaimer.liability': 'Isenção de Responsabilidade',
    'footer.disclaimer.liability.text': 'Você concorda expressamente que o uso ou a incapacidade de usar o serviço é por sua conta e risco. O serviço e todos os produtos e serviços entregues a você através do serviço são fornecidos "como está" e "conforme disponível" para seu uso, sem qualquer representação, garantia ou condição de qualquer tipo.',
    'footer.disclaimer.affiliate': 'Divulgação de Afiliados',
    'footer.disclaimer.affiliate.text': 'Alguns links nesta página podem ser links de afiliados. Se você comprar um produto ou serviço através de um link de afiliado, podemos receber uma comissão. Isso não afeta o preço que você paga.',
    'footer.disclaimer.testimonials': 'Aviso de Depoimentos',
    'footer.disclaimer.testimonials.text': 'Os depoimentos e exemplos usados são resultados excepcionais, que não se aplicam ao comprador médio, e não se destinam a representar ou garantir que qualquer pessoa obterá os mesmos resultados semelhantes. O sucesso de cada indivíduo depende de sua experiência, dedicação, desejo e motivação.',
    'footer.links': 'Links Rápidos',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.contact': 'Entre em Contato',
    'footer.copyright': '© 2025 EZ Entrepreneur Academy. Todos os Direitos Reservados.',
    'footer.contact.info': 'Email: a2487806918@gmail.com  Nova York, EUA',
    
    // WhatsApp Bar
    'whatsapp.title': 'EZ Entrepreneur Academy',
    'whatsapp.cta': 'Participar Grátis no WhatsApp',
  },
  fr: {
    // Hero Section
    'hero.badge': 'Gratuit pour Rejoindre',
    'hero.title': 'Autonomiser les Personnes Ambitieuses à Développer de Vraies Compétences et des Revenus Évolutifs — Gratuitement',
    'hero.description': 'Apprenez des stratégies éprouvées pour sourcer des produits de Chine et vendre mondialement. Rejoignez des milliers de personnes qui ont transformé leur avenir financier avec notre formation complète.',
    'hero.cta': 'Commencer Gratuitement',
    'hero.stats.students': '15 000+ Étudiants Actifs',
    'hero.stats.rating': '⭐4.9/5 Note Moyenne',
    'hero.stats.countries': '50+ Pays dans le Monde',
    
    // Price Difference Section
    'price.title': 'Démonstration de Profit par Différence de Prix',
    'price.subtitle': 'Exemple Réel : Montres Michael Kors',
    'price.china.label': 'Prix en Chine',
    'price.china.price': '¥580',
    'price.china.usd': '≈ $80 USD',
    'price.europe.label': 'Vente au Détail en Europe',
    'price.europe.price': '€299',
    'price.europe.usd': '≈ $320 USD',
    'price.profit.title': 'Votre Profit Potentiel',
    'price.profit.margin': '$240 par unité',
    'price.profit.percentage': '300% de marge potentielle',
    'price.profit.note': '*Les marges bénéficiaires peuvent varier en fonction de l\'expédition, des taxes et des conditions du marché. Ceci est un exemple éducatif.',
    'price.clickToZoom': 'Cliquez sur les images pour zoomer',
    
    // Footer
    'footer.disclaimer.title': 'Avis Importants',
    'footer.disclaimer.income': 'Avis de Revenu',
    'footer.disclaimer.income.text': 'Toute déclaration de gains ou de revenus, ou tout exemple de gains ou de revenus, ne sont que des estimations de ce que nous pensons que vous pourriez gagner. Il n\'y a aucune garantie que vous obtiendrez les mêmes résultats indiqués dans les exemples. Si vous vous fiez à des chiffres fournis, vous devez accepter le risque complet de ne pas obtenir les résultats indiqués par l\'information.',
    'footer.disclaimer.guarantee': 'Sans Garantie',
    'footer.disclaimer.guarantee.text': 'Il n\'y a aucune garantie que vous gagnerez de l\'argent en utilisant les techniques et idées de ces matériaux. Les exemples dans ces matériaux ne doivent pas être interprétés comme une promesse ou une garantie de gains. Le potentiel de gains dépend entièrement de la personne utilisant notre produit, nos idées, nos techniques et l\'effort fourni.',
    'footer.disclaimer.liability': 'Clause de Non-Responsabilité',
    'footer.disclaimer.liability.text': 'Vous acceptez expressément que votre utilisation ou votre incapacité à utiliser le service soit à vos propres risques. Le service et tous les produits et services qui vous sont livrés via le service sont fournis "tels quels" et "selon disponibilité" pour votre utilisation, sans aucune représentation, garantie ou condition de quelque nature que ce soit.',
    'footer.disclaimer.affiliate': 'Divulgation d\'Affiliation',
    'footer.disclaimer.affiliate.text': 'Certains liens sur cette page peuvent être des liens d\'affiliation. Si vous achetez un produit ou un service via un lien d\'affiliation, nous pouvons recevoir une commission. Cela n\'affecte pas le prix que vous payez.',
    'footer.disclaimer.testimonials': 'Avis sur les Témoignages',
    'footer.disclaimer.testimonials.text': 'Les témoignages et exemples utilisés sont des résultats exceptionnels, qui ne s\'appliquent pas à l\'acheteur moyen, et ne sont pas destinés à représenter ou garantir que quiconque obtiendra les mêmes résultats similaires. Le succès de chaque individu dépend de son parcours, de sa détermination, de son désir et de sa motivation.',
    'footer.links': 'Liens Rapides',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.contact': 'Nous Contacter',
    'footer.copyright': '© 2025 EZ Entrepreneur Academy. Tous Droits Réservés.',
    'footer.contact.info': 'Email : a2487806918@gmail.com  New York, États-Unis',
    
    // WhatsApp Bar
    'whatsapp.title': 'EZ Entrepreneur Academy',
    'whatsapp.cta': 'Rejoindre Gratuitement sur WhatsApp',
  },
};

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Load saved language from localStorage or default to 'en'
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}