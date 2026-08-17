import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import { FaChevronDown, FaChevronUp } from "react-icons/fa" // Import icons

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Genoa Design International",
      period: "Sept 2022 – Present",
      details: ["• Designed, developed, and maintained cloud-native microservices using C# and .NET, supporting mission-critical engineering applications for more than 200 internal users.", "• Designed and implemented secure RESTful APIs using ASP.NET Core, enabling integration across enterprise engineering systems.", "• Designed and optimized Microsoft SQL Server database models for complex application workflows, to support faster reporting for downstream teams.", "• Implemented CI/CD pipelines in Azure DevOps and Azure Pipelines, reducing release time by 40%.", "• Performed unit and integration testing with xUnit, reducing production bugs by 80%.", "• Owned the full Agile development lifecycle from requirements analysis through deployment across many sprints/releases.", "• Built AI-driven developer tools with Claude Code and GitHub Copilot — combining LLM orchestration, prompt engineering, and RAG pipelines — to automate repetitive workflows and cut manual research time.", "• Designed AI agent workflows using Claude Code, tool calling, context management, and sub-agent orchestration to automate multi-step engineering tasks."]
    },
    {
      title: "Full Stack Web Developer",
      company: "WaterWerks Agency",
      period: "Oct 2021 – Jul 2022",
      details: ["• Delivered full-stack development across 10+ production websites, implementing new features and performance improvements.", "• Built reusable WordPress block-based themes and React/MongoDB single-page applications for scalable client projects.", "• Built backend services supporting over 10 production client websites with improved API response times and maintainable architecture."]
    },
    {
      title: "Full Stack Web Developer",
      company: "JAC.We Create",
      period: "Dec 2020 – Sept 2021",
      details: ["• Delivered full-stack enhancements across multiple client websites, improving page performance, maintainability, and customer satisfaction.", "• Built modular, reusable WordPress themes and managed hosting infrastructure across AWS, Cloudflare, and cPanel."]
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Work Experience</h2>
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <div key={index} className="border rounded-lg shadow-md">
                <button onClick={() => toggleAccordion(index)} className="w-full flex justify-between items-center text-left p-4 bg-gray-100 hover:bg-gray-200">
                  <div>
                    <h3 className="text-lg font-semibold text-green-500">{experience.title}</h3>
                    <p className="text-sm text-gray-500">{experience.company}</p>
                    <p className="text-sm text-gray-400">{experience.period}</p>
                  </div>
                  <div className="text-gray-500">{activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}</div>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-white">
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {experience.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
