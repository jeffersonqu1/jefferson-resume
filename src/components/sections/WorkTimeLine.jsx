import { RevealOnScroll } from "../RevealOnScroll"
import ThreeDSlider from "../ThreeDSlider"
import GenoaImg from "../../assets/images/GenoaDesign.jpg"
import WaterWerksImg from "../../assets/images/WaterWerksAgency.jpg"
import JACImg from "../../assets/images/JAC.jpg"
import MemorialImg from "../../assets/images/MemorialLogo.jpg"
import MemorialLogo from "../../assets/images/MemorialLogo.png"
import VerticalTimeline from "../VerticalTimeline"

export const WorkTimeLine = () => {
  const experience = [
    {
      title: "Software Developer",
      company: "Genoa Design International",
      period: "2023 — Present",
      description: "Developing internal tools, automation pipelines, and optimizing workflows in shipbuilding design systems."
    },
    {
      title: "Web Developer",
      company: "NexGen Web Solutions",
      period: "2021 — 2023",
      description: "Built custom WordPress themes, full-stack features, and interactive UI/UX components."
    },
    {
      title: "Full Stack Developer (Intern)",
      company: "TechLabs",
      period: "2019 — 2021",
      description: "Developed dashboards, performed database optimization, and contributed to UI component systems."
    }
  ]

  return (
    <section id="timeline" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Working TimeLine</h2>
          <div className="max-w-3xl mx-auto py-10 px-6">
            <VerticalTimeline items={experience} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
