import {
  getAllVehiclesController,
  createVehicleController,
  retrieveVehicleController,
  updateVehicleController,
  deleteVehicleController
} from './controllers.js';
import express from 'express';

export const vehicleRouter = express.Router();

vehicleRouter
  .route('/')
  .get(getAllVehiclesController)
  .post(createVehicleController);
vehicleRouter
  .route('/:id')
  .get(retrieveVehicleController)
  .put(updateVehicleController)
  .delete(deleteVehicleController);
