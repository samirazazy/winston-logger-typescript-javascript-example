import winston, { addColors, createLogger, transports } from 'winston';

const { timestamp, combine, printf, errors, colorize } = winston.format;

// Define log levels to see or hide levels based on the running ENV.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
}

// if the server was run in development mode: show all the log levels,
// if it was run in production: show only warn and error messages.
const level = () => {
  const environment = process.env.NODE_ENV || 'development';
  const isDevelopment = environment === 'development';
  return isDevelopment ? 'debug' : 'warn';
}

// Define log levels color.
const logColors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'cyan'
}

// Link the colors with winston.
addColors(logColors);

// Define the format of the message.
const logFormat = printf(({ level, message, timestamp, stack }) => `${timestamp} ${level}: ${stack || message}`
);

// Define log format.
const format = combine(
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  colorize({ all: true }),
  errors({ stack: true }),
  logFormat
);

// Define the logger to log messages.
const Logger = createLogger({
  level: level(),
  levels,
  format,
  transports: [new transports.Console()]
});

export default Logger;


// To use logger

// 1
// import logger from '../libs/logger/index';

// 2
// Logger.error("error log");
// Logger.warn("warn log");
// Logger.info("info log");
// Logger.debug("debug log");
