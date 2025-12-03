// Định nghĩa 1 class component
import React, { Component } from "react";

class ListBook extends Component {
    // Hàm khởi tạo -> Khởi tạo props (properties) và state cho component
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center">List of Books</h3>
                    </div>
                    <div className="col-12">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Year</th>
                                    <th>Release Year</th>
                                    <th>Authors</th>
                                    <th>Publisher</th>
                                    <th colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Data Struct</td>
                                    <td>2024</td>
                                    <td>2025</td>
                                    <td>Hoàng Hải; Thu Hồng</td>
                                    <td>NXB KH-CN</td>
                                    <td>
                                        <button className="btn btn-warning">Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListBook;