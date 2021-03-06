var htmlBody = document.getElementsByTagName('body').item(0);
var lightboxBack = document.createElement("div");
var lightboxImageWrapper = document.createElement("div");
var lightboxLabel = document.createElement("div");
var lightboxClose = document.createElement("a");
var lightboxImage = document.createElement("img");

htmlBody.append(lightboxBack);
lightboxBack.style = "display: none;";
lightboxBack.className = "lightboxBack";
lightboxBack.append(lightboxImageWrapper);

lightboxImageWrapper.className = "lightboxImageWrapper";

lightboxLabel.className = "lightboxLabel";
lightboxClose.className = "lightboxClose";
lightboxClose.innerHTML = "×";
lightboxClose.setAttribute('href', '');

lightboxImageWrapper.append(lightboxLabel);
lightboxImageWrapper.append(lightboxImage);
lightboxImageWrapper.append(lightboxClose);

lightboxImage.style = "max-width: 100%;";

lightboxBack.addEventListener("click", function(e) {
    lightboxBack.setAttribute('style', "display: none;");
    lightboxImage.setAttribute('src', '');
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var lightboxWrappers = document.getElementsByClassName('lightbox');

for (var i = 0; i < lightboxWrappers.length; i++) {
    applyLightbox(lightboxWrappers.item(i));
}

function applyLightbox(wrapper) {
    var allAnchors = wrapper.getElementsByTagName('a');
    for (var i = 0; i < allAnchors.length; i++) {
        lightboxAnchor(allAnchors.item(i));
    }
}

function lightboxAnchor(anchor) {
    var imagePath = anchor.href;
    var labelStr = anchor.title;
    console.log(anchor);
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        var lightboxClosed = lightboxBack.style.display === "none";
        if (lightboxClosed) {
            htmlBody.className = "lightboxOpen";
            lightboxLabel.innerHTML = labelStr ?? "";
            lightboxImage.setAttribute('src', imagePath);
            lightboxBack.setAttribute('style', "display: auto;");
        } else {
            htmlBody.className = "";
            lightboxLabel.innerHTML = "";
            lightboxImage.setAttribute('src', '');
            lightboxBack.setAttribute('style', "display: none;");
        }
    });
}
