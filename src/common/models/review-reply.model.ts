import { IReviewReply } from '../interfaces'

export class ReviewReply {
  userId: string
  comment: string
  date: Date
  likes: number

  constructor(reply: IReviewReply) {
    this.userId = reply.userId
    this.comment = reply.comment
    this.date = new Date(reply.date)
    this.likes = reply.likes
  }
}
