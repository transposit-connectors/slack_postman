/**
 * This operation is an example of a JavaScript operation deployed as a Webhook
 * and configured to work with Slack.
 *
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/building/webhooks
 */
({ http_event }) => {
  const parsed_body = JSON.parse(http_event.body);
  if (parsed_body.attachement[0].fallback.startsWith("Success")) {
     api.run('this.post_to_slack', )
  }
}