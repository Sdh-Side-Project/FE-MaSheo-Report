import { useEffect, useState } from 'react'
import ReviewComponent from '../../components/review/ReviewComponent'

const Review = () => {
  const [showReview, setShowReview] = useState(false)

  useEffect(() => {
    setShowReview(true)
  }, [])

  if (!showReview) return null

  return <ReviewComponent />
}

export default Review
