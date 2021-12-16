let images = document.querySelectorAll(".gallery a");
let popup = document.querySelector(".popup");
let biggestImg = document.querySelector(".popup .inner img");
let closeIcon = document.querySelector(".close-icon i");
let previousIcon = document.querySelector(".arrows .previous");
let nextIcon = document.querySelector(".arrows .next");

images.forEach(image => {
    image.addEventListener("click", function (e) {
        e.preventDefault()
        openImage()
        changeImage(image)
        image.classList.add("show-image")
    })
});

closeIcon.addEventListener("click", closeImage);

nextIcon.addEventListener("click", () => {
    let nextImg = document.querySelector(".show-image")
    nextImage(nextImg)
});

previousIcon.addEventListener("click", () => {
    let previousImg = document.querySelector(".show-image")
    previousImage(previousImg)
});

popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
        closeImage();
    }
});
document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "Escape":
            closeImage();
            break;
        case "ArrowRight":
            let nextImg = document.querySelector(".show-image")
            nextImage(nextImg)
            break;
        case "ArrowLeft":
            let previousImg = document.querySelector(".show-image")
            previousImage(previousImg)
            break;
    }
})
document.querySelector(".addBtn").addEventListener("click", () => {
    let inputValue = document.querySelector("#myInput").value;
    if (inputValue === "") {
        document.querySelector("#myInput").style.backgroundColor = "darkred"
    }
    else {
        document.querySelector(".intro").style.display = "block"
        document.querySelector(".check").style.display = "none"
        document.querySelector(".user").innerHTML = inputValue
    }
})


function openImage() {
    popup.style.display = "flex"
};

function closeImage() {
    popup.style.display = "none"
};

function changeImage(img) {
    let imgSrc = img.getAttribute("href");
    biggestImg.setAttribute("src", imgSrc)
};

function nextImage(item) {
    if (item.nextElementSibling !== null) {
        item.nextElementSibling.classList.add("show-image")
        changeImage(item.nextElementSibling)
    }
    else {
        item.parentElement.children[0].classList.add("show-image")
        changeImage(item.parentElement.children[0])
    }
    item.classList.remove("show-image");
};

function previousImage(item) {
    let length = item.parentElement.children.length
    if (item.previousElementSibling !== null) {
        item.previousElementSibling.classList.add("show-image")
        changeImage(item.previousElementSibling)
    }
    else {
        item.parentElement.children[length - 1].classList.add("show-image")
        changeImage(item.parentElement.children[length - 1])
    }
    item.classList.remove("show-image")
};


