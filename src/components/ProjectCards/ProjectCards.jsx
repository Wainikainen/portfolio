"use client";
import * as motion from "motion/react-client";
import "./ProjectCards.css";

const projects = [
  {
    title: "WTWR",
    images: ["/wtwr1.png", "/wtwr2.png", "/wtwr3.png"],
    bio: "Built a full-stack wardrobe app that suggests outfits based on real-time weather. Clothes are dynamically categorized by temperature with a C/F toggle. Features secure user authentication with login/logout modals, logging via Winston, and a MongoDB backend with Joi schema validation. Deployed on a Google Cloud VM.",
    tech: ["React", "JavaScript", "Node.Js", "Express", "Mongoose"],
  },
  {
    title: "Spots",
    images: ["/spots1.png", "/spots2.png", "/spots3.png"],
    bio: "Developed a full-stack JavaScript image-sharing app with image preview, form validation, and secure image management. Integrated frontend and backend with automated build tooling using Webpack, Babel, and PostCSS.",
    tech: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Coffee Shop Landing Page",
    images: ["/coffee1.png", "/coffee2.png", "/coffee3.png"],
    bio: "Created a static HTML/CSS coffee shop landing page with smooth animations, embedded YouTube videos, and a modern cafe-themed design. Built as a front-end template to showcase a coffee shop&apos;s brand and menu.",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Library Landing Page",
    images: ["/library1.png", "/library2.png"],
    bio: "Built a static HTML/CSS landing page for a library, featuring a fully functional navbar with hyperlinks to each section. Focused on clean layout, accessibility, and smooth navigation.",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Login Form",
    images: ["/loginform.png"],
    bio: "Designed a simple login form with a modern gradient background using HTML and CSS, focusing on clean layout and user-friendly interface.",
    tech: ["HTML", "CSS"],
  },
];

const imgVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.5, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ProjectCards() {
  return (
    <div className="projects-grid">
      {projects.map((proj, index) => (
        <motion.section
          key={index}
          className="project-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="project-images-scroll">
            {proj.images.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={proj.title}
                className="project-img"
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              />
            ))}
          </div>
          <div className="project-info">
            <h3 className="project-title">{proj.title}</h3>
            <div className="project-content">
              <div className="project-tech-wrap">
                <p className="project-tech-title">Technologies Used</p>
                <div className="project-tech">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="project-tech-item">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-bio-wrap">
                <p className="project-bio-title">Description</p>
                <p className="project-bio">{proj.bio}</p>
              </div>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
