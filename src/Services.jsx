import React from 'react';
import Card from './Card'
const Service = ()=> {
  return(
    <>
 <div className="my-5">
 <h1 className="text-center">Our Service</h1>
 </div>
 <div className="container-fluid mb-5">
   <div className="row">
     <div className="col-10 mx-auto">
     <div className="row gy-4">
       
         <Card img="https://www.maacindia.com/images/courses/course-img-35.jpg"
           title="Software course"/>

<Card img="https://www.maacindia.com/images/courses/course-img-35.jpg"
           title="photography course"/>


<Card img="https://www.maacindia.com/images/courses/course-img-35.jpg"
           title="Art course"/>


<Card img="https://www.maacindia.com/images/courses/course-img-35.jpg"
           title="Wev Devlopment course"/>


<Card img="https://www.maacindia.com/images/courses/course-img-35.jpg"
           title="Data Engineer course"/>


<Card img="https://www.maacindia.com/images/courses/course-img-35.jpg"
           title="Crptocurrency course"/>
        </div>
       </div>
   </div>
 </div>
 </>
  );
}
export default Service;
