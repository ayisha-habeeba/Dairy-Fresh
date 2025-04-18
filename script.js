function openPopup() {
    document.getElementById("order-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("order-popup").style.display = "none";
}

// Close popup when clicking outside the content
window.onclick = function(event) {
    let popup = document.getElementById("order-popup");
    let popupContent = document.querySelector("#order-popup .popup-content");

    // Check if the clicked area is outside the popup content
    if (event.target === popup) {
        closePopup();
    }
};
