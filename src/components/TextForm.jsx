import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text")
    const handleUpCase = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleLowerCase = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)

    }
    const CountWords = ()=>{
        let words = text.split(" ")
        setText("Words: "+(words.length).toString())

    }
    const CountChars = ()=>{
        setText("You clicked CountChars Button")

    }
    const handleChange = (e)=>{
       setText(e.target.value)

    }
    const CopyToClipboard = ()=>{
        navigator.clipboard.writeText(text);
        alert("Copied to Clipboard");
    }
    return (
        <>
            <div className={`mb-3 mt-3 text-${props.Mode === 'dark'?"light":"dark"}`}>
                <h1>{props.Heading}</h1>
                <textarea className="form-control mb-3" style={{backgroundColor:props.Mode === 'light'?'white':"#212529", color:props.Mode === 'light'?'black':"white"}} placeholder="Enter Text Here" onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <div className='Buttons'>
                    <button className='btn btn-primary' onClick={handleUpCase}>Conert to uppcase</button>
                    <button className='btn btn-primary mx-3' onClick={handleLowerCase}>Conert to Lowercase</button>
                    <button className='btn btn-primary mx-3' onClick={CountWords}>Count words</button>
                    <button className='btn btn-primary mx-3' onClick={CountChars}>Count Charecters</button>
                    <button className='btn btn-primary mx-3' onClick={CopyToClipboard}>Copy text</button>
                </div>
                <div>
                    <label className='mt-4 p-3 fs-5 border rounded border-secondary border-2'><span className='fs-4 fw-bold mx-3 text-primary'>Result:</span> {text}</label>
                </div>
            </div>
        </>
    )
}
