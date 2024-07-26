import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-light.svg";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <span>
          <img src={checkMarkIcon} alt="Checkmark icon" />
          <p>HTML</p>
        </span>
      </div>
    </section>
  );
}

export default Skills;
