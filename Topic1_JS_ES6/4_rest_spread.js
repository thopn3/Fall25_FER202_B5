// Làm việc với tham số rest -> Đa dạng quá trình định nghĩa hàm
function Sum(...params){
    let total = 0;
    for(let item of params)
        total += item;
    return total;
}

// Thực thi hàm có tham số rest
console.log(`Sum1 = ${Sum(10, 20, 30)}`);
console.log(`Sum2 = ${Sum(20, 30)}`);
console.log(`String = ${Sum("Hello ", "World!")}`);

let numbers = [1, 2, 3, 4, 5];
console.log(`Sum numbers = ${Sum(...numbers)}`); // ...numbers => 1,2,3,4,5

// Toán tử spread -> Trải các phần tử của mảng
let m1 = [1, 2, 3];
const m2 = ['Hòa', 'Nam', 'Tuấn'];
// Thêm các phần tử từ mảng m2 vào mảng m1
m1 = [...m1,...m2];
console.log(m1);



