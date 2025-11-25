import { Target, TrendingUp, Headphones } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="bg-[#F3F7FB] px-5 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-[#1A1F36] mb-3 text-center">Why So Many People Choose Us</h2>
        <p className="text-gray-600 text-center mb-10">
          Built on trust, results, and real partnership
        </p>

        <div className="space-y-5">
          {/* Trust Pillar 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#1A73E8]/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-[#1A73E8]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#1A1F36] mb-2">Real execution, no theory</h3>
                <p className="text-gray-600">
                  All training based on real operations. We teach what actually works in the market today.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Pillar 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#3BB273]/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-[#3BB273]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#1A1F36] mb-2">Aligned interests</h3>
                <p className="text-gray-600">
                  You earn → We earn. Our success is directly tied to yours. No hidden fees or upsells.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Pillar 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#1A73E8]/10 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-7 h-7 text-[#1A73E8]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#1A1F36] mb-2">Mentor + Assistant support</h3>
                <p className="text-gray-600">
                  Fast problem solving; no wasted time. Get answers when you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
