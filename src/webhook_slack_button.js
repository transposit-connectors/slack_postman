({http_event}) => {
    const parsed_body = http_event.parsed_body;

    const parsed_slack_response = JSON.parse(parsed_body.payload);
    const response_url = parsed_slack_response.response_url;
    console.log(parsed_slack_response);
  
    setImmediate(() => {

      const speedtext =
            "API speed test results (re-running):\n" + 
            api.run("this.run_monitored_endpoints");
   const body = api.run("this.response_body",{msg: speedtext})[0];
      body.thread_ts = parsed_slack_response.message.ts;
      api.run("slack_webhook.post_to_response_url", {
      post_body: body,
      response_url: response_url
    });
    });
     

    return {
        status_code: 200,
    };
}
