import React from "react";
import ReactDom from 'react-dom';

//Nested Components


function Greeting(){ //component
    return(
        <div>
            {/* components inside component */}
            <Person/>  
            <Message/>
        </div>
    );
}

const Person = ()=> <h1>David Sams</h1>; //component
const Message= ()=> <p>This is a message.</p> ; //component

ReactDom.render(<Greeting/>, document.getElementById('root'));