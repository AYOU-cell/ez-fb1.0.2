import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Smartphone, Globe, ShoppingCart, Package, Zap, Clock, Users, ArrowRight } from 'lucide-react';
import chinaPriceImg from 'figma:asset/f8e9dd9a821bfc2b0ae8b8abcb23ab779c290e38.png';
import europePriceImg from 'figma:asset/7db8aba9206574064be23356715420f6ee23662c.png';

// Block 1 Data: Global E-commerce Sales Growth
const salesGrowthData = [
  { year: '2024', sales: 6.3 },
  { year: '2025', sales: 6.9 },
  { year: '2026', sales: 7.4 },
  { year: '2027', sales: 7.9 },
  { year: '2028', sales: 8.5 },
];

// Block 3 Data: China Supply Chain
const chinaSupplyData = [
  { metric: 'Global Share', value: 35 },
  { metric: 'Cost Savings', value: 50 },
  { metric: 'Profit Margin', value: 40 },
];

// Block 5 Data: New Seller Growth
const newSellerData = [
  { year: '2021', sellers: 450 },
  { year: '2022', sellers: 520 },
  { year: '2023', sellers: 580 },
  { year: '2024', sellers: 600 },
  { year: '2025', sellers: 630 },
];

export function TrendsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-5 py-16">
      <div className="max-w-md mx-auto">
        {/* Section Title */}
        <h2 className="text-[#0A1E5A] mb-3 text-center">E-commerce Is Exploding Worldwide</h2>
        <p className="text-gray-600 text-center mb-12">
          More buyers are shopping online every year — creating massive opportunities for new sellers.
        </p>

        {/* Block 1: Global E-commerce Sales Growth */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-4">Global E-commerce Sales Are Surging</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={salesGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="year" stroke="#0A1E5A" />
              <YAxis stroke="#0A1E5A" />
              <Tooltip 
                formatter={(value) => `$${value}T`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#005CE6" 
                strokeWidth={3} 
                dot={{ fill: '#005CE6', r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex justify-between items-center bg-gradient-to-r from-[#005CE6]/5 to-[#005CE6]/10 rounded-xl p-4">
            <div>
              <div className="text-[#0A1E5A] text-sm">2024</div>
              <div className="text-[#005CE6] mt-1">$6.3 trillion</div>
            </div>
            <div className="text-right">
              <div className="text-[#0A1E5A] text-sm">2028 forecast</div>
              <div className="text-[#005CE6] mt-1">$8.5 trillion</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3 text-center">
            Online demand continues rising faster than new seller growth.
          </p>
        </div>

        {/* Block 2: U.S. Online Shopping Habits */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-6">Americans Are Shopping Online More Than Ever</h3>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">79%</div>
                <p className="text-sm text-gray-700">of Americans shop online monthly</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">50%</div>
                <p className="text-sm text-gray-700">of all online orders come from mobile devices</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">30%+</div>
                <p className="text-sm text-gray-700">of purchases come from TikTok, Instagram, and social platforms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3: China Supply Chain Advantage */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-4">China: The World's Most Powerful Supply Chain</h3>
          
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chinaSupplyData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" stroke="#0A1E5A" />
              <YAxis dataKey="metric" type="category" stroke="#0A1E5A" width={100} />
              <Tooltip 
                formatter={(value) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
              />
              <Bar dataKey="value" fill="#005CE6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-5 space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Global products share</span>
              <span className="text-[#005CE6]">35%+</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Cost savings vs. U.S.</span>
              <span className="text-[#005CE6]">30–70%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Typical profit margins</span>
              <span className="text-[#005CE6]">20–60%</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Lower cost = higher profit for you.
          </p>
        </div>

        {/* Block 4: India Supply Chain Growth */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-6">India Is Becoming a New Low-Cost Supply Power</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">400%</div>
                <p className="text-sm text-gray-700">Cross-border exports grew in 5 years</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Package className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">40–60%</div>
                <p className="text-sm text-gray-700">Costs remain cheaper than U.S. suppliers</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-[#005CE6]/5 to-[#005CE6]/10 rounded-xl">
              <p className="text-sm text-gray-700 mb-2">Strong categories:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[#0A1E5A] border border-[#005CE6]/20">Fashion</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[#0A1E5A] border border-[#005CE6]/20">Accessories</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[#0A1E5A] border border-[#005CE6]/20">Home Goods</span>
              </div>
            </div>
          </div>
        </div>

        {/* Block 5: New Seller Growth Trend */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-4">More New Sellers Start Every Year</h3>
          
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={newSellerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="year" stroke="#0A1E5A" />
              <YAxis stroke="#0A1E5A" />
              <Tooltip 
                formatter={(value) => `${value}K`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
              />
              <Bar dataKey="sellers" fill="#005CE6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-[#005CE6] mb-1">600K+</div>
              <p className="text-xs text-gray-600">new sellers/year</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-[#005CE6] mb-1">70%</div>
              <p className="text-xs text-gray-600">are beginners</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-[#005CE6] mb-1">3–6 mo.</div>
              <p className="text-xs text-gray-600">to first profit</p>
            </div>
          </div>
        </div>

        {/* Block 6: Why Now Is the Best Time to Start */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-6">Why Right Now Is the Best Time to Start Selling</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-[#005CE6]" />
              </div>
              <p className="text-sm text-gray-700 pt-2">Over 4.2 billion online buyers worldwide</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#005CE6]" />
              </div>
              <p className="text-sm text-gray-700 pt-2">Consumers increasingly prefer small brands</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-[#005CE6]" />
              </div>
              <p className="text-sm text-gray-700 pt-2">AI tools make selling dramatically easier</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#005CE6]" />
              </div>
              <p className="text-sm text-gray-700 pt-2">Logistics are now 30% faster than 5 years ago</p>
            </div>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-r from-[#0A1E5A] to-[#005CE6] rounded-2xl p-8 text-center shadow-xl mb-12">
          <p className="text-white text-lg leading-relaxed">
            Starting an online store today is easier — and more profitable — than ever.
          </p>
        </div>

        {/* Price Difference Profit Showcase */}
        <div className="mb-8">
          <h3 className="text-[#0A1E5A] mb-6 text-center">Price Difference Profit Showcase</h3>
          
          {/* Two-Column Comparison */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {/* Left Column - China Purchase Price */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <img src={chinaPriceImg} alt="China Purchase Price" className="w-full h-40 object-cover rounded-lg mb-3" />
              <h4 className="text-[#0A1E5A] text-sm mb-1">China Purchase Price</h4>
              <p className="text-xs text-gray-600 mb-2">Michael Kors Watch – Supplier Price</p>
              <div className="text-[#005CE6] text-xl">$188.70</div>
            </div>

            {/* Right Column - Europe Selling Price */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <img src={europePriceImg} alt="Europe Selling Price" className="w-full h-40 object-cover rounded-lg mb-3" />
              <h4 className="text-[#0A1E5A] text-sm mb-1">Europe Selling Price</h4>
              <p className="text-xs text-gray-600 mb-2">Retail Price in EU Market</p>
              <div className="text-[#005CE6] text-xl">$299.99</div>
            </div>
          </div>

          {/* Arrow Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-[#0A1E5A]">China</span>
            <ArrowRight className="w-5 h-5 text-[#005CE6]" />
            <span className="text-[#0A1E5A]">Europe</span>
          </div>

          {/* Profit Highlight */}
          <div className="bg-gradient-to-r from-[#005CE6] to-[#0A1E5A] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-white text-2xl mb-2">Profit per order: $110+</div>
            <p className="text-white/90 text-sm">
              Low-cost sourcing → High-margin sales → Easy cross-border earnings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}