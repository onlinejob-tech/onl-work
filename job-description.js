document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobPosition = urlParams.get('position');
    const jobLocation = urlParams.get('location');

    const jobTitleElement = document.getElementById('jobTitle');
    const jobLocationElement = document.getElementById('jobLocation');
    const jobDescriptionElement = document.getElementById('jobDescription');

    jobTitleElement.textContent = jobPosition;
    jobLocationElement.textContent = `Location: ${jobLocation}`;
    jobDescriptionElement.textContent = `Description: This is a detailed description of the ${jobPosition} position located in ${jobLocation}.`;
});
