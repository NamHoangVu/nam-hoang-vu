import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";


function Hero() {
    const { theme, toggleTheme } = useTheme();
  
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colrModeContainer}>
        <img className={styles.hero} 
            src={heroImg} 
            alt="Profile picture" 
            />
        <img 
            className={styles.colrMode} 
            src={themeIcon} 
            alt="Color mode icon"
            onClick={toggleTheme} 
            />
        </div>
        <div className={styles.info}>
            <h1>Nam
                <br />
                Hoang
                <br />
                Vu
            </h1>
            <h2>
                Software Developer
            </h2>
            <span>
                <a href="https://github.com/NamHoangVu" target="_blank">
                <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/nam-hoang-vu-a48196249/" target="_blank">
                <img src={linkedinIcon} alt="LinkedIn icon" />
                </a>
            </span>
            <p className={styles.description}>
                Jeg studerer Anvedt Datateknologi på Oslomet!</p>
            <a href={CV} download>
                <button className="hover">
                    CV
                </button>
            </a>
        </div>
    </section>
  );
}

export default Hero;
