import React from "react";
import styles from "./Landingpage.module.css";
import img1 from "../../assets/images/img1.JPG";
import img2 from "../../assets/images/img2.JPG";
import img3 from "../../assets/images/img3.JPG";
import img4 from "../../assets/images/img4.JPG";
import img5 from "../../assets/images/img5.JPG";
import img6 from "../../assets/images/img6.JPG";

const Landingpage = () => {
  return (
    <>
      <div>
        <div className={styles.navbar}>
          <div>
            <div>
              <img />
              <h3>Myteam</h3>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <a>features</a>
              </li>
              <li>
                <a>contact us</a>
              </li>
              <li>
                <a>sign in</a>
              </li>
              <li>
                <button>
                  <a>join now</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.section1__container}>
            <div className={styles.section1__left}>
              <img src={img1} alt="image" />
            </div>
            <div className={styles.section1__right}>
              <h2>The easiest time tracking solution</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
            </div>
          </div>
          <div className={styles.section1__btn}>
            <button className={styles.button}>
              <a>Start now !</a>
            </button>
          </div>
        </div>
        <div className={styles.section2}>
          <div>
            <div>
              <h2>You are 3-steps away from life</h2>
            </div>
            <div className={styles.section2__container}>
              <div className={styles.section2__col}>
                <div>
                  <img src={img2} />
                </div>
                <p>
                  Register your
                  <br />
                  organisation
                </p>
              </div>
              <div className={styles.section2__col}>
                <div>
                  <img src={img3} />
                </div>
                <p>
                  invite your team
                  <br />
                  members
                </p>
              </div>
              <div className={styles.section2__col}>
                <div>
                  <img src={img4} />
                </div>
                <p>
                  start tracking and
                  <br />
                  paying your team
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.section3__container}>
            <div>
              <h2>Why do you need a time tracker ??</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea.
              </p>
            </div>
            <div>
              <img src={img5} alt="image" />
            </div>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.section4__container}>
            <div>
              <img src={img6} alt="image" />
            </div>
            <div>
              <h2>Why choosing us ?</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section5}>
          <div className={styles.section5__container}>
            <div>
              <h2>Great solutions come one time</h2>
            </div>
            <div>
              <p>
                So , Don’t wait and start now, consetetur
                <br />
                sadipscing elitr, sed diam nonumy eirmod
                <br />
                tempor invidunt ut labore et dolore magna.
              </p>
            </div>
            <div className={styles.section5__btn}>
              <button className={styles.button}>
                <a>Start now !</a>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__leftsec}>
              <p>© 2020, myteam, Inc. All Rights Reserved.</p>
            </div>
            <div className={styles.footer__rightsec}>
              <div className={styles.footer__col1}>
                <p className={styles.footer__head}>PRODUCT</p>
                <p>Use Cases</p>
                <p>iOS App</p>
                <p>Screen Recorder</p>
                <p>Help Center</p>
                <p>What’s New</p>
                <p>System Status</p>
                <p>Roadmap</p>
              </div>
              <div className={styles.footer__col2}>
                <p className={styles.footer__head}>ABOUT LOOM</p>
                <p>Company</p>
                <p>Jobs</p>
                <p>Blog</p>
                <p>Press</p>
              </div>
              <div className={styles.footer__col3}>
                <p className={styles.footer__head}>LEGAL</p>
                <p>Privacy for Humans</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
