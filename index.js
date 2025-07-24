const core = require('@actions/core');

// Returns a calver string as a date in the format `{year}.{month}.{day}.{seconds-in-day}`.
async function run() {
  try {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
    const secondsInDay =
      now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
    const calver = `${year}.${month}.${day}.${secondsInDay}`;
    console.log(calver);
    core.setOutput('result', calver);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
