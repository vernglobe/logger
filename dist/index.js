"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel[LoggingLevel["Debug"] = 20] = "Debug";
    LoggingLevel[LoggingLevel["Info"] = 30] = "Info";
    LoggingLevel[LoggingLevel["Warn"] = 40] = "Warn";
    LoggingLevel[LoggingLevel["Error"] = 50] = "Error";
})(LoggingLevel || (LoggingLevel = {}));
const logMessage = (msg, level, name) => {
    msg.name = name;
    msg.level = level;
    const msgText = JSON.stringify(msg);
    switch (level) {
        case LoggingLevel.Error:
            console.error(msgText);
            break;
        case LoggingLevel.Warn:
            console.warn(msgText);
            break;
        case LoggingLevel.Info:
            console.log(msgText);
            break;
        case LoggingLevel.Debug:
            console.debug(msgText);
            break;
        default:
            console.log(msgText);
            break;
    }
};
const objectifyMessage = (msg) => {
    return typeof msg === "object" ? msg : { message: msg };
};
const logger = (options) => {
    const name = options.name ? options.name : process.env.AWS_LAMBDA_NAME;
    const level = options.level ? options.level : process.env.LOGGING_LEVEL || 50;
    const logger = { name, level };
    logger.debug =
        logger.level > LoggingLevel.Debug
            ? (debug) => { }
            : (debug) => {
                logMessage(objectifyMessage(debug), LoggingLevel.Debug, name);
            };
    logger.info =
        logger.level > LoggingLevel.Info
            ? (info) => { }
            : (info) => {
                logMessage(objectifyMessage(info), LoggingLevel.Info, name);
            };
    logger.warn =
        logger.level > LoggingLevel.Warn
            ? (warn) => { }
            : (warn) => {
                logMessage(objectifyMessage(warn), LoggingLevel.Warn, name);
            };
    logger.error =
        logger.level > LoggingLevel.Error
            ? (error) => { }
            : (error) => {
                logMessage(objectifyMessage(error), LoggingLevel.Error, name);
            };
    return logger;
};
exports.default = logger;
