import * as tl from 'azure-pipelines-task-lib';
import { createLogger } from './index';

describe('createLogger', () => {
  describe('info', () => {
    const messages = [
      { className: 'Hello World Plugin', message: 'Hello World' },
      { className: 'Azure Plugin', message: 'What' },
    ];

    messages.forEach(({ className, message }) => {
      it(`correctly logs message '${message}´ in class ${className}`, () => {
        // Arrange
        jest.spyOn(console, 'log');

        const logger = createLogger(className);

        // Act
        logger.info(message);

        // Assert
        // eslint-disable-next-line no-console
        expect(console.log).toBeCalledWith(`[${className}]:`, message);
      });
    });
  });

  describe('error', () => {
    const messages = [
      { className: 'Hello World Plugin', message: 'Hello World' },
      { className: 'Azure Plugin', message: 'What' },
    ];

    messages.forEach(({ className, message }) => {
      it(`correctly logs message '${message}´ in class ${className}`, () => {
        // Arrange
        jest.spyOn(tl, 'error');

        const logger = createLogger(className);

        // Act
        logger.error(message);

        // Assert
        // eslint-disable-next-line no-console
        expect(tl.error).toBeCalledWith(`[${className}]: ${message}`);
      });
    });
  });

  describe('debug', () => {
    const messages = [
      { className: 'Hello World Plugin', message: 'Hello World' },
      { className: 'Azure Plugin', message: 'What' },
    ];

    messages.forEach(({ className, message }) => {
      it(`correctly logs message '${message}´ in class ${className}`, () => {
        // Arrange
        jest.spyOn(tl, 'debug');

        const logger = createLogger(className);

        // Act
        logger.debug(message);

        // Assert
        expect(tl.debug).toBeCalledWith(`[${className}]: ${message}`);
      });
    });
  });

  describe('warning', () => {
    const messages = [
      { className: 'Hello World Plugin', message: 'Hello World' },
      { className: 'Azure Plugin', message: 'What' },
    ];

    messages.forEach(({ className, message }) => {
      it(`correctly logs message '${message}´ in class ${className}`, () => {
        // Arrange
        jest.spyOn(tl, 'warning');

        const logger = createLogger(className);

        // Act
        logger.warning(message);

        // Assert
        // eslint-disable-next-line no-console
        expect(tl.warning).toBeCalledWith(`[${className}]: ${message}`);
      });
    });
  });
});
