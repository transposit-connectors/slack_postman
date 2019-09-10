({ http_event }) => {
  const parsed_body = http_event.parsed_body;  
  console.log(JSON.parse(parsed_body.payload));
  let speedtext =
      "API speed test results (re-running):\n" +
      api.run("this.run_monitored_endpoints");
      api.run("this.post_to_slack", { msg: speedtext }, {});
  
  return {
    status_code: 200,
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/building/webhooks
 */