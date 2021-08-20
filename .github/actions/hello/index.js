const core = require('@actions/core')
const github = require('@actions/github')

try {
  // throw(new Error("some error message"))

  core.debug('Debug message')
  core.warning('Warning message')
  core.error('Error message')

  const name = core.getInput('who-to-greet')
  core.setSecret(name) // sets varaible to appear in logs as ***
  console.log(`Hello ${name}`);
  
  const time = new Date();
  core.setOutput("time", time.toTimeString())
  
  core.startGroup('Logging github object') // makes message in log retractable
  console.log(JSON.stringify(github, null, '\t'));
  core.endGroup()

  core.exportVariable('HELLO', 'hello') // set env variable
} catch(error) {
  core.setFailed(error.message);
}


// core.setFailed('dwdw')