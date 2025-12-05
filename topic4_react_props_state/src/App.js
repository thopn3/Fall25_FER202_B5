import StateInClassComp from "./components/StateInClass"
import StateInFnComp from "./components/StateInFnComp";

const App = () => {
  const database = {
    books: [
      { bId: 1, title: 'Data Struct', aId: [1, 2], pId: 1, comments:[{uId:1, cId:1}, {uId:2, cId:2}] },
      { bId: 2, title: 'Programming with C', aId: [2], pId: 1, comments:[{uId:1, cId:3}, {uId:3, cId:4}] },
      { bId: 3, title: 'NodeJS app development', aId: [1, 2, 3], pId: 2 }
    ],
    authors: [
      { auId: 1, name: "Hoàng Hải Nam" },
      { auId: 2, name: "Ngô Thu Hồng" },
      { auId: 3, name: "Phạm Minh Đức" }
    ],
    publishers: [
      { pubId: 1, name: "NXB Giáo Dục" },
      { pubId: 2, name: "NXB KH-CN" }
    ], 
    users: [
      {userId: 1, name: "Tuấn"},
      {userId: 2, name: "Hưng"},
      {userId: 3, name: "Nga"}
    ],
    comments: [
      {comId:1, text: "Rất hay"},
      {comId:2, text: "Rất rất hay"},
      {comId:3, text: "Nên ra nhiều tập tiếp theo"},
      {comId:4, text: "Bình thường"}
    ]
  }

  return <>
    {/* Gọi các component biểu diễn state trong React */}
    {/* <StateInClassComp/> */}
    <StateInFnComp data={database}/>
  </>
}

export default App;