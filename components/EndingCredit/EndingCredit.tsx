import React from 'react';
import styles from './EndingCredit.module.scss';

const EndingCreditContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fade}></div>
      <section className={styles.starWars}>
        <div className={styles.crawl}>
          <div className={styles.title}>
            <p>술담화 마셔보고서</p>
            <h1>기획: 개발팀</h1>
            <h1>디자인: 개발팀</h1>
            <h1>개발: 개발팀</h1>
          </div>

          <p></p>

          <p>
            During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate
            weapon, the DEATH STAR, an armored space station with enough power to destroy an entire
            planet.
          </p>

          <p>
            Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship,
            custodian of the stolen plans that can save her people and restore freedom to the
            galaxy….
          </p>
        </div>
      </section>
    </div>
  );
};

export default EndingCreditContainer;
