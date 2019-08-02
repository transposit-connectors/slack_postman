/**
 * This operation is an example of a JavaScript operation deployed as a Webhook
 * and configured to work with Slack.
 *
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/building/webhooks
 */
({ http_event }) => {
  const parsed_body = http_event.parsed_body;
  console.log(parsed_body);
  let text = parsed_body.attachements[0].text;
  if (text.startsWith("SUCCESS")) {
     setImmediate(() => {
       let 
     });
     api.run('this.post_to_slack', {msg: JSON.stringify(parsed_body)});
  } else {
    api.run('this.post_to_slack', {msg: text});
  }
}