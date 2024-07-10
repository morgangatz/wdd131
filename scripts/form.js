const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        avg_rating: 4.5
    },
    {
        id: 'fc-2050',
        name: "power laces",
        avg_rating: 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        avg_rating: 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        avg_rating: 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        avg_rating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productSelect');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const reviewForm = document.getElementById('reviewForm');

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let reviewCount = localStorage.getItem('reviewCount');
        if (reviewCount === null) {
            reviewCount = 0;
        } else {
            reviewCount = parseInt(reviewCount);
        }
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);

        window.location.href = `review.html?reviews=${reviewCount}`;
        
        reviewForm.reset();
    });
});
