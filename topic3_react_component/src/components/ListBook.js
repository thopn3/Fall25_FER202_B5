// Định nghĩa 1 class component
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListBook extends Component {
    // Hàm khởi tạo -> Khởi tạo props (properties) và state cho component
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    render() {
        const { action, data } = this.props;
        const { books, authors, publishers } = data;

        const result = books.map(({ bId, title, aId, pId }) => ({
            bId: bId,
            title: title,
            authors: authors.filter(({ auId }) => aId.includes(auId)).map(({ name }) => name),
            publisher: publishers.find(({ pubId }) => pubId === pId).name
        }));

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center">{action}</h3>
                    </div>
                    <div className="col-12 text-end mt-3 mb-3" style={{border:"none"}}>
                        <Link to={'/admin/books/add'} className="btn btn-primary">Create new Book</Link>
                    </div>
                    <div className="col-12">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Authors</th>
                                    <th>Publisher</th>
                                    <th colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result?.map(b => (
                                        <tr key={b?.bId}>
                                            <td>{b?.bId}</td>
                                            <td>{b?.title}</td>
                                            <td>{b?.authors.join("; ")}</td>
                                            <td>{b?.publisher}</td>
                                            <td>
                                                <button className="btn btn-warning">Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListBook;