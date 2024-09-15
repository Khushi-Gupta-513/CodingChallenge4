// Function to display product details
function displayProductDetails(product) {
    const stockStatus = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock";
    
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}

// Example usage
displayProductDetails({
    name: "Laptop",
    price: 999.99,
    quantity: 15,
    lowStockLevel: 5
});

