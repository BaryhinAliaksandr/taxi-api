import mongoose, { Schema } from 'mongoose';

export const DriverStatus = Object.freeze({
  ACTIVE: 1,
  INACTIVE: 2
});

const DriverSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 32
  },
  surname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 32
  },
  status: {
    type: Number,
    required: true,
    enum: Object.values(DriverStatus)
  },
  birthDate: {
    type: Date,
    required: true
  }
});

export const Driver = mongoose.model('Driver', DriverSchema);
