import React,{useState} from 'react'

export default function TextForm(props) {
        //for convert to upper case
    const handleUpCLick =() =>{  
    let  newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success");
    }
    //for lower case
    const handleLoCLick =() =>{  
        let  newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
        }
    //for clear text
    const handleClear =() =>{  
        let  newText= "";
        setText(newText)
        props.showAlert("Cleared text", "success");
        }
    
    //for removing extra spaces
        const handleExtraSpaces=()=>{
            let newText= text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Extra Spaces removed", "success");
        }

    const handleOnChange =(event) =>{
        setText(event.target.value)
    }  
    
    const handleCopy=() =>{ 
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Copied to clipboard", "success");
    }

    const [text, setText]= useState('');
        // text="tew text here" // wrong way to change the state
        // setText("tew text here") // Correct way to change the state 
        return (
            <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="mybox"  rows="10"></textarea>
                </div>
                <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleUpCLick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoCLick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summery</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes to read </p>
            </div>
            </>
    )
}
