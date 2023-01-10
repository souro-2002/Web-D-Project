import React,{useState} from 'react'

export default function Textform() {
    const [text, settext] = useState('Write your text here')
    const handleChange=(event)=>{
        settext(event.target.value)
    }
    const handleUpper=()=>{
        let newtext=text.toUpperCase()
        settext(newtext)
    }
    const handleLower=()=>{
        let newtext=text.toLowerCase()
        settext(newtext)
    }
    const handleSpace=()=>{
        let a=text.split(' ')
        settext(a.join(""))
    }
    const handleClear=()=>{
        settext("")
    }
    const count=()=>{
        let l=text.split(' ')
        let st=`Number of words in the text is ${l.length}`
        alert(st)
    }
    const handleReplace=()=>{
        let word=prompt("Enter the word that you want to replace:")
        let to_replace=prompt("Enter the word to replace it with:")
        let regex=new RegExp(word,"gi")
        let newtext=text.replace(regex,to_replace)
        settext(newtext)
    }
    const copy=()=>{
        let box=document.body.querySelector('.container textarea')
        box.select()
        document.execCommand('copy')
        alert("Copied to clipboard")
    }
  return (
    <>
        <div className="container">
            <h1 style={{textAlign:'center'}}>Enter your text here</h1>
            <textarea value={text} onChange={handleChange} name="words" cols="30" rows="10"></textarea>
            <div className="btns">
                <button className="btn" onClick={handleUpper}>Convert to Uppercase</button>
                <button className="btn" onClick={handleLower}>Convert to Lowercase</button>
                <button className="btn" onClick={handleSpace}>Delete Spaces</button>
                <button className="btn" onClick={handleClear}>Clear Text</button>
                <button className="btn" onClick={count}>Count Words</button>
                <button className="btn" onClick={handleReplace}>Replace Words</button>
                <button className="btn" onClick={copy}>Copy to Clipboard</button>
            </div>
        </div>
    </>
  )
}
