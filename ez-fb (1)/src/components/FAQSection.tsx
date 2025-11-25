import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-[#1A1F36] pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#1A73E8] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: "I have zero experience. Can I do this?",
      answer: "Yes — 90% of our students are complete beginners. Our training is designed specifically for people with no prior e-commerce experience. We guide you step-by-step."
    },
    {
      question: "Is this really free?",
      answer: "Yes. No course fee. We only earn from profit-sharing (5% for Semi-Managed or 9% for Full-Managed). We succeed when you succeed."
    },
    {
      question: "How fast can I see results?",
      answer: "Semi-managed: first week income. Full-managed: orders within 3 days. Results vary by individual effort and market conditions, but most students see their first order within the first week."
    },
    {
      question: "Where do the products come from?",
      answer: "Trusted suppliers from China & India. We help you source high-quality products at competitive prices, ensuring good profit margins."
    },
    {
      question: "How much do I need to invest?",
      answer: "Only your product procurement cost — everything else is free. No course fees, no software fees, no hidden charges. You only pay for the inventory you choose to sell."
    },
    {
      question: "What's the difference between Semi-Managed and Full-Managed?",
      answer: "Semi-Managed (5%) is for those who want to learn and operate themselves (1-3 hours/day). Full-Managed (9%) is for busy people — we handle everything and you just need 10 minutes/day."
    },
    {
      question: "Can I do this while working full-time?",
      answer: "Absolutely! Our Full-Managed service is specifically designed for people with full-time jobs. You only need about 10 minutes per day to review reports and make decisions."
    }
  ];

  return (
    <section className="bg-[#F3F7FB] px-5 py-16">
      <div className="max-w-md mx-auto">
        {/* WhatsApp Button */}
        <div className="mb-10">
          <a
            href="https://wa.me/85257437376"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 px-6 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">Chat with us on WhatsApp</span>
          </a>
        </div>

        <h2 className="text-[#1A1F36] mb-3 text-center">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center mb-10">
          Everything you need to know
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}