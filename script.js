document.getElementById("hamb").addEventListener("click", function(){
    let hamOver = document.querySelector(".hamOver");
    hamOver.style.display = "flex"
})
document.getElementById("stang").addEventListener("click", function(){
    let hamOver = document.querySelector(".hamOver");
    hamOver.style.display = "none"
})
document.getElementById("stang2").addEventListener("click", function(){
    let hamOver = document.querySelector(".hamOver");
    hamOver.style.display = "none"
})
document.getElementById("stang3").addEventListener("click", function(){
    let hamOver = document.querySelector(".hamOver");
    hamOver.style.display = "none"
})
document.getElementById("stang4").addEventListener("click", function(){
    let hamOver = document.querySelector(".hamOver");
    hamOver.style.display = "none"
})

document.getElementById("face").addEventListener("click", function(){
    window.open("https://www.facebook.com/stig.bergstrand.54")
})
document.getElementById("kollamer").addEventListener("click", function(){
    window.location.href = "galleri.html"
})

document.getElementById("platsIcon").addEventListener("click", function(){
    let platsen = document.getElementById("platsen")
    platsen.scrollIntoView({ behavior: 'smooth' });
})


document.getElementById("Kontakta").addEventListener("click", function(){
    let foot = document.getElementById("foot")
    foot.scrollIntoView({ behavior: 'smooth' });
})
