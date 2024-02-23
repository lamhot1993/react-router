import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import List from '../Components/List';
import Navbar from '../Components/Navbar';
function Home(){
    const [getValue,setValue] = useState([]);

    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setValue(data);
     }

    return (
        <>
        <Navbar/>
        <br/>
        <Card value="Home Page"/>
        <div className='container'>
        <br/>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAdd">Add</button>
        </div>
        <>
        <div className="modal fade" id="modalAdd" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
                Modal
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save </button>
            </div>
            </div>
        </div>
        </div>
        </>
        <br/>
        <List value={getValue}/>
        </>
    )
}

export default Home;