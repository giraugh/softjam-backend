import { Schema, Document, Model, model } from 'mongoose'
import { IEvent } from '../interfaces/Event'

export interface IEventModel extends IEvent, Document {}

export let EventSchema = new Schema({
  title: String,
  date: Date,
  price: Number
})

export const Event = model<IEventModel>('Event', EventSchema)