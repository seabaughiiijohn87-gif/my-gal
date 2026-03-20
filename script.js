document.querySelectorAll('.photo-card img').forEach(image => {
    image.onclick = () => {
        // Simple alert for now, you can expand this to a lightbox later!
        alert("You clicked a photo! You can add a lightbox effect here next.");
    };
});

console.log("Gallery script loaded successfully!");