import styles from "./HeroStyles.module.css";
import profilePic from "../../assets/profile-pic.png";
import themeSunIcon from "../../assets/sun.svg";
import themeMoonIcon from "../../assets/moon.svg";
import linkedInIconLight from "../../assets/linkedin-light.svg";
import linkedInIconDark from "../../assets/linkedin-dark.svg";
import githubIconLight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import CV from "../../assets/ZhanRui_Yap_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? themeSunIcon : themeMoonIcon;
  const linkedInIcon = theme === "light" ? linkedInIconLight : linkedInIconDark;
  const githubIcon = theme == "light" ? githubIconLight : githubIconDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={profilePic} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Zhan Rui
          <br />
          Yap
        </h1>
        <h2>Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/zryy/" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate IT graduate dedicated to crafting innovative solutions
          through coding mastery and creative problem-solving.
        </p>
        <a href={CV}>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
