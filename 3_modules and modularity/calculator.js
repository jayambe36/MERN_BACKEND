function add(a,b, c) {
    console.log(a+b+c)
}

function sub(a,b) {
    console.log(a-b)
}

function mult(a,b,c) {
    console.log(a*b*c)
}

function div(a,b) {
    console.log(a/b)
}



module.exports = {
    addition : add,
    sub : sub,
    mult : mult,
    div : div

}