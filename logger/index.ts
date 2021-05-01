
import developmentLogger from './development-logger';
import productionLogger from './production-logger';

let logger: any;

process.env.NODE_ENV === 'production'
  ? logger = productionLogger()
  : logger = developmentLogger();

export default logger;



// Logging Levels
// { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }

// Using Logging Levels
// console.log('console.log') // default logging level
// logger.error('error.log') or logger.log('error', 'error.log')
// logger.warn('warn.log') or logger.log('warn', 'warn.log')
// logger.info('info.log') or logger.log('info', 'info.log')
// logger.debug('info.log')
// logger.error(new Error('Error Stack log'))
