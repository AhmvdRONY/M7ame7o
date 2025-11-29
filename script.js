const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})
const storageKey = "visitorStats";

      let stats = JSON.parse(localStorage.getItem(storageKey)) || {
        total: 0,
        unique: 0,
      };

      stats.total += 1;

      if (!sessionStorage.getItem("visited")) {
        stats.unique += 1;
        sessionStorage.setItem("visited", "true");
      }

      localStorage.setItem(storageKey, JSON.stringify(stats));

      console.log("عدد الزوار المختلفين (Unique visitors):", stats.unique);
      console.log("عدد مرات الدخول (Total visits):", stats.total);