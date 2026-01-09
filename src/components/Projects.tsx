import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Incident Response Playbook + Automation",
    description:
      "An automated system to handle IT and security incidents using predefined response playbooks. It helps detect incidents, trigger automated actions, and maintain logs to reduce response time and manual effort.",
    tags: ["React.js", "Python", "Flask/FastAPI", "MongoDB", "Docker", "REST APIs"],
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Expense Analyzer Dashboard",
    description:
      "A web dashboard that allows users to track expenses, categorize spending, and visualize financial data through charts for better money management.",
    tags: ["Python", "Plotly", "Streamlit", "Pandas"],
    github: "#",
    demo: "#",
  },
  {
    title: "Hospital Queue Management",
    description:
      "A system designed to manage patient queues efficiently by providing real-time queue updates, appointment handling, and reduced waiting time.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Restaurant Order Management",
    description:
      "Manages restaurant orders digitally with real-time order tracking and status updates between customers and staff.",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Folder className="text-primary" size={24} />
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;