// Tìm hiểu về các từ khóa: let, var, const
// Từ khóa var
for(var i=0; i<5; i++){ // i: global
    console.log(i);
}
console.log(i);

// Từ khóa let
for(let j=0;j<5; j++){ // j: local
    console.log(j);
}
console.log(j);// Error: j is not defined

// Kết luận: let, const -> Đảm bảo phạm vi sử dụng là local (block scope)



