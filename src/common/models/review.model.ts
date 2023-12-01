import { IReview, IReviewReply } from '../interfaces'
import { ReviewReply } from './review-reply.model'

export class Review {
  userId: string
  rating: number
  comment: string
  date: Date
  likes: number
  replies: IReviewReply[]

  constructor(review: IReview) {
    this.userId = review.userId
    this.rating = review.rating
    this.comment = review.comment
    this.date = new Date(review.date)
    this.likes = review.likes
    this.replies = review.replies ? review.replies.map((reply) => new ReviewReply(reply)) : []
  }
}
