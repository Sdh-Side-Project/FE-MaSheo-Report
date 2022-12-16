import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import ReviewComponent from '../../components/review/ReviewComponent';
import getSwrAuthResult from '../../utils/getSwrAuthResult';

const Review = () => {
  const { data, error } = getSwrAuthResult('review');
  if (error || !data) {
    return <></>;
  }

  const { review } = data;

  const [showReview, setShowReview] = useState(false);
  const [reviewData, setReviewData] = useState(review);

  const [footerMessage, setFooterMessage] = useState('올 한해 나는 얼만큼 리뷰를 남겼을까요?');

  useEffect(() => {
    setShowReview(true);
    setTimeout(() => {
      getFooterMessage();
    }, 3000);
  }, []);

  const getFooterMessage = () => {
    if (30 > reviewData.rate && reviewData.rate >= 0) {
      return setFooterMessage('2023년 새해, 술담화에 리뷰 꼬옥 남겨주기 약속! 🤙');
    }
    if (60 > reviewData.rate && reviewData.rate >= 30) {
      return setFooterMessage(
        '세심하고 진정성 있는 리뷰를 꼼꼼히 남기는 당신! 내년에는 술담화의 리뷰왕이 되어주세요 🤝'
      );
    }
    if (100 >= reviewData.rate && reviewData.rate >= 60) {
      return setFooterMessage(
        '술담화의 발전에 큰 힘이 되는 당신께 감사합니다 💕 우리 내년에도 이대로 쭉 함께해요!'
      );
    }
  };

  if (!showReview) return null;

  return (
    <Layout
      user={'개발팀'}
      firstLine={'주문 대비'}
      keyword={'작성한 리뷰 비율'}
      closingLine={'은?'}
      footerMessage={footerMessage}
      footerImgUrl={'/images/layout/namkyung.png'}
      footerImgName="남경"
    >
      <ReviewComponent data={reviewData} />
    </Layout>
  );
};

export default Review;
