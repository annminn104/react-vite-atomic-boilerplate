export interface IReview {
  userId: string
  rating: number
  comment: string
  date: Date
  likes: number
  replies: IReviewReply[]
}

export interface IReviewReply extends Pick<IReview, 'userId' | 'comment' | 'date' | 'likes'> {}
