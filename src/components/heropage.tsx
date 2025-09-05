import Image from 'next/image'
import neuterBG from '@/images/neuterBG.png'

export default function HeroPage(){
    return(
        <div className="home -mt-24 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={neuterBG}
              alt="Neuter Labs background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="home-content relative z-10 flex flex-col items-center">
            <br></br>
            <br></br>
            <br/>
            <br/>
            <br/>
            <h1 className="text-center max-w-prose mx-auto text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Safe AI for healthcare
            </h1>
            <p className="text-center max-w-prose mx-auto mt-4 text-lg sm:text-xl text-white/90">
              Building AI assistants for diabetes and depression management that prioritize safety, privacy, and human dignity above all else.
            </p>
            <button className="mt-8 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
              LEARN ABOUT OUR RESEARCH
            </button>
          </div>
        </div>
    )
}