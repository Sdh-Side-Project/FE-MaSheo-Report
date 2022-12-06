import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import ReviewComponent from '../../components/review/ReviewComponent';
import axios from 'axios';

const Review = () => {
  const [showReview, setShowReview] = useState(false);
  const [reviewData, setReviewData] = useState({});

  useEffect(() => {
    setShowReview(true);
  }, []);

  useEffect(() => {
    const getLikedTasteList = async () => {
      try {
        const response = await axios(`${process.env.NEXT_PUBLIC_API}/masheo/review?userId=120`);
        setReviewData(response.data.data.review);
      } catch (error) {
        console.error(error);
      }
    };
    getLikedTasteList();
  }, []);

  if (!showReview) return null;

  return (
    <Layout
      user={'개발팀'}
      firstLine={'주문 대비'}
      keyword={'작성한 리뷰 비율'}
      closingLine={'은?'}
      footerMessage={``}
    >
      <ReviewComponent data={reviewData} />
    </Layout>
  );
};

export default Review;
