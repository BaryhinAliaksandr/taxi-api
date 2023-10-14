import { VehicleService } from './services.js';

export const getAllVehiclesController = async (request, response) => {
  const srv = new VehicleService(request);

  try {
    const vehicles = await srv.list();
    response.json({
      data: vehicles,
      meta: { page: srv.page, perPage: srv.perPage, count: srv.count },
      status: 200
    });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const createVehicleController = async (request, response) => {
  const srv = new VehicleService(request);

  try {
    const vehicle = await srv.create(request.body);
    response.json({ data: vehicle, status: 201 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const retrieveVehicleController = async (request, response) => {
  const srv = new VehicleService(request);

  try {
    const vehicle = await srv.retrieve(request.params.id);
    response.json({ data: vehicle, status: 200 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const updateVehicleController = async (request, response) => {
  const srv = new VehicleService(request);

  try {
    const vehicle = await srv.update(request.params.id, request.body);
    response.json({ data: vehicle, status: 200 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const deleteVehicleController = async (request, response) => {
  const srv = new VehicleService(request);

  try {
    const vehicle = await srv.delete(request.params.id);
    response.json({ data: vehicle, status: 200 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};
