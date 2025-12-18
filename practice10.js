// create an array to store companies

let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix']
console.log("list of all companies", companies)


// a. Remove the first company from the array
console.log("Removed first company", companies.shift()) 
console.log(companies)


// b. Remove Uber and add Ola in its place
console.log("Remove Uber and add Ola in its place", companies.splice(1,1,"Ola")) 
console.log(companies)


// c. Add Amazon at the end
console.log("Adding Amazon at the end", companies.push("Amazon")) 
console.log(companies)