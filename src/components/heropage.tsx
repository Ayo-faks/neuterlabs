import Image from 'next/image'
import Link from 'next/link'
import neuterBG from '@/images/neuterBG.png'

export default function HeroPage(){
    return(
        <div className="home -mt-24 relative overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={neuterBG}
              alt="NeuterLabs AI Research"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/80 to-neutral-950/95" />
            {/* Subtle grain texture overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
          </div>
          
          {/* Hero Content */}
          <div className="home-content relative z-20 flex flex-col items-center px-6 py-32 sm:py-40 lg:py-52">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              {/* Main Headline - Premium Typography */}
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                AI research and products that put safety at the frontier
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
                AI will have a vast impact on the world. NeuterLabs is dedicated to securing its benefits and mitigating its risks.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Link 
                  href="#wulo" 
                  className="group px-8 py-4 bg-white text-neutral-950 rounded-full font-semibold tracking-wide hover:bg-neutral-100 transition-all duration-300 shadow-premium-lg hover:shadow-premium-xl hover:scale-[1.02]"
                >
                  Explore WULO
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link 
                  href="#research" 
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  Our Research
                </Link>
              </div>
              
              {/* Product Highlight Badge */}
              <div className="pt-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-glow">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-subtle-pulse" />
                    <span className="text-white/60 text-sm font-medium tracking-wide">Now Available:</span>
                  </div>
                  <Link href="https://wulo.ai" target="_blank" className="text-white font-semibold hover:text-white/90 transition-colors duration-300">
                    WULO Carbon Intelligence System
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}