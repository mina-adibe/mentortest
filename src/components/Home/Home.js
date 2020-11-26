import React from "react";
import styles from "./Home.module.css";
import logo from "../../assets/images/clock2.svg";
import avatar from "../../assets/images/avatar.svg";
import dashboard from "../../assets/images/dashboard.svg";
import profits from "../../assets/images/profits.svg";
import settings from "../../assets/images/settings.svg";
import onoffbtn from "../../assets/images/on-off-btn.JPG";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.navbar}>
            <img src={logo} alt="logo" />
            <h2>Myteam</h2>
          </div>

          <div className={styles.col1__container}>
            <div>
              <div className={styles.col1__item}>
                <img src={dashboard} />
                <h2>Dashboard</h2>
              </div>
              <div className={styles.col1__item}>
                <img src={profits} />
                <h2>Analytics</h2>
              </div>
            </div>
            <div>
              <div className={styles.col1__item}>
                <img src={onoffbtn} />
                <h2>Dark mode</h2>
              </div>
              <div className={styles.col1__item}>
                <img src={settings} />

                <h2>Settings</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.col2__head}>
            <h2>Dashboard</h2>
            <p>Wed 23/9/2020</p>
          </div>
          <div className={styles.btns}>
            <div className={styles.btns__btn1}>
              <h2>Project 1</h2>
            </div>
            <div className={styles.btns__btn2}>
              <h2>Project 2</h2>
            </div>
            <div className={styles.btns__btn3}>
              <h2>Project 3</h2>
            </div>
          </div>
          <div className={styles.col2__main}>
            <div className={styles.col2__boxs}>
              <div className={styles.col2__box1}>
                <p>00:02:54</p>
                <p>current tracking</p>
              </div>
              <div className={styles.col2__box2}>
                <p>01:30 hours</p>
                <p>today’s hours</p>
              </div>
              <div className={styles.col2__box3}>
                <p>00:02:54</p>
                <p>total project hours</p>
              </div>
              <div className={styles.col2__box4}>
                <p>total project hours</p>
              </div>
            </div>

            <div className={styles.btn}>
              <button className={styles.button}>
                <a>start tracking</a>
              </button>
            </div>
            <div className={styles.cards}>
              <h2>Latest screenshots</h2>
              <div className={styles.cards__container}>
                <div className={styles.card1}>
                  <div className={styles.card__badge}>
                    <p>01:00 pm</p>
                    <div className={styles.card__badge__container}>
                      <div className={styles.card__badge__bar}>
                        <div className={styles.card__badge__bar2}></div>
                      </div>
                      <div className={styles.card__badge__bar}>
                        <div className={styles.card__badge__bar2}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card2}>
                  <div className={styles.card__badge}>
                    <p>01:00 pm</p>
                    <div className={styles.card__badge__container}>
                      <div className={styles.card__badge__bar}>
                        <div className={styles.card__badge__bar2}></div>
                      </div>
                      <div className={styles.card__badge__bar}>
                        <div className={styles.card__badge__bar2}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card3}>
                  <div className={styles.card__badge}>
                    <p>01:00 pm</p>
                    <div className={styles.card__badge__container}>
                      <div className={styles.card__badge__bar}>
                        <div className={styles.card__badge__bar2}></div>
                      </div>
                      <div className={styles.card__badge__bar}>
                        <div className={styles.card__badge__bar2}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card4}>
                  <div className={styles.card__badge}>
                    <p>01:00 pm</p>
                    <div className={styles.card__badge__container}>
                      <div className={styles.card__badge__bar}>
                        <div className={styles.card__badge__bar2}></div>
                      </div>
                      <div className={styles.card__badge__bar}>
                        <div className={styles.card__badge__bar2}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col3}>
          <div>
            <img src={avatar} />
          </div>
          <h2 className={styles.col3__h2}>Hady Ayman</h2>
          <p className={styles.col3__p}>ui designer</p>
          <div>
            <div>
              <div className={styles.col3__badge}>
                <p>availability</p>
                <div className={styles.card__badge__rightbar}>
                  <div className={styles.card__badge__rightbar2}></div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.col3__badge}>
                <p>proficiency</p>
                <div className={styles.card__badge__rightbar}>
                  <div className={styles.card__badge__rightbar2}></div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.col3__badge}>
                <p>worked time</p>
                <div className={styles.card__badge__rightbar}>
                  <div className={styles.card__badge__rightbar2}></div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.col3__badge}>
                <p>creativity</p>
                <div className={styles.card__badge__rightbar}>
                  <div className={styles.card__badge__rightbar2}></div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.col3__badge}>
                <p>productivity</p>
                <div className={styles.card__badge__rightbar}>
                  <div className={styles.card__badge__rightbar2}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
