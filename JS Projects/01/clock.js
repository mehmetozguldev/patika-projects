const showTime = () => {
    const today = new Date();
  
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
  
    let clock = document.getElementById("myClock");
    clock.innerHTML = `${h}:${m}:${s}`;
  
    setTimeout(showTime, 1000);
  };
  
  const checkTime = (num) => {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  };
  
  document.getElementById("myName").innerHTML += `Mehmet`;

  window.addEventListener("load", (event) => {
    showTime();
  });  