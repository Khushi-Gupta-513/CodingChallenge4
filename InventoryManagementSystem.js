// Step 1: Create an array named 'inventory' with product objects
const inventory = [
    {
        name: "Laptop",
        price: 999.99,
        quantity: 15,
        lowStockLevel: 5
    },
    {
        name: "Smartphone",
        price: 599.99,
        quantity: 25,
        lowStockLevel: 10
    },
    {
        name: "Headphones",
        price: 149.99,
        quantity: 50,
        lowStockLevel: 20
    },
    {
        name: "Keyboard",
        price: 79.99,
        quantity: 30,
        lowStockLevel: 10
    },
    {
        name: "Mouse",
        price: 39.99,
        quantity: 40,
        lowStockLevel: 15
    }

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

];

// Print inventory to verify
console.log(inventory);
