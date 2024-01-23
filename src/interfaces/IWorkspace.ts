import { IBoard } from './IBoard'

export interface IWorkspace {
  id: number
  title: string
  description: string
  boards?: IBoard[]
}