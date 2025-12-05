import { useState } from "react"

export default function StateInFnComp({data}){
    const {books, authors, publishers} = data;
    // Phase 1: Initialization
    const [loading, setLoading] = useState(true);
    const [listBook, setListBook] = useState([]);
    
    // Phase 3: Updation
    setTimeout(()=> {
        setLoading(false)
        setListBook([...books]);
    }, 3000);

    // Phase 2: Mounting
    return (
        <div>
            {loading ? <h3>Book loading ...</h3> : (
                <table>
                    <thead>
                        <tr>
                            <th>BookId</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listBook?.map(b => (
                                <tr key={b.bId}>
                                    <td>{b.bId}</td>
                                    <td>{b.title}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}