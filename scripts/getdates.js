document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Get the last modified date
    const lastModified = document.lastModified;

    // Set the content of the copyright paragraph
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.textContent = `© ${currentYear}`;

    // Set the content of the last modified paragraph
    const lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent = `Last modified: ${lastModified}`;
});
