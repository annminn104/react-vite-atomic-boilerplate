import { IUser } from '@common/interfaces'
import { IBook } from '../interfaces/book.interface'
import { TRole } from '../types/role.type'
import { Book } from './book.model'

export class User {
  id: string
  userName: string
  firstName: string
  lastName: string
  avatarUrl: string
  email: string
  phone: string
  birthday: Date
  address: string
  role: TRole
  books?: IBook[]
  authorBooks?: IBook[]

  constructor(user: IUser) {
    this.id = user.id
    this.userName = user.userName
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.avatarUrl = user.avatarUrl
    this.email = user.email
    this.phone = user.phone
    this.birthday = new Date(user.birthday)
    this.address = user.address
    this.role = user.role
    this.books = user.books ? user.books.map((book) => new Book(book)) : []
    this.authorBooks = user.authorBooks ? user.authorBooks.map((book) => new Book(book)) : []
  }

  get fullName(): string {
    return this.firstName + this.fullName
  }
}
