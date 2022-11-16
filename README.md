# Usage

```ts
import Logger from "@vernglobe/logger";

const logger = new Logger("packageOrProjectName");
logger.info("logging the information");
logger.debug("logging the debug");
logger.error("logging the error");
logger.warn("logging the warning");


logger.info(`Context: ${JSON.stringify(context, null, 2)}`);
logger.debug(`Context: ${JSON.stringify(context, null, 2)}`);
logger.error(`Context: ${JSON.stringify(context, null, 2)}`);
logger.warn(`Context: ${JSON.stringify(context, null, 2)}`);


logger.info({ msg });
logger.debug({ msg });
logger.error({ msg });
logger.warn({ msg });
```