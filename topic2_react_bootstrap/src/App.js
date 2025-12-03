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
          <form className='mb-3'>
            <h2 className='text-center'>Create a new Book</h2>
            <div className='mb-3'>
              <label className='form-label'>BookId</label>
              <input className='form-control' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Title</label>
              <input className='form-control' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Authors</label><br />
              {
                authors?.map(a => (
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" value={a?.auId} />
                    <label class="form-check-label">{a.name}</label>
                  </div>
                ))
              }
            </div>
            <div className='mb-3'>
              <label className='form-label'>Publisher</label><br />
              <select class="form-select">
                <option selected>-- Choice a publisher --</option>
                {
                  publishers?.map(p => (
                    <option value={p?.pubId}>{p?.name}</option>
                  ))
                }
              </select>
            </div>
            <button className='btn btn-success'>Create</button>
          </form>
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
