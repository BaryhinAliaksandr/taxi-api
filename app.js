import express from 'express';
import mongoose from 'mongoose';
import { driverRouter } from './api/driver/routes.js';
import { vehicleRouter } from './api/vehicle/routes.js';
import { shiftRouter } from './api/shift/routes.js';
const app = express();

const PORT = process.env.APP_PORT || 3222;

//middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//connect to DB
mongoose
  .connect(
    process.env.MONGODB_URI ||
      'mongodb://root:root@mongo/taxi-db?authSource=admin',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .catch((err) => console.log(err));

// setup routes
app.use('/api/drivers', driverRouter);
app.use('/api/vehicles', vehicleRouter);
app.use('/api/shifts', shiftRouter);

export default app;
