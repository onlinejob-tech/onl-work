document.addEventListener('DOMContentLoaded', function() {
    const personalDetailsForm = document.getElementById('personalDetailsForm');
    const applicationForm = document.getElementById('applicationForm');
    const jobList = document.getElementById('jobList');
    const statusList = document.getElementById('statusList');

    const jobListings = [
        { position: 'Software Engineer', location: 'USA' },
        { position: 'Data Scientist', location: 'Canada' },
        { position: 'Project Manager', location: 'UK' },
        { position: 'Marketing Specialist', location: 'Australia' }
    ];

    const applications = [];
    const users = JSON.parse(localStorage.getItem('users')) || [];

    function displayJobListings() {
        jobList.innerHTML = '';
        jobListings.forEach(job => {
            const li = document.createElement('li');
            li.textContent = `${job.position} - ${job.location}`;
            jobList.appendChild(li);
        });
    }

    function displayApplicationStatus() {
        statusList.innerHTML = '';
        applications.forEach(application => {
            const li = document.createElement('li');
            li.textContent = `${application.name} applied for ${application.position} in ${application.country}`;
            statusList.appendChild(li);
        });
    }

    personalDetailsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const currentCountry = document.getElementById('currentCountry').value;

        const user = users.find(user => user.email === email);
        if (user) {
            user.fullName = fullName;
            user.phoneNumber = phoneNumber;
            user.currentCountry = currentCountry;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Personal details saved successfully!');
        } else {
            alert('User not found!');
        }
    });

    applicationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const position = document.getElementById('jobPosition').value;
        const user = users.find(user => user.email === document.getElementById('email').value);

        if (user) {
            applications.push({ name: user.fullName, email: user.email, phone: user.phoneNumber, country: user.currentCountry, position });
            displayApplicationStatus();
            alert('Application submitted successfully!');
            applicationForm.reset();
        } else {
            alert('User not found!');
        }
    });

    displayJobListings();
});
