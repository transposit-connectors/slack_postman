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
        channel: "general",
        text: "Hello! Your API performance test results are ready.",
        blocks: blockToPost,
        as_user: true
    };
    let result = api.run("slack.post_chat_message", {
        $body: JSON.stringify(body)
    });
}