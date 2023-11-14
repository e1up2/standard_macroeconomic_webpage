// Event listener for the dropdown list change
document.getElementById('labelOption').addEventListener('change', function() {
    let option = this.value; // Get the selected option
    let scriptPath = option === 'standard' ? '../elijavi/standard_slidedeck.do' : '../elijavi/less_slidedeck.do';
    
    // Placeholder for server-side script execution logic
    // (This part should be implemented based on your server setup)

    // Display slides in the preview area based on the selected option
    displaySlides(option);
});

// Function to display slides
function displaySlides(option) {
    let slidePreviewArea = document.getElementById('slidePreview');
    slidePreviewArea.innerHTML = ''; // Clear existing slides

    // Assuming slides are received as an array of image URLs
    let slides = []; // Replace this with actual slide URLs from the server

    slides.forEach(slideUrl => {
        let slideCard = document.createElement('div');
        slideCard.className = 'slide-card';
        let slideImage = document.createElement('img');
        slideImage.src = slideUrl; // Set the source of the image
        slideCard.appendChild(slideImage); // Add the image to the card
        slidePreviewArea.appendChild(slideCard); // Add the card to the preview area
    });

    // Event listener for the download button
    document.getElementById('downloadBtn').onclick = function() {
        downloadPresentation(option); // Download the presentation
    };
}

// Function to handle presentation download
function downloadPresentation(option) {
    let filename = option === 'standard' ? 'standard_macroeconomic_update.pptx' : 'less_macroeconomic_update.pptx';
    // Placeholder for download logic
    // (Implement this part based on your server's file handling capabilities)
}

// Additional functionality for enlarging a slide on click can be added here
