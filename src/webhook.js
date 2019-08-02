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
  let text = parsed_body.attachments[0].text;
  
  if (text.startsWith("SUCCESS")) {
    let speedtext = text + "\n " + "API speed test results: \n" + api.run('this.run_monitored_endpoints');
     api.run('this.post_to_slack', {msg: speedtext});
  } else {
    api.run('this.post_to_slack', {msg: text});
  }
}