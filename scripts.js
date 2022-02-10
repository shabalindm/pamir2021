initModal()
initCollapsible()



function initCollapsible(){
    const colls = Array.from(document.getElementsByClassName("collapsible"));
    colls.forEach(
        coll => {
            const content = coll.nextSibling
            coll.addEventListener("click", function (e) {
                e.preventDefault()
                // this.classList.toggle("active");

                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                    for (const img of content.getElementsByTagName("img")) {
                        if (!img.getAttribute("src")) {
                            img.setAttribute("src", img.getAttribute("data-src"))
                        }
                    }
                }
                return false;
            })
        }
    )
}





function initModal() {
    const modalContainer = document.getElementById("photo-modal");
// Get the <span> element that closes the modalContainer
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modalContainer
    span.onclick = function () {
        modalContainer.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }
}



function openPhotoModal(data){
    // Get the modalContainer
    const modalContainer = document.getElementById("photo-modal");
    const modalImg = document.getElementById("photo-modal-img");
    const captionText = document.getElementById("photo-modal-caption");
    modalContainer.style.display = "block";
    modalImg.src = data["url"];
    captionText.innerHTML = "Фото " + data["num"] + ". "  + data["name"];
}


