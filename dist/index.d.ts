export default class Logger {
  name: string;

  constructor(name: string);

  debug(debug: any): void;

  info(info: any): void;

  warn(warn: any): void;

  error(error: any): void;
}
