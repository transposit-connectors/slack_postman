({http_event}) => {
    const parsed_body = http_event.parsed_body;
    const parsed_slack_response = JSON.parse(parsed_body.payload);
    const response_url = parsed_slack_response.response_url;
  
    setImmediate(() => {
      const speedtext =
            "API speed test results (re-running):\n" +
            api.run("this.run_monitored_endpoints");
      api.run("slack_webhook.post_to_response_url", {
      post_body: {
        text: speedtext
      },
      response_url: response_url
    });
    });
     
      /*
    if (parsed_slack_response.actions[0].action_id = "rerunbutton") {
        const speedtext =
            "API speed test results (re-running):\n" +
            api.run("this.run_monitored_endpoints");
        api.run("this.post_to_slack", {
            msg: speedtext
        }, {});
    }
    */

    return {
        status_code: 200,
    };
}
