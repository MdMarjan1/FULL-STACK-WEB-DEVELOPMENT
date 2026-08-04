const generateReceipt = ( customerName, items, total ) =>{
    if(!Array.isArray(items) || items.length === 0){
        return `Invalid`
    }
    else{
        return `Receipt for ${customerName}\nItems: ${items.join(", ")}\nTotal: ৳${total}`
    }
}

console.log(generateReceipt("Rakib", ["Pen","Book"], 150));

console.log(generateReceipt("Sadia", ["Milk"], 60));

console.log(generateReceipt("Tanvir", [], 0));