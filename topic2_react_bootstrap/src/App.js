import logo from './logo.svg';
import './App.css';

function App() {
  const database = {
    books: [
      { bId: 1, title: 'Data Struct', aId: [1, 2], pId: 1 },
      { bId: 2, title: 'Programming with C', aId: [2], pId: 1 },
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
    ]
  }

  const {books, authors, publishers} = database;
  
  return (
    // JSX (Javascript Extends) syntax
    <div className='container-fluid'>
      {/* Header */}
      <div className='row'>
        <div className='col-12'>Header</div>
      </div>

      {/* Content */}
      <div className='row'>
        <div className='d-none d-sm-block col-sm-3 col-md-2'>
          Menu
        </div>
        <div className='col-12 col-sm-9 col-md-8'>
          <h2>List of Books</h2>
          {/* Đọc toàn bộ cuốn sách vào đặt tại table tại vị trí này */}
        </div>
        <div className='d-none d-md-block col-md-2'>Right</div>
      </div>

      {/* Footer */}
      <div className='row'>
        <div className='col-12'>Footer</div>
      </div>
    </div>
  );
}

export default App;
