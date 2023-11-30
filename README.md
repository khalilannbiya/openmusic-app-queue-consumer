# openmusic-app-queue-consumer

A program that acts as a consumer in the message delivery architecture through a message broker

## Tech Stack
- **Server :** Nodejs, RabbitMQ, PostgreSQL

## Run Locally

Clone the project

```bash
  git clone https://github.com/khalilannbiya/openmusic-app-queue-consumer.git
```

Or Download ZIP

[Link](https://github.com/khalilannbiya/openmusic-app-queue-consumer/archive/refs/heads/main.zip)

Go to the project directory

```bash
  cd openmusic-app-queue-consumer
```

Install the package using the following command:
```bash
  pnpm i 
```

Copy and paste the .env file using the command:

```bash
  cp .env.example .env
```

Let's Configure the .env file

- For PGUSER to PGPORT, it's the PostgreSQL database configuration. Make sure PostgreSQL is installed on your local machine. You can follow these steps: https://www.w3schools.com/postgresql/postgresql_install.php. Ensure that the configuration in .env, specifically the variables PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT, matches the configuration in the .env of the producer project, in this case, the producer project is https://github.com/khalilannbiya/openmusic-app.git. Here's an example:
   ```bash
   PGUSER=developer // Make sure you have created the 'developer' user in PostgreSQL
   PGHOST=localhost // The host for PostgreSQL can vary depending on where the PostgreSQL server is hosted. If PostgreSQL is hosted on your local machine (localhost), you can use localhost or 127.0.0.1 as the host. However, if PostgreSQL is hosted on an external server or in the cloud, you should use the IP address or hostname of that server
   PGPASSWORD=veryhardpassword // Provide a strong password and make sure you remember it
   PGDATABASE=openmusicapp // Fill in the database you want to use and make sure the database has been created
   PGPORT=5432 // Also, make sure to check the port used by the PostgreSQL server (default is 5432)
  ```
- For SMTP_HOST to SMPT_PASSWORD are credentials from the Mailtrap SMTP server. Make sure you have created a Mailtrap account at https://mailtrap.io/register/signup. Then, check the SMTP server information we need. Here is how: https://help.mailtrap.io/article/109-getting-started-with-mailtrap-email-testing
- For RABBITMQ_SERVER, it is for configuring the Message Broker. In this case, Rabbit MQ is used. Make sure your machine already has Rabbit MQ installed. You can follow the installation guide here: [link](https://medium.com/geekculture/installing-rabbitmq-on-windows-4411f5114a84). Usually, if running locally, its content looks like this: 
  ```bash
  amqp://localhost
  ```

Since we are using a Message Broker, and this project is a consumer, don't forget to clone the project https://github.com/khalilannbiya/openmusic-app.git as a producer, then follow the installation steps in the project's repository. And, remember to run them simultaneously after setting up the projects to avoid any errors.

Make sure that the PostgreSQL, RabbitMQ servers are already running.

Run the server:
```bash
  node src/consumer.js
```

## Documentation

- [Nodejs](https://nodejs.org/en)
- [Rabbit MQ](https://www.rabbitmq.com/)
- [Mengapa Message Broker](https://medium.com/@acep.abdurohman90/mengapa-menggunakan-message-broker-c17453cb225e)

## Feedback

If you have any feedback, please reach out to us at syeichkhalil@gmail.com

