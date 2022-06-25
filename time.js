const h_needle = document.querySelector(".ch");
const m_needle = document.querySelector(".cm");
const s_needle = document.querySelector(".cs");
const degree = 6;
function clock(){
let current = new Date();
let hr =  current.getHours() * 30;
let mr =  current.getMinutes() * degree;
let sr =  current.getSeconds() * degree;

h_needle.style.transform = `rotateZ(${hr + mr/12}deg)`;
m_needle.style.transform = `rotateZ(${mr}deg)`;
s_needle.style.transform = `rotateZ(${sr}deg)`;

document.getElementById("digital-hour").innerHTML = hr/ 30;
document.getElementById("digital-minutes").innerHTML = mr / degree;
document.getElementById("digital-seconds").innerHTML = sr / degree;


}
setInterval(clock,0);