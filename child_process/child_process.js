const child_process = require("child_process");
console.log("=== begin child process ===");
for (let i = 0, l = 3; i < l; i++) {
  const workerProcess = child_process.exec(
    "node worker.js " + i,
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.stack);
        console.log("Error code: " + error.code);
        console.log("Signal received: " + error.signal);
      }
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
    }
  );

  workerProcess.stdout.on("data", (data) => {
    console.log("=== worker data event ===", data);
  });

  workerProcess.on("exit", (code) => {
    console.log("worker exit: " + code);
  });
}
