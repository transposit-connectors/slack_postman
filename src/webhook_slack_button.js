({http_event}) => {
    const parsed_body = http_event.parsed_body;

    const parsed_slack_response = JSON.parse(parsed_body.payload);
    const response_url = parsed_slack_response.response_url;
  
      const speedtext =
            "API speed test results (re-running):\n" + 
            api.run("this.run_monitored_endpoints");
   const body = api.run("this.response_body",{msg: speedtext, button: false})[0];
      body.thread_ts = parsed_slack_response.message.ts;
      console.log(body);
  // async code didn't let us thread?
   let result = api.run("slack.post_chat_message", {
        $body: JSON.stringify(body)
    });

    return {
        status_code: 200,
    };
}
