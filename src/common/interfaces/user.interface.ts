import { TRole } from '../types/role.type'
import { IBook } from './book.interface'

export interface IUser {
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
}
