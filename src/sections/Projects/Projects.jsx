import ProjectCard from "../../common/ProjectCard";
import styles from "../Projects/ProjectsStyles.module.css";
import SuggestionAppIcon from "../../assets/suggestionsite.webp";
import ARSimulatorIcon from "../../assets/arsimulator.webp";
import ProjectCardPrivate from "../../common/ProjectCardPrivate";
import DishRecommenderIcon from "../../assets/dishrecommender.webp";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={SuggestionAppIcon}
          link="https://github.com/yapzhanrui2/SuggestionApp"
          h3="Suggestion Web App"
          p="Ticket Management System"
        />
        <ProjectCardPrivate
          src={ARSimulatorIcon}
          h3="AR Simulator"
          p="Unity Surgery Simulation"
        />
        <ProjectCardPrivate
          src={DishRecommenderIcon}
          link="https://github.com/yapzhanrui2/SuggestionApp"
          h3="Dish Recommender"
          p="Android App"
        />
      </div>
    </section>
  );
}

export default Projects;
