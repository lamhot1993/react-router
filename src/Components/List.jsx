function List(props){
    function deleteData(id){
        alert(id)
    }
    return (
       <div className="container">
          <div className="card">
        <div className="card-body">
          <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">@</th>
    </tr>
  </thead>
  <tbody>
        {props.value.map((data,index)=>(
            <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td><button onClick={()=>{deleteData(data.id)}} className="btn btn-danger">x</button></td>
            </tr>
         ))}  
  </tbody>
</table>

        {/* <ul className="list-group">
           {props.value.map((data,index)=>(
                <li key={index} className="list-group-item">
                    {data.username} 
                    <button onClick={()=>{deleteData(data.id)}} className="btn btn-danger">x</button>
                </li>
            ))}  
         
         </ul> */}
        </div>
        </div>
       </div>
    )
}
export default List;