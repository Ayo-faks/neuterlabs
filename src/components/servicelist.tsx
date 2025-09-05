import Image from 'next/image'

// Our core capabilities in healthcare AI
const capabilities = [
    {
        name: '🩺 Diabetes Management Assistant',
        description: 'AI that helps patients track glucose levels, medication adherence, and lifestyle factors with privacy-preserving machine learning that learns individual patterns while maintaining strict data protection.',
        imageSrc: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Digital health monitoring interface with glucose tracking visualization',
        href: '#',
    },
    {
        name: '🧠 Mental Health Companion',
        description: 'Compassionate AI for depression support that provides evidence-based interventions, mood tracking, and crisis detection with human oversight and transparent decision-making processes.',
        imageSrc: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Calming interface showing mental health support tools and mood tracking',
        href: '#',
    },
    {
        name: '🔒 Privacy-First Healthcare AI',
        description: 'Federated learning and differential privacy ensure your health data never leaves your device while still enabling personalized care recommendations and population-level insights.',
        imageSrc: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Secure data encryption visualization with healthcare symbols',
        href: '#',
    },
    {
        name: '⚖️ Responsible AI Research',
        description: 'Rigorous bias testing, fairness audits, and safety evaluations ensure our healthcare AI systems work equitably across all demographics and maintain the highest standards of medical ethics.',
        imageSrc: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Research lab with diverse team analyzing AI fairness metrics',
        href: '#',
    },
    {
        name: '🤝 Human-AI Collaboration',
        description: 'Our AI enhances rather than replaces human healthcare providers, offering decision support tools that maintain physician autonomy while improving patient outcomes through intelligent insights.',
        imageSrc: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Healthcare professional using AI-assisted diagnostic tools',
        href: '#',
    },
    {
        name: '📊 Clinical Evidence Generation',
        description: 'Real-world evidence generation through carefully designed studies that measure the safety and efficacy of AI interventions in diabetes and mental health management.',
        imageSrc: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Clinical research data visualization showing treatment outcomes',
        href: '#',
    },
]

export default function ServiceList(){
    return(
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-gray-50 text-4xl px-6 font-semibold leading-6 text-gray-900">
                                Our Research & Capabilities
                            </span>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We&rsquo;re developing AI systems that understand the complexities of chronic health conditions. 
                            Our approach combines cutting-edge machine learning with rigorous safety research to create 
                            AI assistants that truly serve human wellbeing.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        {capabilities.map((capability) => (
                            <div key={capability.name} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={capability.imageSrc}
                                        alt={capability.imageAlt}
                                        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {capability.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {capability.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}