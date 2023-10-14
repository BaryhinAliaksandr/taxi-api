import { BaseService } from '../base/services.js';
import { Driver } from './models.js';

export class DriverService extends BaseService {
  list = async () => {
    return await Driver.find()
      .limit(this.perPage)
      .skip(this.perPage * (this.page - 1))
      .sort({
        name: 'asc'
      })
      .then(async (result) => {
        this.count = await Driver.estimatedDocumentCount();
        return result;
      });
  };

  create = async (driverData) => {
    return await Driver.create(driverData);
  };
  retrieve = async (driverId) => {
    return await Driver.findById(driverId);
  };

  update = async (driverId, driverData) => {
    return await Driver.findByIdAndUpdate(driverId, driverData);
  };

  delete = async (driverId) => {
    return await Driver.findByIdAndDelete(driverId);
  };
}
