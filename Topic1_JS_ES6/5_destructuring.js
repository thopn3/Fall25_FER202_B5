// Kỹ thuật phân rã đối tượng và mảng
const data = [
    {id: 1, name: "Hoàng"},
    {id: 1, course: "Front-End with React", credit: 3}
];

// Thực hiện phân rã mảng -> Tách các phần tử trong mảng thành các biến mới
const [student, courseInfo] = data;
console.log(`Student info: ${student.id} - ${student.name}`);
console.log(`Course info: ${courseInfo.id} - ${courseInfo.course} - ${courseInfo.credit}`);

const database = {
    books: [
        {bId:1, title: 'Data Struct', aId: [1,2], pId: 1},        
        {bId:2, title: 'Programming with C', aId: [2], pId: 1},        
        {bId:3, title: 'NodeJS app development', aId: [1, 2, 3], pId: 2}        
    ],
    authors: [
        {auId: 1, name: "Hoàng Hải Nam"},
        {auId: 2, name: "Ngô Thu Hồng"},
        {auId: 3, name: "Phạm Minh Đức"}
    ],
    publishers: [
        {pubId: 1, name: "NXB Giáo Dục"},
        {pubId: 2, name: "NXB KH-CN"}
    ]
}

// Phân rã đối tượng DB thành các đối tượng con riêng biệt
const {books, authors, publishers} = database; 

// YC1: Liệt kê danh sách các cuốn sách bao gồm thông tin của tác giả (tên) và nxb (tên)
// Output mẫu:
// const result = books.map(b => ({
//     bId: b.bId,
//     title: b.title,
//     authors: authors.filter(a => b.aId.includes(a.auId)).map(au => au.name),
//     publisher: publishers.find(p => p.pubId===b.pId).name
// }));

const result = books.map(({bId, title, aId, pId}) => ({
    bId: bId,
    title: title,
    authors: authors.filter(({auId}) => aId.includes(auId)).map(({name}) => name),
    publisher: publishers.find(({pubId}) => pubId===pId).name
}));

console.log(result);

// YC2: Liệt kê danh sách các tác giả thông qua thực thi hàm
const listAuthors = (authors=[]) => {
    authors.map(({name})=>console.log(name))
};

listAuthors(authors);
