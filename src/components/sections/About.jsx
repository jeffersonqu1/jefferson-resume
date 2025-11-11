import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript"]

  const backendSkills = ["C#", "MS SQL", "DevOps", "MongoDB", "GraphQL", "WordPress", "PHP", "Java", "Neo4j", "AWS"]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> About Me</h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">I am a passionate developer with strong skills in developing scalable web applications, troubleshooting the issues and maintain the websites. </p>
            <p className="text-gray-300 mb-6">I am also able to collaborate with team members to deliver the solutions and and someone who is good at learning new things. </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Master Degree: Computer Engineering in Applied Science</strong> - Memorial University University of Newfoundland (2013-2016)
                </li>
                {/* <li>Relevant Coursework: Data Structures, Web Development, Cloud Computing...</li> */}
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold"> Software Developer at Genoa Design International (2022 - Present) </h4>
                  <section className="ml-2 mt-1 space-y-1">
                    <p>• Ability to develop application using React, SCSS/CSS3, C#, and database management</p>
                    <p>• Developed and maintained microservices for cloud-based applications.</p>
                    <p>• Able to work with team to understand demands and collaborating with team to develop solutions.</p>
                    <p>• Experience with designing the application using wire framing tool like Balsamiq to meet the requirements.</p>
                    <p>• Able to use Azure DevOps for versioning control, project management, tasks management and pipeline implementation.</p>
                    <p>• Ability to operate some applications and services in Azure including integrating with Azure Active Directory for authentication.</p>
                    <p>• Strong skills to develop reusable components and to flexible use components library to meet the requirements.</p>
                    <p>• Ability to use Graph Databse (Neo4j) to develope database on demand and operate and migrate data as needed.</p>
                  </section>
                </div>

                <div>
                  <h4 className="font-semibold"> Full Stack Web Developer at WaterWerks Agency (2021 - 2022) </h4>
                  <section className="ml-2 mt-1 space-y-1">
                    <p>• Full-stack developed websites by using PHP, JavaScript/jQuery, React, SCSS/CSS3, and HTML5 MySQL, and to use jQuery and bootstrap for building UI</p>
                    <p>• Able to maintain and develop new functions for existing large-scale websites as requested</p>
                    <p>• Developing block-based foundation theme with new functions for future use</p>
                    <p>• Built a single-page application using React and storing data using MongoDB</p>
                    <p>• Ability to develop a back-end API server using Node.js, Express, to interact with database using</p>
                    <p>• Experience with developing custom SQL database table for websites on demand</p>
                  </section>
                </div>

                <div>
                  <h4 className="font-semibold"> Full Stack Web Developer at JAC CO (2019 - 2021) </h4>
                  <section className="ml-2 mt-1 space-y-1">
                    <p>• Full-stack developed small-scaled web development by using PHP, JavaScript, SCSS, and HTML5 </p>
                    <p>• Strong skills to modify and maintain existing large-scale websites to meet requirements</p>
                    <p>• Ability to develop new custom foundation theme with different block types and functions</p>
                    <p>• Able to create websites through cPanel using AWS service and Cloudflare</p>
                    <p>• Developed different animations, ECharts and canvas to beautify the websites like AOS</p>
                    <p>• Collaborated with team to deliver optimized solutions based on requirements</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
