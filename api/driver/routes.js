import {
  getAllDriversController,
  createDriverController,
  retrieveDriverController,
  updateDriverController,
  deleteDriverController
} from './controllers.js';
import express from 'express';

export const driverRouter = express.Router();

driverRouter
  .route('/')
  .get(getAllDriversController)
  .post(createDriverController);
driverRouter
  .route('/:id')
  .get(retrieveDriverController)
  .put(updateDriverController)
  .delete(deleteDriverController);
