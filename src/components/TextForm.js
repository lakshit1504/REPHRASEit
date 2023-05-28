import React, {useState} from 'react'

export default function TextForm
(props) {
    const handleupClick=()=>{
        // console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("CONVERTED TO UPPER CASE","success");
    }
    const handlelowClick=()=>{
        // console.log("clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case","success");

    }
    const handleClear=()=>{
        // console.log("clicked");
        // let newText = text.toLowerCase();
        setText("");
        props.showAlert("text cleared","success");

    }
    const handleCopy = () => {
        // let text=document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("copied to clipboard","success");
        
     }
     const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra space removed","success");

     }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    
    const [text,setText] =useState('');

  return (
    <div>
        <div className="container">
            <h1 className={`hey  text-${(props.mode==='light')? 'dark':'light'} `}>{props.heading}</h1>
            <div className="mb-3" >
            <textarea className={`form-control   text-${(props.mode==='light')? 'dark':'light'}`} value= {text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#153f64'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleupClick} >convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handlelowClick} >convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleClear} >clear text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCopy} > copy To Clipboard</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces} >Handle Extra Spaces</button>



        </div>
        <div className={`container   text-${(props.mode==='light')? 'dark':'light'}`}>
            <h2>Word Summary</h2>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2 >Preview</h2>
            <p>{text.length>0?text:"Nothing To Preview"}</p>
        </div>
    </div>
  )
}
