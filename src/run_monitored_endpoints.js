(params) => {
  const _ = require("underscore.js");
  const monitorID = env.get('monitorID');
  let result = api.run('postman.run_monitor', {id: monitorID})[0];
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