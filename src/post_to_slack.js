(params) => {
  let postText = "API benchmarking";
  // post to slack
  let blockToPost = [{
      "type": "section",
      "text": {
          "type": "mrkdwn",
          "text": params.msg
      }
    }];
  
  const body = {
    channel: "yokotestchannel",
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
