import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";


function Hero() {
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
                <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://Linkedin.com/" target="_blank">
                <img src={linkedinIcon} alt="LinkedIn icon" />
                </a>
            </span>
            <p>Jeg studerer Anvedt Datateknologi på Oslomet!</p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
  );
}

export default Hero;
