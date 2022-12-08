import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import ReviewComponent from '../../components/review/ReviewComponent';
import axios from 'axios';
import getSwrAuthResult from '../../utils/getSwrAuthResult';

const Review = () => {
  const { data, error } = getSwrAuthResult('review');
  if (error || !data) {
    return <></>;
  }

  const { review } = data;

  const [showReview, setShowReview] = useState(false);
  const [reviewData, setReviewData] = useState(review);

  useEffect(() => {
    setShowReview(true);
  }, []);

  if (!showReview) return null;

  return (
    <Layout
      user={'개발팀'}
      firstLine={'주문 대비'}
      keyword={'작성한 리뷰 비율'}
      closingLine={'은?'}
      footerMessage={``}
      footerImgUrl={'/images/layout/namkyung.png'}
      footerImgName="남경"
    >
      <ReviewComponent data={reviewData} />
    </Layout>
  );
};

export default Review;
