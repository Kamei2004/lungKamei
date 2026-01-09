import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BookOpen, Lightbulb, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Developer",
    description: "Building projects with modern technologies",
  },
  {
    icon: BookOpen,
    title: "Learner",
    description: "Constantly expanding my knowledge",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Tackling complex challenges",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on delivering results",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and passion for technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-glass rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a 2nd year BTech Computer Science Engineering student with a strong
                passion for software development and technology. My journey in
                programming started with curiosity and has grown into a dedicated
                pursuit of knowledge and excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy building web applications, exploring new frameworks, and
                solving problems through code. Currently, I'm focused on enhancing my
                skills in full-stack development and contributing to open-source
                projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card-glass rounded-xl p-6 text-center hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;