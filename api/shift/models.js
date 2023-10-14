import mongoose, { Schema } from 'mongoose';

export const ShiftStatus = Object.freeze({
  IDLE: 1,
  PENDING: 2,
  ACTIVE: 3,
  FINISHED: 4
});

const ShiftSchema = new Schema({
  driverId: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 64
  },
  vehicleId: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 64
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: Number,
    default: ShiftStatus.IDLE,
    enum: Object.values(ShiftStatus)
  }
});

export const Shift = mongoose.model('Shift', ShiftSchema);
