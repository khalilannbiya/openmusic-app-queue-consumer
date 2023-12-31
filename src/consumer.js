import dotenv from "dotenv";
import amqp from "amqplib";
import PlaylistsService from "./PlaylistsService.js";
import MailSender from "./MailSender.js";
import Listener from "./listener.js";

dotenv.config();

const init = async () => {
  const playlistsService = new PlaylistsService();
  const mailSender = new MailSender();
  const listener = new Listener(playlistsService, mailSender);

  const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
  const channel = await connection.createChannel();

  await channel.assertQueue(process.env.RABBITMQ_QUEUE, {
    durable: true,
  });

  channel.consume(process.env.RABBITMQ_QUEUE, listener.listen, { noAck: true });
};

init();
