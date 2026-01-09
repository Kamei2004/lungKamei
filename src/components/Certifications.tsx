import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Completed foundational cloud curriculum covering core AWS services, global infrastructure, billing models, and best practices for secure, scalable deployments.",
    skills: ["AWS", "Cloud Basics", "Security"],
    image: "https://placehold.co/800x520/0ea5e9/0f172a?text=AWS+Certificate+Preview",
    link: "https://example.com/certificates/aws-cloud-foundations",
  },
  {
    title: "Google Data Analytics Professional",
    issuer: "Coursera",
    date: "2024",
    description:
      "Hands-on data analysis track using spreadsheets, SQL, and Tableau-style visualization to clean, analyze, and share insights from real datasets.",
    skills: ["SQL", "Data Visualization", "Spreadsheets"],
    image: "https://placehold.co/800x520/22d3ee/0f172a?text=Data+Analytics+Certificate",
    link: "https://example.com/certificates/google-data-analytics",
  },
  {
    title: "Cisco CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2023",
    description:
      "Network fundamentals course covering OSI model, IPv4/IPv6 addressing, subnetting, and basic device configuration for small enterprise setups.",
    skills: ["Networking", "Subnetting", "Routing"],
    image: "https://placehold.co/800x520/34d399/0f172a?text=Cisco+Certificate+Preview",
    link: "https://example.com/certificates/cisco-ccna-intro",
  },
];

const Certifications = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Credentials I've earned along my learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate preview`}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  <BadgeCheck size={14} />
                  {cert.date}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mt-3 mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-mono border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 text-sm"
                >
                  <ExternalLink size={16} />
                  View certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
