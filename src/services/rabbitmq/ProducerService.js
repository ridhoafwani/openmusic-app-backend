const amqp = require('amqplib');
const config = require('../../utils/config');

const ProducerService = {
  sendMessage: async (queue, message) => {
    const connections = await amqp.connect(config.rabbitMq.server);
    const channel = await connections.createChannel();

    channel.assertQueue(queue, {
      durable: true,
    });

    channel.sendToQueue(queue, Buffer.from(message));

    setTimeout(() => {
      connections.close();
    }, 1000);
  },

};

module.exports = ProducerService;
