import { handleServerError } from '../base/helpers.js';
import { DriverService } from './services.js';

export const getAllDriversController = async (request, response) => {
  const srv = new DriverService(request);

  try {
    const drivers = await srv.list();
    response.json({
      data: drivers,
      meta: { page: srv.page, perPage: srv.perPage, count: srv.count },
      status: 200
    });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const createDriverController = async (request, response) => {
  const srv = new DriverService(request);

  try {
    const driver = await srv.create(request.body);
    response.json({ data: driver, status: 201 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const retrieveDriverController = async (request, response) => {
  const srv = new DriverService(request);

  try {
    const driver = await srv.retrieve(request.params.id);
    response.json({ data: driver, status: 200 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const updateDriverController = async (request, response) => {
  const srv = new DriverService(request);

  try {
    const driver = await srv.update(request.params.id, request.body);
    response.json({ data: driver, status: 200 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const deleteDriverController = async (request, response) => {
  const srv = new DriverService(request);

  try {
    const driver = await srv.delete(request.params.id);
    response.json({ data: driver, status: 200 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};
