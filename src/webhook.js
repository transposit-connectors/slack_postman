({ http_event }) => {
  const parsed_body = http_event.parsed_body;  console.log(parsed_body);
  console.log(parsed_body.challenge);
  if (parsed_body.challenge) {
    return { 
      status_code: 200,
      headers: {'Content-type' : "text/plain" },
      body: parsed_body.challenge
           };
  }
  
  // find most recent message in the channel
  // add a message to it
  // then run a postman script
  // then provide a 're-run' button
  // then write up readme
  
  return { 
      status_code: 200,
      headers: {'Content-type' : "text/plain" },
      body: "abc"
           };
  console.log("here");
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
