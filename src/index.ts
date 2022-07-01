import * as tl from 'azure-pipelines-task-lib';

/**
 * An extension logger object can be used on 4 levels,
 * the lowest level is debug that only displays messages if system.debug is enabled
 * in the pipeline. Info displays plain messages,
 * warning shows warnings and error shows errors in the pipeline output.
 */
export interface ExtensionLogger {
  info: (message: string) => void;
  warning: (message: string) => void;
  error: (message: string) => void;
  debug: (message: string) => void;
}

/**
 * Create an ExtensionLogger object that contains info/debug/warning/error
 * methods to abstract logging away from pipeline-specific methods and prepend
 * the name of a component/file to the log message.
 *
 * const logger = createLogger('test');
 * logger.info('hello');
 *
 * Would print the message '[test]: hello' to the console.
 *
 * @param componentName The name of the logger that will be prepended to messages
 */
export const createLogger = (componentName: string): ExtensionLogger => ({
  // eslint-disable-next-line no-console
  info: (message: string) => console.log(`[${componentName}]:`, message),
  debug: (message: string) => tl.debug(`[${componentName}]: ${message}`),
  warning: (message: string) => tl.warning(`[${componentName}]: ${message}`),
  error: (message: string) => tl.error(`[${componentName}]: ${message}`),
});
