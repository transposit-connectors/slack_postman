({http_event}) => {
  
  setImmediate(() => {
    const parsed_body = http_event.parsed_body;
  console.log(parsed_body);
    const workspaceId = parsed_body.team_id;
    const userId = parsed_body.user_id;

    const outcome = parsed_body.payload.outcome;
    const build_url = parsed_body.payload.build_url;

    if (outcome === "fixed") {
        let speedtext =
            "API speed test results (for build: " + build_url + "):\n" +
            api.run("this.run_monitored_endpoints");

        api.run("this.post_to_slack", {
            msg: speedtext
        });
    }
  }
    return {
        status_code: 200
    }
}