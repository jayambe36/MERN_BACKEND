let name = 'smit'
console.log(name) // smit
console.log(global.name) // undefined

// In the above example, we have a variable called name. When we log the name variable, it logs the value of the name variable. However, when we log global.name, it logs undefined. This is because the name variable is not a property of the global object. It is a local variable that is only accessible within the current module.
