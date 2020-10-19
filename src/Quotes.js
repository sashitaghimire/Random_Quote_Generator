import React,{useState,useEffect} from 'react'
import './Quotes.css';
import {Button} from "@material-ui/core";


function Quotes() {
    const[quotes, setQuotes] = useState("");

    const getRandomQuote = () =>{
      fetch("https://type.fit/api/quotes").then((res)=>res.json()).then((data)=>{
          let randomNum= Math.floor(Math.random()* data.length);
          setQuotes(data[randomNum])
      
    });
  
    };

    useEffect(()=>{
        getRandomQuote();
    },[]);
    return (
        <div className="quotes">
            <div className="quote">
            <p>{quotes.text}</p>

            </div>
            <div className="quote__author">
           <p> {quotes.author}</p>

            </div>
           
             <Button onClick={getRandomQuote}>
        Get Quote
      </Button>
      <a href="#">
          <Button>Tweet</Button>
      </a>
        </div>
    )
}

export default Quotes;
