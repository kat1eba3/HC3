document.addEventListener("DOMContentLoaded", function () {
    // Your existing JavaScript code remains unchanged
    // ...
});


    draggableContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        scrollLeft = draggableContainer.scrollLeft;
        // Prevent default behavior to avoid conflicts with image dragging
        e.preventDefault();
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const offsetX = e.clientX - startX;
        draggableContainer.scrollLeft = scrollLeft - offsetX;
    });
;
