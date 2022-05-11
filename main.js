let ele = document.querySelectorAll("li")
let e = document.querySelector("div")

for (let i=0; i<4 ; i++) {
    ele[i].onclick = function () {
        for (let j=0; j<4 ; j++) {
            if (ele[j].classList.contains("active")) {
                ele[j].classList.remove("active")
            }
        }
        ele[i].classList.add("active")
        e.style.backgroundColor = ele[i].getAttribute("data-color")
        window.localStorage.setItem("element" , ele[i].getAttribute("data-color"))
    }
}

for (let i =0 ; i<4 ; i++) {
    if (ele[i].getAttribute("data-color") === window.localStorage.getItem("element")) {
        for (let j=0; j<4 ; j++) {
            if (ele[j].classList.contains("active")) {
                ele[j].classList.remove("active")
            }
            ele[i].classList.add("active")
            e.style.backgroundColor = ele[i].getAttribute("data-color")
        }
    }
}