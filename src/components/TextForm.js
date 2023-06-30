import React, { useState } from "react";


export default function TextForm(props) {
  const [mytext, setMytext] = useState("");    
  const handleClearTextClick = () => {
    setMytext("");
    props.showAlert('Text Cleard','success');
  };
  const handleUpCaseClick = () => {
    setMytext(mytext.toUpperCase());
    props.showAlert('upper case done','success');
  };
  const handleLoCaseClick = () => {
    setMytext(mytext.toLocaleLowerCase());
    props.showAlert('lower case done','success');
  };
  const handleOnChange = (event) => {
    setMytext(event.target.value);
  };
  const handleCopyClipClick = () => {
    navigator.clipboard
      .writeText(mytext)
      .then(() => {
        props.showAlert('Copy to Clipboard','success');
      })
      .catch((error) => {
        props.showAlert('Error','danger');
      });
  }; 
  const removeSpaces = () => {
    setMytext(mytext.replace(/ {2,}/g,' '));
    props.showAlert('extra spaces removed','success');
  };
  return (
    <>
      <div className="container mb-3" style={{color : `${props.mode === 'light' ? 'black' : 'white'}`}}>
        <h1>{props.heading}</h1>
        <div className="mb-4" >
          <textarea
            value={mytext}
            onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            style={{color:`${props.mode === 'light' ? 'black' : 'white'}`, backgroundColor:`${props.mode === 'dark' ? '#0c1941' : 'white'}`}}
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleUpCaseClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleLoCaseClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleClearTextClick}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleCopyClipClick}>
          Copy to Clipboard
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={removeSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color : `${props.mode === 'light' ? 'black' : 'white'}`}}>
        <h1>Your text summery</h1>
        <p>Words: {mytext.trim().length !== 0 ?  mytext.trim().split(/\s+/).length : '0'} and Charectors: {mytext.length}</p>
        <p>{0.008 * mytext.split(" ").length} Minutes reading time</p>
        <h2>Privew Text</h2>
        <p>{mytext === '' ? 'Nothing to privew' : mytext}</p>

      </div>
    </>
  );
}
