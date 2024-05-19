document.addEventListener('DOMContentLoaded', (event) => {
    function handleFormSubmit(event) {
        event.preventDefault();
        const termsAccepted = document.getElementById('terms-and-conditions').checked;
        if (!termsAccepted) {
            alert('Please accept the terms and conditions to proceed.');
            return; 
        }

        // Collect form data
        const formData = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('new-password').value,
            accountType: document.querySelector('input[name="account-type"]:checked').value,
            profilePicture: document.getElementById('profile-picture').files[0],
            age: document.getElementById('age').value,
            referrer: document.getElementById('referrer').value,
            bio: document.getElementById('bio').value,
            termsAndConditions: termsAccepted
        };
        console.log('Form Data:', formData);
    }

    // Add event listener to the form's submit event
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); 

        // Check if terms and conditions are accepted
        const termsAccepted = document.getElementById('terms-and-conditions').checked;
        if (!termsAccepted) {
            alert('Please accept the terms and conditions to proceed.');
            return; 
        }

        // Collect form data
        const formData = {
            termsAndConditions: termsAccepted
        };
        console.log('Form Data:', formData);
        window.location.href = 'registration2.html';
    }
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});
