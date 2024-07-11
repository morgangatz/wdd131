document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Output the current year in the footer's first paragraph
    document.getElementById('currentYear').textContent = `© ${currentYear} ❄ Morgan Gatz ❄ Canada`;

    // Get the last modified date of the document
    const lastModified = document.lastModified;
    // Output the last modified date in the footer's second paragraph
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
});
