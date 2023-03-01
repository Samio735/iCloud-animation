let cont = document.querySelector(".container")



cont.addEventListener("click",() =>{
    if ( cont.getAttribute("class") == "container"){
        cont.setAttribute("class","container active")
    }
    else {
        cont.setAttribute("class","container")

    }

})


setInterval(()=>{
    setTimeout(()=>{
        cont.setAttribute("class","container active")

    },3000)
    setTimeout(()=>{
        cont.setAttribute("class","container")

    },7700)

},10000)