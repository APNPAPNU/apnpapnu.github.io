export const Logger = {
  create: logName => ({
    error(...args) {
      console.error(`[${logName}]`, ...args);
    },

    logVerbose(...args) {
      console.log(`[${logName}]`, ...args);
    }
  })
};
