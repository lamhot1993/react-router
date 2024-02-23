function Card(props){
    return (
       <div className="container">
         <div className="card">
            <div className="card-body">
              {props.value}
            </div>
        </div>
       </div>
    )
}

export default Card;