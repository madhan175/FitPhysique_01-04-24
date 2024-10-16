document.addEventListener('DOMContentLoaded', function() {
    const viewProfileButtons = document.querySelectorAll('.coach__card button');

    viewProfileButtons.forEach(button => {
        button.addEventListener('click', function() {
            const coachCard = this.closest('.coach__card');
            const coachName = coachCard.querySelector('h4').textContent;
            alert(`Viewing profile for ${coachName}`);
            // You can replace the alert with a redirect or modal opening logic
        });
    });
});