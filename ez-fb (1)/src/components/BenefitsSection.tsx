import { Rocket, DollarSign, Handshake } from 'lucide-react';

export function BenefitsSection() {
  return (
    <section className="bg-[#F3F7FB] px-5 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-[#1A1F36] mb-3 text-center">What You Can Get Right Away</h2>
        <p className="text-gray-600 text-center mb-10">
          Real results, not empty promises
        </p>

        <div className="space-y-5">
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-14 h-14 rounded-xl bg-[#1A73E8]/10 flex items-center justify-center mb-4">
              <Rocket className="w-7 h-7 text-[#1A73E8]" />
            </div>
            <h3 className="text-[#1A1F36] mb-2">Launch your products on Day 1</h3>
            <p className="text-gray-600 mb-2">No skills needed.</p>
            <div className="inline-block bg-[#1A73E8]/5 px-3 py-1 rounded-full">
              <p className="text-sm text-[#1A73E8]">Start selling immediately</p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-14 h-14 rounded-xl bg-[#3BB273]/10 flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-[#3BB273]" />
            </div>
            <h3 className="text-[#1A1F36] mb-2">See income within the first week</h3>
            <p className="text-gray-600 mb-2">Hundreds of students achieved this pace.</p>
            <div className="inline-block bg-[#3BB273]/5 px-3 py-1 rounded-full">
              <p className="text-sm text-[#3BB273]">Proven track record</p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-14 h-14 rounded-xl bg-[#1A73E8]/10 flex items-center justify-center mb-4">
              <Handshake className="w-7 h-7 text-[#1A73E8]" />
            </div>
            <h3 className="text-[#1A1F36] mb-2">We don't sell courses — we only earn when you earn</h3>
            <p className="text-gray-600 mb-2">Our profit comes from your success, not fees.</p>
            <div className="inline-block bg-[#1A73E8]/5 px-3 py-1 rounded-full">
              <p className="text-sm text-[#1A73E8]">100% aligned interests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
