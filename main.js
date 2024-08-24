const showButton = document.getElementById("show-share")
const hideButton = document.getElementById("hide-share")

const personDiv = document.getElementById("connect")
const shareDiv = document.getElementById("share-container")

showButton.addEventListener('click', () => {
    showButton.classList.toggle("hidden")
    shareDiv.classList.toggle("hidden")
})
//personDiv.classList.add("hidden")
//shareDiv.classList.remove("hidden")