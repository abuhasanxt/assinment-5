







let clickJob = 0;
document.getElementById("Job-btn").addEventListener("click", function () {
  clickJob++;

  const taskSub = document.getElementById("task-add").innerText;
  const convertedtask = parseInt(taskSub);
  if (clickJob === 1) {
    alert("Bord updated Successfully");
    const sub = convertedtask - 1;
    document.getElementById("task-add").innerText = sub;
  }
  const taskAdd = document.getElementById("add-task").innerText;
  const convertedtas = parseInt(taskAdd);
  if (clickJob === 1) {
    const sub = convertedtas + 1;
    document.getElementById("add-task").innerText = sub;



    const container = document.getElementById("History-container");
    const p = document.createElement("p");
    
    
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const Hours = hours % 12 || 12;
    
    const updateTime = `${Hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    p.style.background = "#ffffff";
    p.style.borderRadius = "5px";
    p.style.boxShadow = "0px 0px 0px 1px";
    p.style.margin = "10px auto";
    p.style.width = "300px";
    p.innerText = `You have completed the task Improve Job searching
 at ${updateTime}`;
    
    container.appendChild(p);



  } else if (clickJob === 2) {
    alert("congrates!!! You hove completed all current task");
    this.disabled = true;
  }
});

