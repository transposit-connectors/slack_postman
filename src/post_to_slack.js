(params) => {
    const body = api.run("this.response_body",{msg: params.msg});
    let result = api.run("slack.post_chat_message", {
        $body: JSON.stringify(body)
    });
}