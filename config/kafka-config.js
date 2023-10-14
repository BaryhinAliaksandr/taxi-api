import { Kafka } from 'kafkajs';
import { produceShifts } from '../api/shift/services.js';


export const kafka = new Kafka({
  clientId: 'taxi-api',
  brokers: ['kafka:9092']
});
const admin = kafka.admin()
const producer = kafka.producer();


const createTopics = async () => {
  await admin.connect()
  const lst = await admin.listTopics();

  await admin.createTopics({
    topics: [{topic: "shifts-topic-main"}],
})
  const lst1 = await admin.listTopics();

  await admin.disconnect()
}

const startProducer = async () => {
  await createTopics();
  const interval = setInterval(() => produceShifts(producer), 5000);
}

startProducer();

// Handle process exit to gracefully disconnect the producer
process.on('exit', () => {
    producer.disconnect();
  });
  
  // Handle uncaught exceptions
  process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error);
    producer.disconnect().finally(() => process.exit(1));
  });
  
  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled promise rejection:', reason);
    producer.disconnect().finally(() => process.exit(1));
  });
