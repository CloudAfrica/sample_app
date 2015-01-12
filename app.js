setInterval(
  function(){
    console.log("[" + process.pid + "] " + new Date());
  },
  1000 * 10
);
