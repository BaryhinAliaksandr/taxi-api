import { BaseService } from '../base/services.js';
import { Vehicle } from './models.js';

export class VehicleService extends BaseService {
  list = async () => {
    return await Vehicle.find()
      .limit(this.perPage)
      .skip(this.perPage * (this.page - 1))
      .sort({
        regNumber: 'asc'
      })
      .then(async (result) => {
        this.count = await Vehicle.estimatedDocumentCount();
        return result;
      });
  };

  create = async (vehicleData) => {
    return await Vehicle.create(vehicleData);
  };
  retrieve = async (vehicleId) => {
    return await Vehicle.findById(vehicleId);
  };

  update = async (vehicleId, vehicleData) => {
    return await Vehicle.findByIdAndUpdate(vehicleId, vehicleData);
  };

  delete = async (vehicleId) => {
    return await Vehicle.findByIdAndDelete(vehicleId);
  };
}
