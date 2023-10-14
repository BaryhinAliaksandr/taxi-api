import { ShiftService } from './services.js';

export const getAllShiftsController = async (request, response) => {
  const srv = new ShiftService(request);

  try {
    const shifts = await srv.list();
    response.json({
      data: shifts,
      meta: { page: srv.page, perPage: srv.perPage, count: srv.count },
      status: 200
    });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const createShiftController = async (request, response) => {
  const srv = new ShiftService(request);

  try {
    const shift = await srv.create(request.body);
    response.json({ data: shift, status: 201 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const retrieveShiftController = async (request, response) => {
  const srv = new ShiftService(request);

  try {
    const shift = await srv.retrieve(request.params.id);
    response.json({ data: shift, status: 200 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const updateShiftController = async (request, response) => {
  const srv = new ShiftService(request);

  try {
    const shift = await srv.update(request.params.id, request.body);
    response.json({ data: shift, status: 200 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};

export const deleteShiftController = async (request, response) => {
  const srv = new ShiftService(request);

  try {
    const shift = await srv.delete(request.params.id);
    response.json({ data: shift, status: 200 });
  } catch (err) {
    response.json({ error: err.message, status: 500 });
  }
};
