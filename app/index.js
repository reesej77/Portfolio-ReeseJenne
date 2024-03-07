import Image from 'next/image';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.fadeIn}`}>
        <div className={styles.headerContent}>
          <div className={`${styles.profile} ${styles.profileAnimation}`}>
            <Image src="/images/reesejenneimage.jpg" alt="Your Logo" width={300} height={200} className={styles.logo} />
            <div className={styles.nameContainer}>
              <h1 className={styles.name}>Reese Jenne</h1>
              <p className={styles.role}>Aspiring Full Stack Software & Mobile Application Developer</p>
            </div>
          </div>
          <div className={`${styles.socialLinks} ${styles.socialAnimation}`}>
            <a href="https://www.linkedin.com/in/reesejenne/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Image src="/images/linkedin.png" alt="LinkedIn" width={30} height={30} /></a>
            <a href="https://github.com/reesej77" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Image src="/images/github.png" alt="Github" width={30} height={30} /></a>
            <a href="mailto:reese.jenne@gmail.com" className={styles.socialLink}><Image src="/images/gmail.png" alt="Gmail" width={30} height={30} /></a>
          </div>
        </div>
      </header>
      <nav className={styles.fadeIn}>
        <ul className={styles.navList}>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#project-list">Projects</a></li>
          <li><a href="#skill-list">Skills</a></li>
          <li><a href="#contact-section">Contact</a></li>
        </ul>
      </nav>
      <main className={styles.fadeIn}>
        {/* Content sections */}
      </main>
    </div>
  );
}