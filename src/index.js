import React from "react";
import ReactDom from "react-dom";

//stateless functional components= always returns jsx 

// react with jsx
//if you have more than one elements
// function Greeting(){
//     return <div>
//         <h1>Myself Pukar and its my first components.</h1>
//     </div>     
// }
 
// react without jsx
// for multiple elements
const Greeting= ()=>{
    return React.createElement('div', {}, React.createElement('h1', {}, 'its multiple element, component without jsx'));
}

ReactDom.render(<Greeting/>, document.getElementById('root'));