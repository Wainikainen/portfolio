"use client";

import "./page.css";
import ProjectCards from "@/components/ProjectCards/ProjectCards";

export default function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-title">My Work</h1>
      <p className="projects-sub">A collection of my projects</p>
      <ProjectCards />
    </div>
  );
}
