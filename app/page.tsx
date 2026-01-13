import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Image Section */}
      <section className="relative w-full h-[25vh] md:h-[30vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Gradient overlay that transitions to black */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
      </section>

      {/* Header Section */}
      <section className="relative px-6 py-16 md:px-12 md:py-24 lg:px-24 -mt-16 md:-mt-20 z-10">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Build Product Conviction.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                In 30-60 days, I'll help your Product team move from order-takers to confident, strategic partners in the business.
              </p>
              <a 
                href="https://calendly.com/varun-rajan/product-culture-consult" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center gap-2 group"
              >
                Book a Conviction Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
            </div>
            
            {/* Right Column - Portrait Image */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-yellow-400 rounded-2xl -z-10"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Portrait"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left">
            I'll turn a busy product team into sharp, strategic decision-makers.
          </h2>
          
          {/* Three-Phase Process */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Phase 1: Diagnose */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Diagnose</h3>
              <p className="text-yellow-400 font-semibold mb-6">Weeks 1-2</p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-300">1:1 stakeholder interviews</li>
                <li className="text-gray-300">Review recent initiatives</li>
                <li className="text-gray-300">Spot where bets collapse into taking orders</li>
              </ul>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">
                  Output: <span className="text-yellow-400">Conviction Gap Map</span>
                </span>
              </div>
            </div>

            {/* Phase 2: Build */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Build</h3>
              <p className="text-yellow-400 font-semibold mb-6">Weeks 3-6</p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-300">Framing real bets</li>
                <li className="text-gray-300">Sizing bets without perfect data</li>
                <li className="text-gray-300">Practicing credible pushback</li>
              </ul>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">
                  Output: <span className="text-yellow-400">Bet briefs, rationales, advocacy</span>
                </span>
              </div>
            </div>

            {/* Phase 3: Transfer */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Transfer</h3>
              <p className="text-yellow-400 font-semibold mb-6">Weeks 7-12</p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-300">PMs lead evangelism</li>
                <li className="text-gray-300">Stakeholders see change</li>
                <li className="text-gray-300">Conviction sticks when I leave</li>
              </ul>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">
                  Output: <span className="text-yellow-400">A sharper Product team</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition & Fit Section */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Think of me as your VP of Product's interim Chief-of-Staff.
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            I let Product own the system beneath to build confidence—so your VP can decide and strategize, not referee and escalate.
          </p>

          {/* Good Fit / Not a Fit */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Good Fit */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Good fit if:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">You want Product shaping strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">You're tired of stalling decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">You care about morale and performance</span>
                </li>
              </ul>
            </div>

            {/* Not a Fit */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Not a fit if:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">You want "just execution"</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">You're avoiding hard decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">You're not ready for change</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-6 py-16 md:px-12 md:py-24 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
            Ready to rally around sharper bets?
          </h2>
        </div>
      </footer>
    </main>
  );
}

