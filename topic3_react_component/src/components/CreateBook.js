function CreateBook() {
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
    )
}

export default CreateBook;