import React from 'react';
import ReactDom from 'react-dom';

function BookList(){
    return(
        <React.Fragment>
            <h1>This is booklist.</h1>
            <Book/>
            <Book/>
            <Book/>
        </React.Fragment>
    );
}
const Image=()=>{
    return(
        <React.Fragment>
            <img src='https://images-na.ssl-images-amazon.com/images/I/51qqyWNHGIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' alt="" /> 
        </React.Fragment>
    );
}
const Book=()=>{
    return(
        <React.Fragment>
            <Image/>
            <Title/>
            <Author/>
        </React.Fragment>
    );
}

const Title=()=>{
    return(
        <React.Fragment>
            <p>Life's Greatest Lesson.</p>
        </React.Fragment>
    );
}
const Author= ()=>{
    return(
        <React.Fragment>
            <p>Micheal Oliver</p>
        </React.Fragment>
    );
}
    

ReactDom.render(<BookList/>, document.getElementById('root'));