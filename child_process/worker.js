console.log(`Worker进程[${process.argv[2]}]执行。`);

setInterval(() => {
  console.log(`message from worker[${process.argv[2]}], ${Date.now()}`);
}, 1000);
