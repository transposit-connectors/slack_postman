(params) => {
  let postText = "API benchmarking";
  // post to slack
  let blockToPost = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "Hello"
        }
    }
	];
  
  blockToPost = blockToPost.concat(params.sections);
  const body = {
    channel: "yokotestchannel",
    text: "hello",
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
