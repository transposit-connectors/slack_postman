({http_event}) => {
    const parsed_body = http_event.parsed_body;
    const parsed_slack_response = JSON.parse(parsed_body.payload);
    const response_url = parsed_slack_response.response_url;
    console.log("here");
  
    setImmediate(() => {
      console.log("here2");
      const speedtext =
            "API speed test results (re-running):\n" + "";
            //api.run("this.run_monitored_endpoints");
      console.log("here2.5");
        let blockToPost = [{
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": speedtext
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
      console.log("here2.6");
        const body = {
        channel: 'general',
        blocks: blockToPost,
        as_user: true
      };
      console.log("here3");
      api.run("slack_webhook.post_to_response_url", {
      post_body: body,
      response_url: response_url
    });
      console.log("here4");
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
