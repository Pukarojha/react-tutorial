import React from "react";
import reactDom from "react-dom";
import './index.css';

function BookList() {
  return(
  <div className="abt">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </div>
  );
}
const Book= ()=> {
  return(
    <React.Fragment>
      <div className= "book">
      <Img/>
      <Title/>
      <Author/>
      </div>
    </React.Fragment>
  )
}
const Img= ()=> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm94576P8Pdi5m9n4c2V5IIXl3wYsWjxndnQ&usqp=CAU" alt="" srcset="" />;
const Author= ()=> <p>Himanshu.</p>;
const Title= ()=> <h3>Love you Moon and the back.</h3>;


reactDom.render(<BookList />, document.getElementById("root"));
