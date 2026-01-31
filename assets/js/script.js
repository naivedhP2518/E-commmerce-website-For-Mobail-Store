document.addEventListener("DOMContentLoaded", () => {
    // Update Cart Count in Header
    function updateCartCount() {
         const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
         const countEls = document.querySelectorAll(".cart-count");
         countEls.forEach(el => el.textContent = cartItems.length);
    }
    updateCartCount();

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const card = e.target.closest('.card');
            if (card) {
                const title = card.querySelector('h3').innerText;
                const priceText = card.querySelector('h4') ? card.querySelector('h4').innerText : '0';
                const price = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;

                const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                cartItems.push({ name: title, price: price });
                localStorage.setItem('cart', JSON.stringify(cartItems));
                
                updateCartCount();
                alert(`${title} added to cart!`);
            }
        });
    });

    // Header styling on scroll
    const header = document.querySelector("header");
    if (header) {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.style.background = "rgba(5, 5, 5, 0.95)";
                header.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
            } else {
                header.style.background = "rgba(5, 5, 5, 0.8)";
                header.style.boxShadow = "none";
            }
        });
    }
});
