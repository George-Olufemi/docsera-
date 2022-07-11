import React from 'react';
import styles from '../styles/Home.module.css';

function BodySection() {
  return (
    <>
        <div className={styles.bodySection}>
            <div className={styles.hire}>
                <h1 className={styles.hireText}>How to hire talents on<br /> Docsera</h1>
                <p className={styles.subHireText}>Docsera is the easiest way to hire technical writers.</p>
            </div>
            <div className={styles.box}>
                <div className={styles.firstbox}>
                    <div className={styles.dunno}>
                        <div className={styles.pen}>
                            <img className={styles.pensvg} src="/pen.svg" alt="pen" />
                        </div>
                    </div>
                    <h3>Technical writer Request</h3>
                    <p>Describe the role and give details about your ideal technical writer(s).</p>
                </div>
                <div className={styles.secondbox}>
                    <div className={styles.dunno}>
                        <div className={styles.tick}>
                            <img className={styles.pensvg} src="/tick.svg" alt="tick" />
                        </div>
                    </div>
                    <h3>Matched with 4<br /> candidates</h3>
                    <p>You get matched with 4 top candidates that best fits the<br /> role.</p>
                </div>
                <div className={styles.thirdbox}>
                    <div className={styles.dunno}>
                        <div className={styles.pen}>
                            <img className={styles.pensvg} src="/ellipse.svg" alt="camcoder" />
                        </div>
                    </div>
                    <h3>Culture Fit test</h3>
                    <p>You conduct a culture fit test for the 4 candidates to select the best</p>
                </div>
                <div className={styles.fourthbox}>
                <div className={styles.dunno}>
                    <div className={styles.pen}>
                        <img className={styles.pensvg} src="/bag.svg" alt="bag" />
                    </div>
                    </div>
                    <h3>Hire Technical Writer</h3>
                    <p>You select the most qualified candidate for the role.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default BodySection;
