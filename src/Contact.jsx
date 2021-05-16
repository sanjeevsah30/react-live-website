import React, { useState } from 'react';
const Contact = ()=> {
    const[data,setdata]=useState({
        Fullname:"",
        Email:"",
        Phone:"",
        Query:"",
    })

    const InputEvent=(event)=>{
const{name,value}=event.target;
setdata((preVal)=>{
    return{...preVal  ,
    [name] :value,
};
}); 
    };
    const formsubmit=(e)=>{
e.prevenDefault();
alert(`my name is ${data.Fullname}.This is my email id ${data.Email} and phone no ${data.Phone} .This is my Query ${data.Query}` )
    };

  return(
  <div className="col-md-6 container justify-content-center">
<h1 className="heading d-flex justify-content-center">Contact Us</h1>

<div className="col-md-10 container justify-content-center">
<form onSubmit={formsubmit}>
<div className="form-group my-3">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="name " name="Fullname" value={data.Fullname} onChange={InputEvent}/>
  </div>


  <div className="form-group my-3">
    <label for="formGroupExampleInput">What your Emailid ?</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="name@gmail.com " name="Email" value={data.Email} onChange={InputEvent}/>
  </div>

  <div className="form-group my-3">
    <label for="formGroupExampleInput">What your phone no ?</label>
    <input type="number" className="form-control" id="formGroupExampleInput" placeholder="+91-xxxxxxxxxx " name="phone" value={data.Phone} onChange={InputEvent}/>
  </div>


  <div className="form-group mb-3">
    <label for="formGroupExampleInput2">Query</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" name="Query" value={data.Query} onChange={InputEvent} placeholder="Please Explain your Query  ! ! ! ! !        "/>
  </div>
  <div className="col-auto my-1">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
</form>
  </div>
  </div>
  );
}
export default Contact;
