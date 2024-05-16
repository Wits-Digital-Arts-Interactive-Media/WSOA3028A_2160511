
document.addEventListener('DOMContentLoaded', function() {
    
    const homeBtn = document.getElementById('homeBtn');
    const blogBtn = document.getElementById('blogBtn');
    const portfolioBtn = document.getElementById('portfolioBtn');
    const documentBtn = document.getElementById('documentBtn');
    const contactBtn = document.getElementById('contactBtn');
    const essayBtn = document.getElementById('essayBtn');
    
    
    const recentBlogsBtn = document.getElementById('recentBlogsBtn');

    
    homeBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    blogBtn.addEventListener('click', function() {
        window.location.href = 'blog.html';
    });

    portfolioBtn.addEventListener('click', function() {
        window.location.href = 'portfolio.html';
    });

    documentBtn.addEventListener('click', function() {
        window.location.href = 'document.html';
    });

    contactBtn.addEventListener('click', function() {
        window.location.href = 'contact.html';
    });

    essayBtn.addEventListener('click', function() {
        window.location.href = 'essay.html';
    });

    recentBlogsBtn.addEventListener('click', function() {
        window.location.href = 'blog.html';
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
    });
});


