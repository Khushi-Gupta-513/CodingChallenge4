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
    // Function to update product stock after sales
function updateStock(product, unitsSold) {
    // Subtract unitsSold from the product's quantity
    product.quantity -= unitsSold;

    // Check stock levels and log appropriate messages
    if (product.quantity <= 0) {
        console.log(`${product.name} is now out of stock.`);
        product.quantity = 0;  // Ensures no negative quantities
    } else if (product.quantity <= product.lowStockLevel) {
        console.log(`${product.name} is now low on stock. Only ${product.quantity} units left.`);
    } else {
        console.log(`${product.name} updated. ${product.quantity} units remaining.`);
    }
}

// Example usage
updateStock({
    name: "Laptop",
    price: 999.99,
    quantity: 15,
    lowStockLevel: 5
}, 12);


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

// Function to check and log low stock products
function checkLowStock(inventory) {
    console.log("Low Stock Products:");
    inventory.forEach(product => {
        if (product.quantity < product.lowStockLevel) {
            console.log(`${product.name} is low on stock. Only ${product.quantity} units remaining.`);
        }
    });
}

// Example inventory array
const inventory = [
    { name: "Laptop", price: 999.99, quantity: 3, lowStockLevel: 5 },
    { name: "Smartphone", price: 599.99, quantity: 25, lowStockLevel: 10 },
    { name: "Headphones", price: 149.99, quantity: 18, lowStockLevel: 20 },
    { name: "Keyboard", price: 79.99, quantity: 30, lowStockLevel: 10 },
    { name: "Mouse", price: 39.99, quantity: 40, lowStockLevel: 15 }
];

// Example usage
checkLowStock(inventory);

// Function to calculate the total inventory value
function calculateInventoryValue(inventory) {
    return inventory.reduce((totalValue, product) => {
        return totalValue + (product.price * product.quantity);
    }, 0);
}

// Example inventory array
const inventory = [
    { name: "Laptop", price: 999.99, quantity: 3, lowStockLevel: 5 },
    { name: "Smartphone", price: 599.99, quantity: 25, lowStockLevel: 10 },
    { name: "Headphones", price: 149.99, quantity: 18, lowStockLevel: 20 },
    { name: "Keyboard", price: 79.99, quantity: 30, lowStockLevel: 10 },
    { name: "Mouse", price: 39.99, quantity: 40, lowStockLevel: 15 }
];

// Example usage
const totalValue = calculateInventoryValue(inventory);
console.log(`Total Inventory Value: $${totalValue.toFixed(2)}`);

// Function to process a sale
function processSale(inventory, productName, unitsSold) {
    const product = inventory.find(p => p.name === productName);
    
    if (product) {
        // Update stock and log the result
        updateStock(product, unitsSold);
    } else {
        console.log(`Error: ${productName} is not in the inventory.`);
    }
}

// Function to update product stock
function updateStock(product, unitsSold) {
    product.quantity = Math.max(product.quantity - unitsSold, 0);
    const status = product.quantity === 0 ? 'out of stock' :
                   product.quantity <= product.lowStockLevel ? 'low on stock' :
                   'updated';
    console.log(`${product.name} is now ${status}. ${product.quantity} units remaining.`);
}

// Example inventory array
const inventory = [
    { name: "Laptop", price: 999.99, quantity: 15, lowStockLevel: 5 },
    { name: "Smartphone", price: 599.99, quantity: 25, lowStockLevel: 10 },
    { name: "Headphones", price: 149.99, quantity: 50, lowStockLevel: 20 },
    { name: "Keyboard", price: 79.99, quantity: 30, lowStockLevel: 10 },
    { name: "Mouse", price: 39.99, quantity: 40, lowStockLevel: 15 }
];

// Example usage
processSale(inventory, "Laptop", 10);
processSale(inventory, "Tablet", 5);

