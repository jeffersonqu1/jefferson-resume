import FlipCard from "../FlipCard"
import { RevealOnScroll } from "../RevealOnScroll"

export const Experience = () => {
  // const slides = [
  //   {
  //     image: "../../assets/images/GenoaDesign.jpg",
  //     title: "AI Photo Analyzer"
  //   },
  //   {
  //     image: "../../assets/images/WaterWerksAgency.jpg",
  //     title: "SQL Automation Tool"
  //   },
  //   {
  //     image: "../../assets/images/JAC.jpg",
  //     title: "Neo4j Graph Explorer"
  //   },
  //   {
  //     image: "../../assets/images/MemorialUniversity.jpg",
  //     title: "React Portfolio Website"
  //   }
  // ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Work Experience</h2>
          {/*<div className="sm:justify-center md:justify-start" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FlipCard title="Software Developer" company="Genoa Design International" period="Sept 2022 – Present" details={["• Developed and maintained cloud-based microservices focused on scalability and reliability.", "• Built RESTful API services using C# and .NET for enterprise internal systems.", "• Designed and optimized Microsoft SQL Server database models for complex application workflows.", "• Implemented CI/CD pipelines using Azure DevOps and Azure Pipelines.", "• Performed unit and integration testing using xUnit to ensure code quality.", "• Built experimental AI applications using Claude Code to automate development workflows.", "• Designed agent-based systems using skills, tools, and sub-agent architectures."]} />
            <FlipCard title="Full Stack Web Developer" company="WaterWerks Agency" period="Oct 2021 – Jul 2022" details={["• Delivered full-stack web development solutions across multiple production websites.", "• Maintained and enhanced large-scale applications with new features and performance improvements.", "• Developed reusable WordPress block-based themes for scalable projects.", "• Built single-page applications using React and MongoDB.", "• Developed backend services using Node.js and Express."]} />
            <FlipCard title="Full Stack Web Developer" company="JAC.We Create" period="Dec 2020 – Sept 2021" details={["• Executed full-stack development for multiple web projects.", "• Maintained and improved large-scale client websites.", "• Built modular WordPress themes with advanced reusable blocks.", "• Managed hosting infrastructure using AWS, Cloudflare, and cPanel."]} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
