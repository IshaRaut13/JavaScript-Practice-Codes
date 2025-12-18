// For a given array with prices of 5 items --> [250,645,300,900,50]
//All the items have an offer of 10% OFF on them.
//Change the array to store final price after applying offer.

let items = [250,645,300,900,50]
for (let item of items) {
    offer = (item*10/100)
    Final_price = item - offer
    console.log(`After applying 10% OFF on the item ${item}. The final price is ${Final_price} `)
}