({ http_event }) => {
  const parsed_body = http_event.parsed_body;
  if (parsed_body.challenge) {
    return parsed_body.challenge;
  }
  console.log(parsed_body);
  let text = parsed_body.attachments[0].text;

  if (text.startsWith("SUCCESS")) {
    let speedtext =
      text +
      "\n " +
      "API speed test results: \n" +
      api.run("this.run_monitored_endpoints");
    
    api.run("this.post_to_slack", { msg: speedtext });
  } else {
    api.run("this.post_to_slack", { msg: text });
  }
}
