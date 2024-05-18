
document.addEventListener('DOMContentLoaded', function() {
    
    setupNavigationButtons();
    setLinksToOpenInNewTab();
    setupReadMoreButtons();

})
    
function setupNavigationButtons() {
    const buttons = [
        { id: 'homeBtn', url: 'index.html' },
        { id: 'blogBtn', url: 'blog.html' },
        { id: 'portfolioBtn', url: 'portfolio.html' },
        { id: 'documentBtn', url: 'document.html' },
        { id: 'contactBtn', url: 'contact.html' },
        { id: 'essayBtn', url: 'essay.html' },
        { id: 'recentBlogsBtn', url: 'blog.html' }
    ];
    
    buttons.forEach(button => {
        const btnElement = document.getElementById(button.id);
        if (btnElement) {
            btnElement.addEventListener('click', function() {
                window.location.href = button.url;
            });
        }
    });
}
    
    
function setLinksToOpenInNewTab() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
    });
}

function setupReadMoreButtons() {
    const toggleButtons = document.querySelectorAll('.toggleButton');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const extraContent = this.nextElementSibling;
            if (extraContent.classList.contains('extra-content')) {
                if (extraContent.style.display === 'none' || extraContent.style.display === '') {
                    extraContent.style.display = 'block';
                    this.textContent = 'Read Less';
                } else {
                    extraContent.style.display = 'none';
                    this.textContent = 'Read More';
                }
            }
        });
    });
}  


