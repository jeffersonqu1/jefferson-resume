import { RevealOnScroll } from "../RevealOnScroll"
import ThreeDSlider from "../ThreeDSlider"
import GenoaImg from "../../assets/images/GenoaDesign.jpg"
import WaterWerksImg from "../../assets/images/WaterWerksAgency.jpg"
import JACImg from "../../assets/images/JAC.jpg"
import MemorialLogo from "../../assets/images/MemorialLogo.png"

export const WorkTimeLine = () => {
  const slides = [
    {
      image: MemorialLogo,
      year: "2019",
      title: "Java-based Application Developer",
      company: "Memorial University",
      period: "2019",
      description: "Developed a Java-based application to display radar metadata and details, implemented north-up function, built movement visualization based on massive radar data, and displayed positions on Google Maps from provided radar files."
    },
    {
      image: JACImg,
      year: "2020",
      title: "Full Stack Web Developer",
      company: "JAC.We Create",
      period: "Dec 2020 — Sept 2021",
      description: "Executed full-stack development for multiple web projects and managed hosting infrastructure using AWS and Cloudflare."
    },
    {
      image: WaterWerksImg,
      year: "2021",
      title: "Full Stack Web Developer",
      company: "WaterWerks Agency",
      period: "Oct 2021 — Jul 2022",
      description: "Delivered full-stack web solutions, built React SPAs with MongoDB, and developed reusable WordPress block-based themes."
    },
    {
      image: GenoaImg,
      year: "2022",
      title: "Software Developer",
      company: "Genoa Design International",
      period: "Sept 2022 — Present",
      description: "Developing cloud-based microservices, RESTful APIs with C# and .NET, and building AI-powered applications using Claude Code."
    }
  ]

  return (
    <section id="timeline" className="min-h-screen flex items-center justify-center py-5">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Working TimeLine</h2>
          <ThreeDSlider slides={slides} />
        </div>
      </RevealOnScroll>
    </section>
  )
}
