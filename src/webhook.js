({ http_event }) => {
  const parsed_body = http_event.parsed_body;  
  console.log(parsed_body);
  
  // find most recent message in the channel
  // add a message to it
  // then run a postman script
  // then provide a 're-run' button
  // then write up readme
  
  const outcome = parsed_body.payload.outcome;
  const build_url = parsed_body.payload.build_url;
  
  if (outcome === "fixed") {
    let speedtext =
      "API speed test results (for build: "+build_url+"):\n" +
      api.run("this.run_monitored_endpoints");
    
    api.run("this.post_to_slack", { msg: speedtext }, {});
  }
  /*
    return {
      status_code: 200,
      headers: {'Content-type' : "text/plain" },
      body: parsed_body.challenge
           };
  */
  return {
    status_code: 200
  }
}
