import Image from 'next/image'

export default function Home() {
  const upcomingApps = [
    {
      title: "Memento Mori",
      description: "iOS application created by Scott Mcmullen",
      hasImage: true,
      color: "bg-[#f5f5f7]",
      isRevealed: true
    },
    {
      title: "Coming Soon",
      description: "",
      icon: "?",
      color: "bg-[#f5f5f7]",
      isRevealed: false
    },
    {
      title: "Coming Soon",
      description: "",
      icon: "?",
      color: "bg-[#f5f5f7]",
      isRevealed: false
    },
    {
      title: "Coming Soon",
      description: "",
      icon: "?",
      color: "bg-[#f5f5f7]",
      isRevealed: false
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-[20px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-left">
              <h1 className="text-[32px] md:text-[42px] font-bold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                Decent degens creating real world applications together
              </h1>
              <p className="text-[18px] leading-[1.5] text-gray-600 mb-6">
                Join now and create projects as a community. If you've got an idea for an app/game/project let us know, if you have already built it and want to release through "Degen Creative" and get the full community support, even better.
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Join Community
                </a>
                <a href="#" className="px-6 py-2 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
                  Submit Project
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] relative flex items-center justify-center translate-x-[20mm]">
                <Image
                  src="/degen-creative-logo-updated.png"
                  alt="Degen Creative Logo"
                  width={400}
                  height={400}
                  priority
                  className="object-contain"
                  style={{ 
                    border: 'none', 
                    outline: 'none',
                    filter: 'none',
                    background: 'transparent',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Applications */}
      <section className="py-[30px] bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-[48px] leading-[1.1] font-semibold text-center mb-[30px] text-[#1d1d1f]">
            Upcoming Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingApps.map((app, index) => (
              <div key={index} className="group">
                <div className={`aspect-square ${app.color} rounded-[20px] flex items-center justify-center text-4xl mb-3 transition-transform group-hover:scale-105 shadow-sm ${!app.isRevealed ? 'bg-gradient-to-br from-gray-100 to-gray-200' : ''}`}>
                  {app.hasImage ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src="/memento-mor-icon.png"
                        alt="Memento Mori Icon"
                        fill
                        className="rounded-[20px] object-contain p-2 hover:scale-105 transition-transform duration-300"
                        priority
                        quality={100}
                        style={{
                          backgroundColor: '#f5f5f7',
                        }}
                      />
                    </div>
                  ) : (
                    <span className={!app.isRevealed ? 'text-gray-400 text-6xl font-light' : ''}>
                      {app.icon}
                    </span>
                  )}
                </div>
                {app.isRevealed && (
                  <>
                    <h3 className="text-[17px] font-semibold mb-1 text-[#1d1d1f]">{app.title}</h3>
                    <p className="text-[14px] leading-[1.4] text-[#6e6e73]">{app.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Welcome to Degen Creative</h2>
          <p className="text-xl text-gray-600 mb-6 text-center">
            A community-driven platform for Solana enthusiasts and innovators who are passionate about creating real-world applications that bridge the gap between blockchain and mainstream technology.
          </p>
          <div className="space-y-4 text-left">
            <p className="text-gray-700">
              In the heart of Q2 2025, a new movement emerged in the Solana ecosystem. Degenerate Creative was born from a simple belief: that the future of blockchain technology lies not just in trading and speculation, but in creating tangible, real-world applications that people actually use.
            </p>
            <p className="text-gray-700">
              We're a community of builders, creators, and innovators who are passionate about bringing blockchain technology to the masses through iOS and Android applications, games, and innovative projects. Our focus extends beyond the blockchain, creating solutions that work seamlessly both on and off-chain.
            </p>
            <p className="text-gray-700">
              What sets us apart is our commitment to positive energy and genuine innovation. We believe in building a supportive environment where creators can thrive, share knowledge, and collaborate on groundbreaking projects. Our community is built on the principles of mutual support, technical excellence, and a shared vision of making blockchain technology accessible to everyone.
            </p>
            <p className="text-gray-700">
              Through platforms like Instagram, we're building a less toxic, more constructive space for crypto innovators to connect and grow. We believe in the power of positive community building and meaningful connections over short-term gains.
            </p>
            <p className="text-gray-700">
              Whether you're an experienced developer or just starting your journey in blockchain technology, there's a place for you in our community. We welcome anyone who shares our vision of creating meaningful applications that make a difference.
            </p>
            <p className="text-gray-700">
              Join us in building the future of decentralized applications. Whether you want to create your own app, game, or project, or simply want to be part of a community that's pushing the boundaries of what's possible in the blockchain space, Degenerate Creative is your home.
            </p>
            <p className="text-gray-700">
              Our team's commitment to growth extends beyond just building applications. For every $1 million market cap milestone we reach, our team wallet will allocate $1,000 USD to strategic partnerships with influencers and promoters who align with our vision. This ensures our applications and projects receive the attention they deserve while maintaining authentic connections within the community.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 