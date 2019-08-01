const { exec } = require('child_process');
const { promisify } = require('util');

const { run } = require('react-snap');

const pexec = promisify(exec);

[
  {
    destination: 'build/screenshots/facebook',
    viewport: {
      width: 1200,
      height: 630,
    },
  },
  {
    destination: 'build/screenshots/twitter',
    viewport: {
      width: 1200,
      height: 600,
    },
  },
].forEach(async ({ destination, viewport }, i) => {
  try {
    await pexec(`mkdir -p ${destination}`);
  } catch (error) {
    throw new Error(
      `couldn't run \`mkdir -p ${destination}\`, original error:\n${error.message}`,
    );
  }

  await run({
    destination,
    viewport,
    saveAs: 'png',
    waitFor: 10000,
    // @see: react-snap/index.js
    port: 45679 + i,
  });
});
