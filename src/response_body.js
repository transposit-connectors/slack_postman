(params) => {
     let blockToPost = [{
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": params.msg
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
  console.log("here in response");
  return body;
}