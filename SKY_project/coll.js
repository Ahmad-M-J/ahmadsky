fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading navbar:', error));



function navigateTo(url) {
    window.location.href = url; // Navigate to the specified page
}

function navigateToNext() {
    window.location.href = 'html4.3.html'; // Go to the next page
}

function navigateToPrevious() {
    window.location.href = 'html4.html'; // Go to the previous page
}
