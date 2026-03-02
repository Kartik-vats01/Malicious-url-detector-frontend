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
        resultArea.innerHTML = `<p>Scanning <strong>${query}</strong>... (ML results will appear here)</p>`;
        searchCount += 1;
        const row = document.createElement('tr');
        const now = new Date().toLocaleString();
        row.innerHTML = `
            <td>${searchCount}</td>
            <td>${query}</td>
            <td>${now}</td>
        `;
        tableBody.prepend(row);
        searchInput.value = '';
    });

    reportButton.addEventListener('click', () => {
        alert('Thank you for reporting a problem. This feature will be implemented soon.');
    });

    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    navToggle && navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });

});
