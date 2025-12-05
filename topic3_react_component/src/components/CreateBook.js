import { Link, useNavigate } from "react-router-dom";

function CreateBook({ action, data }) {
    const { books, authors, publishers } = data;

    const navigate = useNavigate();
    
    // Xử lý tạo mới cuốn sách
    const handleCreateBook = () => {
        // Giả sử sự kiện đã lưu dữ liệu thành công thì điều hướng về /admin/books
        if(window.confirm("Do you want back to list?")){
            navigate("/admin/books");
        }
    }

    return (
        <form className='mb-3'>
            <div className="col-12 mt-3 mb-3" style={{ border: "none" }}>
                <Link to={'/admin/books'} className="btn btn-primary">Back to list</Link>
            </div>
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
            <button className='btn btn-success' onClick={()=>handleCreateBook()}>Create</button>
        </form>
    )
}

export default CreateBook;