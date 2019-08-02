(params) => {
  const _ = require("underscore.js");
  const monitorId = '1e9b4b35-7bb0-4210-ab01-d2aa8c684082';
  let result = api.run('postman.run_monitor', {id: monitorId})[0];
  let assertions = result.run.stats.assertions;
  let failedText = assertions.failed + " assertions failed.";
  let executions = result.run.executions;
  let speedText = "";
  
  _.each(executions, (e) => {
    speedText = speedText + `${e.item.name} took *${e.response.responseTime}ms* \n`;
  });
  return speedText
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */