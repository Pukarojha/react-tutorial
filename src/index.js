import React from "react";
import reactDom from "react-dom";
import './index.css';

function BookList() {
  return(
  <div className="abt">
    <Book/>
  </div>
  );
}
const author= 'Himanshu'
const Book= ()=> {
  const title= 'I love you moon and back'
  return(
    <React.Fragment>
      <div className= "book">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm94576P8Pdi5m9n4c2V5IIXl3wYsWjxndnQ&usqp=CAU" alt="" srcset="" />
        <p>{author.toUpperCase()}</p>
        <h3 style={{color:'#617d98',fontSize:'0.75rem', marginTop:'0.25rem'}}>{title}</h3>
      </div>
    </React.Fragment>
  )
}



reactDom.render(<BookList />, document.getElementById("root"));
