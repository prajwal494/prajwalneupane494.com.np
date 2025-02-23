// Mock function to simulate ordering a product
function orderProduct(productId) {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productId: productId,
            message: `Order placed for ${productId}`,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert(`Order placed successfully for ${productId}!`);
        console.log('Order Response:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to place order. Please try again.');
    });
}