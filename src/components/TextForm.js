import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log ("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        // console.log ("upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", "success");
    }

    const handelClearClick = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
        
    }
    
    const handleOnChange = (event) => {
        // console.log ("Onchange");
        setText(event.target.value);
        
    }

    const handelCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const[text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handelClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handelCopy}>Copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>remove extra space text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some thing to preview it here"}</p>
    </div>
    </>
  )
}
