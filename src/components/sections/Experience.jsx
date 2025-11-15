import FlipCard from "../FlipCard"
import { RevealOnScroll } from "../RevealOnScroll"

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Work Experience</h2>
          <div className="sm:justify-center md:justify-start" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <FlipCard title="Software Developer " company="Genoa Design International " period="2022 – Present" details={["• Developed and maintained microservices for cloud-based applications.", "• Able to use Azure DevOps for versioning control, project management, tasks management and pipeline implementation. ", "• Implemented CI/CD pipelines on Azure. ", "• Strong skills to develop reusable components and to flexible use components library. ", "• Designed and operate complex SQL database models for application data storage. "]} />
            <FlipCard title="Full Stack Web Developer " company="WaterWerks Agency " period="2021 – 2022" details={["• Optimized and Maintained large-scale WordPress websites. ", "• Customized block-based foundation theme with new functions. ", "• Built a single-page application using React and storing data using MongoDB. ", "• Developed back-end API server using Node.js, Express. "]} />
            <FlipCard title="Full Stack Web Developer " company="JAC CO. " period="2019 – 2021" details={["• Maintained and developed small-scale WordPress websites. ", "• Developed and customized foundation theme with different block types.", "• Set up domains through cPanel services using AWS and Cloudflare. ", "• Developed different animations, ECharts and canvas to beautify the websites. "]} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
