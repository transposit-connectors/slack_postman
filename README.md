# Slack Postman

This application hooks into your CircleCI configuration and will run a Postman monitor after a successful build. A Slack user will have the option to re-run a monitor in case there was a blip. 

## Before you begin

You need to have:

* a Transposit account
* a Slack account (in a workspace where you can install apps)
* a Postman account that is monitoring at least one URL ([more here](https://learning.getpostman.com/docs/postman/monitors/setting_up_monitor/))
* a repository with CircleCI configured to build it and with an Orb to post notifications on CircleCI runs ([more here](https://circleci.com/docs/2.0/notifications/#using-the-slack-orb)).

Here's a sample CircleCI config.yml to add to your repo:

```
version: 2.1
commands:
  notify_job_status:
    description: Send webhook to trigger postman check
    steps:
      - run:
          name: On success
          when: on_success
          command: |
            curl <webhook_circleci URL> -d '{"payload":{"reponame":"'"$CIRCLE_PROJECT_REPONAME"'","branch":"'"$CIRCLE_BRANCH"'","build_parameters":{"CIRCLE_JOB":"'"$CIRCLE_JOB"'"},"outcome":"fixed","build_url":"'"$CIRCLE_BUILD_URL"'"}}' -H "Content-Type: application/json" -X POST --fail
jobs:
  build:
    docker:
      - image: circleci/node:lts
    steps:
      - checkout
      - run: exit 0 
      - slack/notify:
          color: '#42e2f4'
          message: Your build has finished.
          webhook: <slack webhook>
      - notify_job_status
orbs:
  slack: circleci/slack@3.3.0
workflows:
  your-workflow:
    jobs:
      - build
```

## Set things up

[Fork the application](https://console.transposit.com/t/transposit-sample/slack_postman/code/op/webhook_circleci). Go to **Deploy > Endpoints** and copy the webhook URL for both `webhook_circleci` and `webhook_slack_button`.

Create a Slack application (call it PostmanBot). You'll want to make sure that you set up a [bot user](/docs/guides/slack/chatbots/) and enable [interactive components](/docs/guides/slack/workflows/). 

Configuration summary of the Slack application:
* When setting up the interactive component, add the URL you noted for `webhook_slack_button` as the 'Request URL'.
* For OAuth scopes, set it to `chat:write:bot bot`.
* For the OAuth section, use `https://accounts.transposit.com/oauth/v2/handle-redirect` 
* Make sure you add a bot user.
* Install your application into your workspace.

Go to your Transposit application and provide your credentials for both Postman and Slack. You'll have to do this both **Code > Development > Auth & Settings**  and in **Deploy > Production Keys**. Make sure you authorize following [these steps](/docs/guides/slack/chatbots/#acting-as-your-bot-user) because you want the application to act as PostmanBot, not as you.

Update your CircleCI configuration to post to the `webhook_circleci` URL when CircleCI completes successfully.

Configure your environment variables under **Deploy > Environment Variables**. You are setting up both the Slack channel the bot should post to and the monitor id for the Postman monitor.

Make sure you invite the bot to the Slack channel that you specified in the environment variables: `/invite @PostmanBot`.

## Final product

Push a commit to your sample repository. You should see the CircleCI Orb post first, and then PostmanBot.

Re-run the Postman monitors by clicking 'Re-run Postman' and see the new results in a thread.
