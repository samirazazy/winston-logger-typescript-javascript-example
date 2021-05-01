import {createLogger, format, transports} from 'winston';

const {timestamp, combine, errors, json} = format;

export default function productionLogger() {
  return createLogger({
    level: 'debug', // to use logger console in debuging mood
    format: combine(
      timestamp(), // To get the exact timestamp with the time zone
      errors({stack: true}),
      json(),
    ),
    defaultMeta: {service: 'service-name'}, // To know from which a service the logs are coming from. in case multiple microservices
    transports: [new transports.Console()],
  });
}

