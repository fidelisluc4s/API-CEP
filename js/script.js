document.addEventListener("DOMContentLoaded", function() {
    let infoDiv = document.getElementById("info");

    let params = new URLSearchParams(window.location.search);
    let formData = new FormData();

    for (let pair of params.entries()) {
        formData.append(pair[0], pair[1]);
    }

    for (let pair of formData.entries()) {
        let p = document.createElement("p");
        p.innerHTML = `<strong>${pair[0]}:</strong> ${pair[1]}`;
        infoDiv.appendChild(p);
    }
});