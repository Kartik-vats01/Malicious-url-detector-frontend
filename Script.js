document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const scanButton = document.getElementById('scanButton');
    const resultArea = document.getElementById('resultArea');
    const tableBody = document.querySelector('#searchTable tbody');
    const reportButton = document.getElementById('reportButton');

    let searchCount = 0;

    scanButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (!query) return;

        // Show scanning effect
        resultArea.innerHTML = `
            <div class="scanning-container">
                <p class="scanning-text">Scanning <strong>${query}</strong></p>
                <div class="scanning-bar">
                    <div class="scan-line"></div>
                </div>
                <p class="scanning-status">Analyzing URL in progress...</p>
            </div>
        `;
        resultArea.style.display = 'block';

        // Simulate scanning delay before adding to table
        setTimeout(() => {
            // update last searches
            searchCount += 1;
            const row = document.createElement('tr');
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            
            row.innerHTML = `
                <td>${searchCount}</td>
                <td>${query}</td>
                <td>${date}</td>
                <td>${time}</td>
            `;
            tableBody.prepend(row);

            // Clear scanning effect after adding to table
            resultArea.innerHTML = '';
            resultArea.style.display = 'none';
        }, 3000); // 3 second scanning animation

        // clear input
        searchInput.value = '';
    });

    reportButton.addEventListener('click', () => {
        const reportModal = document.getElementById('reportModal');
        reportModal.style.display = 'block';
    });

    // Close modal when close button is clicked
    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => {
        const reportModal = document.getElementById('reportModal');
        reportModal.style.display = 'none';
        document.getElementById('reportForm').reset();
    });

    // Close modal when cancel button is clicked
    const cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.addEventListener('click', () => {
        const reportModal = document.getElementById('reportModal');
        reportModal.style.display = 'none';
        document.getElementById('reportForm').reset();
    });

    // Handle form submission
    const reportForm = document.getElementById('reportForm');
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('reportEmail').value;
        const url = document.getElementById('reportUrl').value || 'Not provided';
        const issueType = document.getElementById('reportType').value;
        const message = document.getElementById('reportMessage').value;
        
        // Close modal
        const reportModal = document.getElementById('reportModal');
        reportModal.style.display = 'none';
        
        // Show success alert
        alert(`Thank you for reporting a problem!\n\nEmail: ${email}\nIssue Type: ${issueType}\n\nWe will review your report shortly.`);
        
        // Reset form
        reportForm.reset();
    });

    // mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    navToggle && navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });
});
