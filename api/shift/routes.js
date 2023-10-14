import {
  getAllShiftsController,
  createShiftController,
  retrieveShiftController,
  updateShiftController,
  deleteShiftController
} from './controllers.js';
import express from 'express';

export const shiftRouter = express.Router();

shiftRouter.route('/').get(getAllShiftsController).post(createShiftController);
shiftRouter
  .route('/:id')
  .get(retrieveShiftController)
  .put(updateShiftController)
  .delete(deleteShiftController);
