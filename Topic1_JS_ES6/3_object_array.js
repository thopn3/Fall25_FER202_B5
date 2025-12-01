// Object:
const student = {
    id: 1,
    name: "Hoàng Nam",
    age: 20
}

console.log(student);
// Truy xuất vào các thuộc tính
const showInfo = (s) => console.log(`Id: ${s.id}, Name: ${s.name}, Age: ${s.age}`);
showInfo(student);

// Array trong JS giống collection (OOP)
const names = ["Hoàng", 'Tuấn', 'Bình', "Đức"];
const complexTypes = [10, true, "Hello", student];

// Thêm 1 phần tử mới vào vị trí cuối của mảng
names.push('Dũng');
// Thêm 1 phần tử vào vị trí theo index
names[0] = 'Hồng';
console.log(names);

console.log(complexTypes);

// Mảng của các đối tượng
const listOfStudent = [
    student,
    {id: 2, name: "Bình Minh", age: 19},
    {id: 3, name: "Hoàng Tuấn", age: 21}
]
console.log(listOfStudent);

// Hoạt động trên mảng: listOfStudents. Xây dựng thành các hàm (tái sử dụng)
// 1. Thêm mới 1 phần tử vào mảng và in ra

// 2. In các sinh viên có name bắt đầu bởi chuỗi nhập vào. Nếu không tìm thấy, in ra "Not found"

// 3. Cập nhật name và age của sinh viên tìm thấy theo id (input: id, name, age | output: danh sách sau khi update)

// 4. Tìm sinh viên theo id và xóa khỏi danh sách. In ra sau khi đã xóa




