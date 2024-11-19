document.querySelector('.add-to-cart').addEventListener('click', () => {
    // Create a message div if it doesn't already exist
    let messageDiv = document.querySelector('.cart-message');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.className = 'cart-message';
        messageDiv.textContent = 'Added to cart successfully!';
        document.body.appendChild(messageDiv);
    }

    // Show the message
    messageDiv.style.display = 'block';

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
});