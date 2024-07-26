import ProjectCard from "../../common/ProjectCard";
import styles from "../Projects/ProjectsStyles.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          link="somelink"
          h3="SuggestionApp"
          p="Ticket Management System"
        />
      </div>
    </section>
  );
}

export default Projects;
