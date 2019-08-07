(params) => {
  const _ = require("underscore.js");
  const monitorId = '1e9b9610-4eed-4cc0-8094-ef6be545c61b';
  let result = api.run('postman.run_monitor', {id: monitorId})[0];
  let assertions = result.run.stats.assertions;
  let failedText = assertions.failed + " assertions failed.";
  let executions = result.run.executions;
  let speedText = "";
  
  _.each(executions, (e) => {
    speedText = speedText + `${e.item.name} took *${e.response.responseTime}ms* \n`;
  });
  
  return speedText;
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */