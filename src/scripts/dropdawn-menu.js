const menu = document.getElementById("menu");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("hide-btn");

openBtn.onclick = () => menu.showModal();
closeBtn.onclick = () => menu.close();
