function toggleDescription(id, button) {
    const desc = document.getElementById(id);
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
        button.textContent = "Close";
    } else {
        desc.style.display = "none";
        button.textContent = "More Info";
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => desc.style.display = 'none');
});