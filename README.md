# Usage
import Logger from "@vernglobe/logger";

```ts
Logger.info("logging the information");
Logger.debug("logging the debug");
Logger.error("logging the error");
Logger.warn("logging the warning");


Logger.info(`Context: ${JSON.stringify(context, null, 2)}`);
Logger.debug(`Context: ${JSON.stringify(context, null, 2)}`);
Logger.error(`Context: ${JSON.stringify(context, null, 2)}`);
Logger.warn(`Context: ${JSON.stringify(context, null, 2)}`);


Logger.info({ msg });
Logger.debug({ msg });
Logger.error({ msg });
Logger.warn({ msg });
```