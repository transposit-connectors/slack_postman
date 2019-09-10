({http_event}) => {
    const parsed_body = http_event.parsed_body;
    const parsed_slack_response = JSON.parse(parsed_body.payload);
    const response_url = parsed_slack_response.response_url;
  
  
    setImmediate(() => {
      const speedtext =
            "API speed test results (re-running):\n" +
            api.run("this.run_monitored_endpoints");
        let blockToPost = [{
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": speedText
        },
        "accessory": {
            "type": "button",
            "text": {
                "type": "plain_text",
                "text": "Re-run Postman"
            },
            "value": "rerun",
            "action_id": "rerunbutton"
        }
    }];
        const body = {
        channel: env.get('channelName'),
        blocks: blockToPost,
        as_user: true
      };
      api.run("slack_webhook.post_to_response_url", {
      post_body: body,
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
