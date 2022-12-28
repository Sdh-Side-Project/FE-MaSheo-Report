import Script from 'next/script';
import React from 'react';
import styles from './EndingCredit.module.scss';

const EndingCreditContainer = () => {
  return (
    <>
      <audio
        preload="auto"
        autoPlay={true}
        src={'https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg'}
      >
        <source
          src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg"
          type="audio/ogg"
        />
        <source
          src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div className={styles.container}>
        <div className={styles.fade}></div>
        <section className={styles.starWars}>
          <div className={styles.crawl}>
            <div className={styles.title}>
              <div className="flex justify-center font-bold text-9xl">
                <div className="text-gray-300">술</div>
                <div className="text-primary">담</div>
                <div className="text-blue-300">화</div>
              </div>
              <div className="mt-10 font-medium text-center text-white text-7xl">마셔보고서</div>
            </div>
            <div className="mb-10 text-4xl text-center">
              <div className="mb-5">기획: 개발팀</div>
              <div className="mb-5">디자인: 개발팀</div>
              <div>개발: 개발팀</div>
            </div>
            <div className="leading-loose">
              <p className="mb-10">개발팀이 준비한 선물 어떠셨나요?</p>
              <p className="mb-10">쟤네들 퇴근 후에 매일 모여서 무슨 얘기를 하나 궁금하셨죠?</p>
              <p className="mb-10">
                바로 이걸 보여주기 위해 약 두 달 반의 시간동안 매 주 2번씩 모여서 조금씩 만들어
                보았어요!
              </p>
              <p className="mb-10">물론 기획, 디자이너 없이 저희끼리 만들어서 많이 엉성해요.</p>
              <p className="mb-10">
                하지만 하반기부터 힘들어진 상황 속 여러 분들에게 작은 서프라이즈를 만들고 싶은
                생각으로
              </p>
              <p className="mb-10">개발팀이 뭉쳐 퇴근 후에 조금씩 조금씩 만든 결과물이에요!</p>
              <p className="mb-10">
                재밌게 봐주셨으면 좋겠고 다가오는 23년도 우리 다같이 화이팅 해보아요!
              </p>
              <p className="mb-20">사랑해요 술담화!</p>
              <p className="text-center text-9xl">-끝-</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EndingCreditContainer;
