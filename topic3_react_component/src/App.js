import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListBook from './components/ListBook';
import CreateBook from './components/CreateBook';

function App() {
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
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        {/* Header */}
        <div className='row'>
          <div className='col-12'>Header</div>
        </div>

        {/* Horizontal Menu */}
        <div className='row'>
          <div className='col-12 d-block d-md-none top-menu'>
            <ul>
              <li><a href='#'>Books</a></li>
              <li><a href='#'>Authors</a></li>
              <li><a href='#'>Publisher</a></li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className='row'>
          <div className='d-none d-md-block col-md-2'>
            <ul>
              <li><a href='#'>Books</a></li>
              <li><a href='#'>Authors</a></li>
              <li><a href='#'>Publisher</a></li>
            </ul>
          </div>
          <div className='col-12 col-md-10'>
            <Routes>
              <Route path='/admin/books' element={<ListBook action="List of Books" data={database} />} />
              <Route path='/admin/books/add' element={<CreateBook action="Create a new Book" data={database} />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <div className='row'>
          <div className='col-12'>Footer</div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
