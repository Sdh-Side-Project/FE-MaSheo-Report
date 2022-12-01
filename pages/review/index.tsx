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
    <Layout>
      <ReviewComponent data={reviewData} />
    </Layout>
  );
};

export default Review;
