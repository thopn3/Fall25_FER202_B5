// Fn -> Cổ điển
function Sum(a, b){
    return a + b;
}

// Fn -> Hàm mũi tên. Lambda Expresion syntax: () => body
const Sum1 = (a, b) => a + b;

const Sum2 = n => {
    let total = 0;
    for(let i=0; i<=n; i++)
        total += i;

    return total;
}

console.log(`Sum = ${Sum(10, 20)}`); // String Interpolation
console.log(`Sum1 = ${Sum1("Hello ", "World")}`);
console.log(`Sum2 = ${Sum2(10)}`);


