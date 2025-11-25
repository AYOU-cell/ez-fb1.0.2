import { Check, Zap, MessageCircle } from 'lucide-react';

export function CooperationModels() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-[#1A1F36] mb-3 text-center">Choose the Best Way to Work With Us</h2>
        <p className="text-gray-600 text-center mb-10">
          Two flexible options to fit your lifestyle
        </p>

        <div className="space-y-5">
          {/* Semi-Managed Service */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[#1A1F36] mb-2">Semi-Managed Service</h3>
                <div className="inline-block bg-[#F3F7FB] px-3 py-1 rounded-full">
                  <p className="text-sm text-[#1A73E8]">5% revenue share</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              Perfect for people who want to learn and operate themselves (1–3 hours/day).
            </p>

            <div className="mb-4">
              <p className="text-sm text-[#1A1F36] mb-2">You do:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Store registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Product selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Listing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Operating</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Shipping after sales</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-sm text-[#1A1F36] mb-2">We provide:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#3BB273] mt-0.5 flex-shrink-0" />
                  <span>1-on-1 mentorship & assistant</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#3BB273] mt-0.5 flex-shrink-0" />
                  <span>Daily guidance</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F3F7FB] rounded-lg p-4">
              <p className="text-sm text-[#1A1F36]">
                <span className="font-semibold">Expected result:</span> Orders and income within the first week.
              </p>
            </div>
          </div>

          {/* Full-Managed Service - HIGHLIGHTED */}
          <div className="bg-white rounded-xl border-2 border-[#1A73E8] p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#1A73E8] text-white px-4 py-1 rounded-bl-lg flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span className="text-xs">RECOMMENDED</span>
            </div>

            <div className="flex items-start justify-between mb-4 mt-6">
              <div>
                <h3 className="text-[#1A1F36] mb-2">Full-Managed Service</h3>
                <div className="inline-block bg-[#1A73E8] px-3 py-1 rounded-full">
                  <p className="text-sm text-white">9% revenue share</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              Perfect for busy people who don't want to operate the store (10 minutes/day).
            </p>

            <div className="mb-4">
              <p className="text-sm text-[#1A1F36] mb-2">You do:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Register account</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Select product</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Set price</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-sm text-[#1A1F36] mb-2">We handle:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>Product research</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>Pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>Listing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>Inventory & order sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>Shipping</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>Store maintenance</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1A73E8]/5 rounded-lg p-4 mb-4 border border-[#1A73E8]/20">
              <p className="text-sm text-[#1A1F36] mb-3">Daily reporting panel:</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">Visitors</p>
                  <p className="text-lg text-[#1A73E8]">247</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">Orders</p>
                  <p className="text-lg text-[#3BB273]">12</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">Revenue</p>
                  <p className="text-lg text-[#1A1F36]">$890</p>
                </div>
              </div>
            </div>

            <div className="bg-[#3BB273]/10 rounded-lg p-4 border border-[#3BB273]/20">
              <p className="text-sm text-[#1A1F36]">
                <span className="font-semibold">Expected result:</span> Orders within 3 days.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mt-10">
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
      </div>
    </section>
  );
}