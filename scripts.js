initModal()
const photoIndex = initPhotosFromIcons();
initCollapsible(photoIndex);
initPhotoRef(photoIndex)

function initCollapsible(photoIndex) {
    const colls = Array.from(document.getElementsByClassName("collapsible"));
    colls.forEach(
        coll => {
            const content = document.createElement("div");
            coll.addEventListener("click", function (e) {
                e.preventDefault()
                if (!coll.getAttribute("inited")) {
                    coll.parentNode.insertBefore(content, coll.nextSibling);
                    const folders = coll.dataset["folder"].split(",");
                    folders.forEach((folder) => {
                        let photoList = photoIndex[folder]["list"];
                        let fromIndex = 0;
                        let toIndex = photoList.length;
                        const from = coll.dataset["from"];
                        if(from){
                            let i = photoList.indexOf(from);
                            if(i>0) {
                                fromIndex = i;
                            }

                        }
                        const to = coll.dataset["to"];
                        if(to){
                            let i = photoList.indexOf(to);
                            if(i>=0) {
                               toIndex = i + 1;
                            }
                        }
                        photoList.slice(fromIndex, toIndex).forEach((file) => {
                            const data = photoIndex[folder][file];
                            const photoTitle = "Фото " + data["num"] + ". " + data["name"];
                            const photo = document.createElement("div");
                            photo.className = "photo-full";
                            content.appendChild(photo);
                            const img = document.createElement("img");
                            img.className = "photo-full-img"
                            img.alt = photoTitle;
                            img.src = data["url"];
                            photo.appendChild(img);
                            const title = document.createElement("div");
                            title.innerHTML = photoTitle;
                            photo.appendChild(title);

                        });
                    })
                    coll.setAttribute("inited", "true")
                }


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

function initPhotoRef(photoIndex) {
    const spans = Array.from(document.getElementsByClassName("photo-ref"));
    spans.forEach(
        span => {
            let url = span.dataset["file"];
            const parts = url.split("/");
            const folder = parts[parts.length - 2];
            const file = parts[parts.length - 1];
            let data = photoIndex[folder][file];

            const a = document.createElement("a");
            a.href = data["url"];
            a.innerHTML = "фото " + data["num"];
            span.appendChild(a);
            a.setAttribute("onclick", "openPhotoModal(" + JSON.stringify(data)+"); return false");
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

/**
 *
 * @returns
 */
function initPhotosFromIcons() {
   const photoIndex = []
// Get the image and insert it inside the modalContainer - use its "alt" text as a caption
    Array.from(document.getElementsByClassName("photo")).forEach(photo => {
        let url = photo.dataset["file"];
        const parts = url.split("/");
        const folder = parts[parts.length - 2];
        const file = parts[parts.length - 1];

        if(!photoIndex[folder]){
            photoIndex[folder] = [];
            photoIndex[folder]["list"] = []
        }
        if(!photoIndex[folder][file]){
            photoIndex[folder]["list"].push(file);
            const num =  photoIndex[folder]["list"].length;
            photoIndex[folder][file] = {"num": folder + "."  + num, "name":  photo.dataset["name"], "url": url}
        }

        let data = photoIndex[folder][file];
        const a = document.createElement("a");
        a.href = url;
        const img = document.createElement("img");
        img.className = "photo-icon-img";
        img.src = url.replace("photos/","photo/preview/");
        img.title = data["name"];
        photo.appendChild(a);
        a.appendChild(img);
        const div = document.createElement("div");
        div.className = "photo-num";
        let num = data["num"];
        div.innerHTML = num;
        photo.appendChild(div);

        a.setAttribute("onclick", "openPhotoModal(" + JSON.stringify(data)+"); return false");

        photo.removeAttribute("data-file");
        photo.setAttribute("data-num",  num)
    });
    return photoIndex;
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


