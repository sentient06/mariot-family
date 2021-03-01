var lightboxWrappers = document.getElementsByClassName('lightbox');
var htmlBody = document.getElementsByTagName('body').item(0);

var lightboxBack = document.createElement("div");
var lightboxImageWrapper = document.createElement("div");
var lightboxImage = document.createElement("img");

htmlBody.append(lightboxBack);
lightboxBack.style = "display: none;";
lightboxBack.className = "lightboxBack";
lightboxBack.append(lightboxImageWrapper);

lightboxImageWrapper.className = "lightboxImageWrapper";
lightboxImageWrapper.append(lightboxImage);

lightboxBack.addEventListener("click", function(e) {
    lightboxBack.setAttribute('style', "display: none;");
    lightboxImage.setAttribute('src', '');
});

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
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        var lightboxClosed = lightboxBack.style.display === "none";
        if (lightboxClosed) {
            lightboxImage.setAttribute('src', imagePath);
            lightboxBack.setAttribute('style', "display: auto;");
        } else {
            lightboxImage.setAttribute('src', '');
            lightboxBack.setAttribute('style', "display: none;");
        }
    });
}
