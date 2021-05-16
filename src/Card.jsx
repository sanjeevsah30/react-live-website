import react from 'react';
import { NavLink } from 'react-router-dom';
const Card=(props)=>{
    return(
        <>
       
        <div className="col-md-4 col-10 mx-auto">
        <div className="card" style={{width: "18rem"}}>
<img src={props.img} className="card-img-top" alt="..."/>
<div className="card-body">
 <h5 className="card-title font-bold "> {props.title}</h5>
 <p className="card-text font-smaller ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 <NavLink to="" className="btn btn-primary">Buy</NavLink>
</div>
</div>

  </div>
            
            </>

    );
}

export default Card;