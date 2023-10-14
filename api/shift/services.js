import { BaseService } from '../base/services.js';
import { Shift, ShiftStatus } from './models.js';


export class ShiftService extends BaseService {
  list = async () => {
    return await Shift.find(
      // return only active or not started shitfs
      {
        endDate: {
          $gte: new Date()
        }
      }
    )
      .limit(this.perPage)
      .skip(this.perPage * (this.page - 1))
      .sort({
        endDate: 'asc'
      })
      .then(async (result) => {
        this.count = await Shift.estimatedDocumentCount();
        return result;
      });
  };

  create = async (shiftData) => {
    return await Shift.create(shiftData);
  };

  retrieve = async (shiftId) => {
    return await Shift.findById(shiftId);
  };

  update = async (shiftId, shiftData) => {
    return await Shift.findByIdAndUpdate(shiftId, shiftData);
  };

  delete = async (shiftId) => {
    return await Shift.findByIdAndDelete(shiftId);
  };
}


export const produceShifts = async (producer) => {
  const validShifts = await Shift.find(
    {
      endDate: {
        $gte: new Date()
      },
      startDate: {
        $lte: new Date()
      },
      status: ShiftStatus.IDLE,
    }
  )
    .sort({
      endDate: 'asc'
    })
    .then((result) => result);
  
  try {
    await producer.connect();

    validShifts.forEach(async (shift) => {
      await producer.send({
        topic: "shifts-topic-main",
        messages: [{ value: JSON.stringify(shift) }],
        timeout: 1000000,
        acks: 1,
      });
      
      console.log(`Sent to Kafka: ${JSON.stringify(shift)}`)
      shift.status = ShiftStatus.PENDING;
      shift.save(); // maybe bulk save ?
    });

  } catch (error) {
    console.error('Error sending message to Kafka:', error);
  } finally {
    await producer.disconnect();
  }
}
