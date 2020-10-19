import React,{useState, useEffect, useRef} from 'react'
import './Quotes.css';
import {Button} from "@material-ui/core";
import quote from './image/quote.png';


function Quotes() {
    const[quotes, setQuotes] = useState("");
    const textRef = useRef();

    let colors = ["#336d88","#024249", "4d3e3e", "#45046a","#393e46", "#512b58","#552244"];

    const getRandomQuote = () =>{
      fetch("https://type.fit/api/quotes").then((res)=>res.json()).then((data)=>{
          let randomNum= Math.floor(Math.random()* data.length);
          setQuotes(data[randomNum])
      
    });
  
    };

    useEffect(()=>{
        getRandomQuote();
    },[]);

    useEffect(()=>{
        textRef.current.style.color = colors[Math.floor(Math.random()*colors.length)];
    },[quotes]);
    return (
        <div className="quote">
            <div className="quotes">
                <img src={quote} />
            <p ref={textRef}> "{quotes.text}"</p>
            <p style={{fontWeight:400}}> Author: {quotes.author}</p>
            
           
            
           
           <div className="quotes__button">
           <Button  onClick={getRandomQuote}>
        Get Quote
      </Button>
      <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} target="__blank" rel="noopener noreferrer" className="quotes__link">
          <Button >Tweet</Button>
      </a>
           </div>
        </div>
        </div>
    )
}

export default Quotes;
