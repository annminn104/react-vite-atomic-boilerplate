import { EGenre } from '../enums'
import { IReview } from './review.interface'

export interface IBook {
  id: string
  title: string
  author: string
  genre: EGenre
  publicationDate: Date
  language: string
  pageCount: number
  publisher: string
  description: string
  coverImageUrl: string
  reviews: IReview[]
  averageRating: number
  isAvailable: boolean
  isBestseller: boolean
  relatedBooks: IBook[]
  tags: string[]
  likes: number
  views: number
}
