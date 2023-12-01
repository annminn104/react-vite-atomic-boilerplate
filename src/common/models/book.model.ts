import { EGenre, EGenreColor } from '../enums'
import { IBook, IReview } from '../interfaces'
import { Review } from './review.model'

export class Book {
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

  constructor(book: IBook) {
    this.id = book.id
    this.title = book.title
    this.author = book.author
    this.genre = book.genre
    this.publicationDate = new Date(book.publicationDate)
    this.language = book.language
    this.pageCount = book.pageCount
    this.publisher = book.publisher
    this.description = book.description
    this.coverImageUrl = book.coverImageUrl
    this.reviews = book.reviews ? book.reviews.map((review) => new Review(review)) : []
    this.averageRating = book.averageRating
    this.isAvailable = book.isAvailable
    this.isBestseller = book.isBestseller
    this.relatedBooks = book.relatedBooks ? book.relatedBooks.map((book) => new Book(book)) : []
    this.tags = book.tags
    this.likes = book.likes
    this.views = book.views
  }

  get dominantColor(): EGenreColor {
    const colorMapping: Record<EGenre, EGenreColor> = {
      [EGenre.Mystery]: EGenreColor.Mystery,
      [EGenre.ScienceFiction]: EGenreColor.ScienceFiction,
      [EGenre.Romance]: EGenreColor.Romance,
      [EGenre.Adventure]: EGenreColor.Adventure,
      [EGenre.Drama]: EGenreColor.Drama,
      [EGenre.Economics]: EGenreColor.Economics,
      [EGenre.Sports]: EGenreColor.Sports,
      [EGenre.ShortStory]: EGenreColor.ShortStory,
      [EGenre.Detective]: EGenreColor.Detective,
      [EGenre.Other]: EGenreColor.Other
    }

    return colorMapping[this.genre] || EGenreColor.Other
  }
}
