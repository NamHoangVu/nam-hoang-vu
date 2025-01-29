import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import snake from "../../assets/snake.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={snake}
          link="https://github.com/NamHoangVu/Snake-Game"
          h3="Snake"
          p="Snake Game"
        />
      </div>
    </section>
  );
}

export default Projects;