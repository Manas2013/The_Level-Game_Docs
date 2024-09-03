document.querySelectorAll(".actions div").forEach(scrolltobtn => {
    scrolltobtn.addEventListener("click", () => {
        document.querySelector(".Main #" + scrolltobtn.id).scrollIntoView({behavior: "instant"})
    })
})

document.querySelector("#sidebar svg").addEventListener("click", () => {
    document.querySelector(".actions").style.display = "block"
    setTimeout(() => { 
        document.querySelector(".actions").style.left = "0vw"
    }, 100)
})

document.querySelector("#exit").addEventListener("click", () => {
    document.querySelector(".actions").style.left = "-32vw"
    setTimeout(() => {
        document.querySelector(".actions").style.display = "none"
    }, 1000)
})