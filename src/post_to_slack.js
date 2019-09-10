(params) => {
  // post to slack
  let blockToPost = 
[
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": params.msg
		},
		"accessory": {
			"type": "button",
			"text": {
				"type": "plain_text",
				"text": "Click Me"
			},
			"value": "click_me_123",
			"action_id": "button"
		}
	},
	{
		"type": "actions",
		"block_id": "actionblock789",
		"elements": [
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Link Button"
				},
				"url": "https://api.slack.com/block-kit"
			}
		]
	}
];
  
  const body = {
    channel: "general",
    text: "Hello! Your API performance test results are ready.",
    blocks: blockToPost,
    as_user: "false",
    username: "transposit_bot"
  };
  let result = api.run("slack.post_chat_message", {
    $body: JSON.stringify(body)
  });
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */
