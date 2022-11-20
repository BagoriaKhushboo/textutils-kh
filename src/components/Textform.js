import React, {useState} from "react"


function TextForm(props){
   
   const UpperClick =()=>{
   
    // console.log("uppercase button was clicked");
   let newText=Text.toUpperCase();
    setText(newText);
   }
   const LowerClick=()=>{
    let newText=Text.toLowerCase();
    setText(newText);
   }
   const HandleOnChange =(event)=>{
    // console.log("on change");
    setText(event.target.value);  
   
   }
   const ClearClick=()=>{
    let newText="";
    setText(newText);
   }
   
   
   const handleExtraSpaces = ()=>{
    let words = Text.split(/[\s]+/);
    let joinedWords=words.join(" ");
     setText(joinedWords);
      }

const copyTextHandle=()=>{
    let seletText= document.getElementById('text-box');
    seletText.select();
    navigator.clipboard.writeText(seletText.value);
}
  
    const[Text , setText]=useState('');
  
    return(
        <>
        
  
   <div className="mb-3 box-m">
   <h4 className="my-3">{props.heading}</h4>
   <textarea className="form-control"  value= {Text} onChange ={HandleOnChange} id="text-box" rows="6" placeholder="Start to Write here...."></textarea>
   <button className="btn btn-secondary my-4" onClick={UpperClick}>Uppercase</button>
    <button className="btn btn-secondary mx-3 my-4" onClick={LowerClick}>Lowercase</button>
    <button className="btn btn-secondary mx-3 my-4" onClick={handleExtraSpaces}>Remove Spaces</button>
    <button className="btn btn-secondary mx-3 my-4" onClick={copyTextHandle}>Copy Text</button>
    <button className="btn btn-secondary my-4" onClick={ClearClick}>Clear</button>
   

   <div className="t-summry">
   <span>{Text.split(" ").length} words and {Text.length} charachters</span>
   <h3>Preview</h3>
   <p>{Text}</p>
   </div>
   </div>
  
   

        </>
    );
}
export default TextForm;