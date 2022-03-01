const core = require('@actions/core');
const github = require('@actions/github');

try {
    // first we grab the input
    const doYouWantToDance = core.getInput('do-you-want-to-dance');
    console.log(`Do you want to dance: ${doYouWantToDance}`);

    // let's set the output
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    const payload = JSON.stringify(github.context.payload, undefined, 2);

    console.log(`The event payload: ${payload}`);
} catch (err) {
    core.setFailed(error.message);

}