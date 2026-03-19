import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-2xl mx-auto">
          <p className="text-sm md:text-base font-medium tracking-widest uppercase text-cyan-400 mb-4">Software Developer</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Zhaopeng Qu
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Experienced in building scalable cloud applications, microservices, and full-stack web systems. Skilled in React, C#, Node.js, and SQL-based database systems with hands-on experience designing APIs and implementing CI/CD pipelines in Azure environments. Passionate about leveraging AI and large language models to build intelligent, user-centric applications.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  )
}
