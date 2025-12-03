import logo from './logo.svg';
import './App.css';
import ListBook from './components/ListBook';
import CreateBook from './components/CreateBook';

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

  const { books, authors, publishers } = database;

  return (
    // JSX (Javascript Extends) syntax
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
          <CreateBook/>
          <ListBook/>
        </div>
      </div>

      {/* Footer */}
      <div className='row'>
        <div className='col-12'>Footer</div>
      </div>
    </div>
  );
}

export default App;
