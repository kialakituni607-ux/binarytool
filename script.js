function openTab(tab){
  alert(tab + " opened (you can build this page next)");
}

let running = false;

function runBot(){
  running = !running;

  const status = document.getElementById("status");

  if(running){
    status.innerText = "Bot is running...";
    startFakeTrading();
  } else {
    status.innerText = "Bot stopped";
  }
}

// FAKE BOT LOGIC (you replace with real API later)
function startFakeTrading(){
  setInterval(()=>{
    if(!running) return;

    console.log("Simulated trade...");
  }, 3000);
}
