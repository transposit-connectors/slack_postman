({http_event}) => {
    const parsed_body = http_event.parsed_body;
  //  const response_url2 = http_event.parsed_body.response_url;

    const parsed_slack_response = JSON.parse(parsed_body.payload);
    const response_url = parsed_slack_response.response_url;
  
    setImmediate(() => {

      const speedtext =
            "API speed test results (re-running):\n" + 
            api.run("this.run_monitored_endpoints");
   const body = api.run("this.response_body",{msg: speedtext})[0];
 /*       let blockToPost = [{
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
            "value": "rerun2",
            "action_id": "rerunbutton2"
        }
    }];

        const body = {
        channel: env.get('channelName'),
        blocks: blockToPost,
        //replace_original: false, makes ephemeral
        as_user: true
      }; */
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
