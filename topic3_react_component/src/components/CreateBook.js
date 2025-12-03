function CreateBook({action, data}) {
    
  const { books, authors, publishers } = data;
    return (
        <form className='mb-3'>
            <h2 className='text-center'>{action}</h2>
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