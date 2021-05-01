import {createLogger, format, transports} from 'winston';

const {timestamp, combine, printf, errors} = format;

export default function developmentLogger() {
  const logFormat = printf(({level, message, timestamp, stack}) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });

  return createLogger({
    format: combine(
      format.colorize(), // To appropriately color the output of custom levels.
      timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      errors({stack: true}),
      logFormat
    ),
    transports: [new transports.Console()],
  });
}
