const color = ["#dbd9d9"];
const scrollLine = document.querySelector(".category .scroll-line");

window.addEventListener("scroll", () => {
  //스크롤을 할 때마다 로그로 현재 스크롤의 위치
  console.log(window.scrollY);
  if (window.scrollY > 20) {
    scrollLine.style.backgroundColor = `${color}`;
  } else {
    scrollLine.style.backgroundColor = "#FFF";
  }
});
