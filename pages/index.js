import Head from 'next/head';
import BodySection from '../components/BodySection';
import BodySection2 from '../components/BodySection2';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docsera - Hire prevetted technical writers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Docsera - Hire prevetted technical writers" />
        <link rel="icon" href="/Vector (6).png" />
      </Head>
      {/*  */}
      <Navbar />
      <div className={styles.hero}>
        {/*  */}
        <div className={styles.main}>
          <div className={styles.orient}>
            <h1 className={styles.headerText}>Find The best<br /> technical Writers</h1>
            <h3 className={styles.subText}>Your dream job is waiting for you</h3>
          </div>
          <div className={styles.heroLinks}>
            <button className={styles.heroButton1}>Hire Talent</button>
            <button className={styles.heroButton2}>Join Scouk</button>
          </div>
          {/*  */}
          <div className={styles.companySection}>
            <h4 className={styles.trust}>We are trusted by:</h4>
              <div className={styles.komp}>
                <div className={styles.kompLogo}>
                  <img src="/Group 6.svg" alt="Airbnb Logo" />
                </div>
                <div className={styles.kompLogo}>
                  <img src="/Group 3.svg" alt="Google Logo" />
                </div>
                <div className={styles.kompLogo}>
                  <img src="/Group 4.svg" alt="Spotify Logo" />
                </div>
                <div className={styles.kompLogo}>
                  <img src="/Group 5.svg" alt="Paypal Logo" />
                </div>
              </div>
          </div>
        </div>
      {/*  */}
      <div className={styles.secondContainer}>
        <svg width="542" height="542" viewBox="0 0 542 542" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="271" cy="271" r="271" fill="#E9ECF3"/>
        </svg>
          <div className={styles.svg1}>
            <svg className={styles.svg0} width="458" height="464" viewBox="0 0 458 464" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="229" cy="235" r="228.5" stroke="white"/>
            <ellipse cx="239.5" cy="6" rx="5.5" ry="6" fill="white"/>
            </svg>
          </div>
          <div className={styles.svg2}>
            <svg className={styles.svgq} width="352" height="350" viewBox="0 0 352 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="175" cy="175" r="174.5" stroke="white"/>
            <circle cx="346.5" cy="143.5" r="5.5" fill="white"/>
            </svg>
          </div>
          <div className={styles.woman}>
            <img className={styles.womanImage} src="/gettyimages-1149975336-1024x1024-removebg-preview 1.png" alt="Woman" />
          </div>
          <div className={styles.fill}>
            <img className={styles.imageFill} src="/Group 19.png" alt="fill" />
          </div>
      </div>
      </div>
      <BodySection />
      <BodySection2 />
    </div>
  )
}
