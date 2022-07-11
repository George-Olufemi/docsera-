import React from "react";
import styles from '../styles/Home.module.css';

function BodySection2() {
  return(
    <>
        <div className={styles.bodySection2}>
            <div className={styles.hire}>
                <h1 className={styles.hireText}>How to get hired on Docsera</h1>
                <p className={styles.subHireText}>Doscera is the best platform to secure your dream job.</p>
            </div>
            <div className={styles.cardsection1}>
                <div className={styles.card1}>
                    <h1 className={styles.cardheading}>Register on the platform</h1>
                    <p className={styles.cardtext}>Create a talent account on Docsera, confirm<br /> your email, and complete your profile to<br /> get started.</p>
                </div>
                <div className={styles.card2}>
                    <h1 className={styles.cardheading}>Online Assessment</h1>
                    <p className={styles.cardtext}>In this step, you are expected to complete a<br /> take-home assessment and upload the<br /> solution on the Docsera platform.</p>
                </div>
            </div>
            {/*  */}
            <div className={styles.cardsection2}>
                <div className={styles.card1}>
                    <h1 className={styles.cardheading}>Project Interview</h1>
                    <p className={styles.cardtext}>In this step, you will take a video interview to<br /> discuss your submission with the Doscera<br /> team.</p>
                </div>
                <div className={styles.card2}>
                    <h1 className={styles.cardheading}>Match & Offer</h1>
                    <p className={styles.cardtext}>In this step, we believed you have proven<br /> yourself eligible to get matched with hiring<br /> companies globally.</p>
                </div>
            </div>
            {/* blur */}
            <div className={styles.section2}>
                <div className={styles.openleft}>
                    <img className={styles.persondetails} src="/details.png" alt="Person details" />
                </div>
                {/*  */}
                <div className={styles.openright}>
                    <h1 className={styles.whyhire}>Why hire a<br /> technical writer<br /> on Docsera?</h1>
                    <p className={styles.whyhire2}>Hiring on Doscera is very straightforward, you can<br /> complete your hiring process with just 4 clicks.</p>
                    <div className={styles.button}>
                        <div className={styles.buttondiv}><p className={styles.butontext}>Get Started</p></div>
                        <div><img src="/arrow.png" alt="arrow" /></div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={styles.lastcardbox}>
                <div className={styles.lastcard1}>
                    <h1 className={styles.lastcardheadertext1}>Get your dream Job</h1>
                    <p className={styles.lastcardtext1}>Whether you looking to change your career, or you<br /> want to get jobs with paid relocation (SkoutHR®) Docsera has<br /> got you covered.</p>
                </div>
                    <div className={styles.lastcard2}>
                        <h1 className={styles.lastcardheadertext2}>Your feed meens a lot to us</h1>
                        <p className={styles.lastcardtext2}>We would love to get your feedback or feature<br /> suggestions, please kindly send your concerns to us<br /> via: support@skouthr.com</p>
                    </div>
            </div>
        </div>
    </>
  );
}

export default BodySection2;
