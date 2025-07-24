// GitHub Action: Outputs a calver string in the format {year}.{month}.{day}.{seconds-in-day} (UTC).
// See README.md for usage and details.
const core = require('@actions/core');

// Returns a calver string as a date in the format `{year}.{month}.{day}.{seconds-in-day}`.
async function run() {
  try {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const day = now.getUTCDate();
    const secondsInDay =
      now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
    // Map secondsInDay (0-86399) to 0-65534 percent-wise for C# revision version
    const maxSeconds = 24 * 60 * 60 - 1; // 86399
    const maxRevision = 65534;
    const modifiedRevisionVersion = Math.round((secondsInDay / maxSeconds) * maxRevision);
    const calver = `${year}.${month}.${day}.${modifiedRevisionVersion}`;
    core.setOutput('result', String(calver));
    console.log(calver);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
