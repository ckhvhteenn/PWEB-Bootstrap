// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Comment form submission
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comment = document.getElementById('comment').value;
            
            // Validate form
            if (!name || !email || !comment) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Here you would typically send the data to a server
            // For demonstration, we'll just show a success message
            alert('Thank you for your comment! It will be reviewed and published soon.');
            commentForm.reset();
        });
    }
    
    // Share buttons functionality
    const shareButtons = document.querySelectorAll('.share-buttons a');
    if (shareButtons.length > 0) {
        shareButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const type = this.getAttribute('data-share');
                const url = encodeURIComponent(window.location.href);
                const title = encodeURIComponent(document.title);
                
                let shareUrl;
                
                switch(type) {
                    case 'facebook':
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                        break;
                    case 'twitter':
                        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                        break;
                    case 'linkedin':
                        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
                        break;
                    case 'pinterest':
                        const image = encodeURIComponent(document.querySelector('.article-featured-image').src);
                        shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}`;
                        break;
                }
                
                window.open(shareUrl, '_blank', 'width=600,height=400');
            });
        });
    }
    
    // Search functionality
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('search-input').value;
            if (!searchTerm) {
                alert('Please enter a search term.');
                return;
            }
            
            // Here you would typically send the search query to a server
            // For demonstration, we'll just show an alert
            alert(`Searching for: ${searchTerm}`);
        });
    }
    
    // Initialize tooltips if using Bootstrap 5
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});