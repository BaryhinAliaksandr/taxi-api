import mongoose, { Schema } from 'mongoose';

export const VehicleStatus = Object.freeze({
  ACTIVE: 1,
  INACTIVE: 2
});

export const VehicleType = Object.freeze({
  ECO: 1,
  COMFORT: 2,
  BUSINESS: 3
});

const VehicleSchema = new Schema({
  regNumber: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 32
  },
  type: {
    type: Number,
    required: true,
    enum: Object.values(VehicleType)
  },
  status: {
    type: Number,
    required: true,
    enum: Object.values(VehicleStatus)
  },
  model: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 32
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 256
  }
});

export const Vehicle = mongoose.model('Vehicle', VehicleSchema);
