import { Document } from "mongoose"

export interface IDecal {
    _id?: any
    id?: any
    title: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IDecalDoc extends IDecal, Document {}
