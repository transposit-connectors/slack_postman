// This app is triggered when 'build' workflow completed on branch 'add-orb' https://github.com/transposit/transposit/pull/1879
// Once it gets a 'build success' from CircleCI, the app will run API tests in Postmate to test for two endpoints. 
// It posts to #yokotestchannel after getting build results and API speed results. 

// Steps to trigger: 
// 1. click on rebuild here https://circleci.com/gh/transposit/transposit/25299
// 2. wait for CI to build, and go to #yokotestchannel to see results

// TODOs
// - depending on how we want to demo this for postcon, probably need to add more API tests on Postman
// - make messages post to slack prettier