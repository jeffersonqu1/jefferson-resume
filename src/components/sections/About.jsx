import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
  const frontendSkills = ["React", "Node.js", "Express", "HTML5", "CSS3", "SCSS", "jQuery", "Bootstrap", "TypeScript", "JavaScript"]

  const backendSkills = ["Python", "C#", "PHP", "Java", "Microsoft SQL Server", "MySQL", "MongoDB"]

  const aiSkills = ["Claude Code", "Sub-Agent Architecture", "AI Agents", "Prompt Engineering", "Tool-based Workflows"]

  const cloudDevOpsSkills = ["Azure DevOps", "Azure Pipelines", "AWS", "Cloudflare", "CI/CD Automation"]

  const toolsSkills = ["Git", "Bitbucket", "Jenkins", "NPM", "Yarn", "Composer", ".NET"]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> About Me</h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">Software Developer experienced in building scalable cloud applications, microservices, and full-stack web systems. Skilled in React, C#, Node.js, and SQL-based database systems with hands-on experience designing APIs and implementing CI/CD pipelines in Azure environments.</p>
            <p className="text-gray-300 mb-6">Experienced in developing AI-powered applications and agent-based systems using Claude Code, including multi-agent architectures, tool integrations, and workflow automation solutions.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Programming & Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                    hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> AI & Agent Development</h3>
                <div className="flex flex-wrap gap-2">
                  {aiSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {cloudDevOpsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2">
                <h3 className="text-xl font-bold mb-4"> Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                    hover:shadow-[0_2px_8px_rgba(234,179,8,0.2)] transition
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
                  <strong> Master of Applied Science — Computer Engineering</strong> - Memorial University of Newfoundland, St. John's NL
                </li>
                <li>
                  <strong> Bachelor of Computer Science</strong> - Vellore Institute of Technology, India
                </li>
              </ul>
            </div>
            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
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

                
              </div>
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
