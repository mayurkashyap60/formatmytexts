import React, { useState } from 'react'

export default function FMTBody() {

    const [text, setText] = useState("");

    const onchangeHandler = (event) => {
        setText(event.target.value)
    }

    //For Sentence Case
    const sentenceHandler = () => {
        let newText = text.split('. ').map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()).join('. ');
        setText(newText);
    }

    //For Lowercase
    const lowerHandler = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    //For Uppercase
    const upperHandler = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    //For Capitalized Case
    const capitalizedHandler = () => {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newText);
    }

    //For Alternating Case
    const alternatingHandler = () => {
        let newText = text.split('').map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
        setText(newText);
    }

    const smallWords = new Set(["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "from", "by", "in", "of", "with", "as", 'is']);

    //For Title Case
    const titleHandler = () => {
        let newText = text.toLowerCase().split(' ').map((word, index, arr) => {
            if (index === 0 || index === arr.length - 1 || !smallWords.has(word)) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return word;
            }
        }).join(' ');
        setText(newText);
    }

    //For Inverse Case
    const inverseHandler = () => {
        let newText = text.split('').map(char =>
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() // Swap case
        ).join('');
        setText(newText);
    }

    //For Copy Button
    const copyHandler = (event) => {
        navigator.clipboard.writeText(text) // Copy to clipboard
            .then(() => {
                alert("Text copied successfully!");
            })
            .catch(err => {
                alert("Failed to copy: ", err);
            });
    }
    //For Clear 
    const clearHandler = () => {
        setText("");
    }



    return (
        <div className='w-full h-full bg-gray-200 p-4'>
            <div>
                <h1 className='text-3xl'>Format My Texts</h1>
                <p className='mt-2'>Enter your text and choose the case you want to convert it to</p>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter you text here' className='bg-white w-full mt-5 p-3 rounded-md' onChange={onchangeHandler} value={text}></textarea>
            <div className='mt-2 flex flex-wrap gap-x-4 gap-y-2'>
                <button className='bg-[#27548A] text-white p-2 rounded-sm cursor-pointer' onClick={sentenceHandler}>Sentence Case</button>
                <button className='bg-[#27548A] text-white p-2 rounded-sm cursor-pointer' onClick={lowerHandler}>Lower Case</button>
                <button className='bg-[#27548A] text-white p-2 rounded-sm cursor-pointer' onClick={upperHandler}>Upper Case</button>
                <button className='bg-[#27548A] text-white p-2 rounded-sm cursor-pointer' onClick={capitalizedHandler}>Capitalized Case</button>
                <button className='bg-[#27548A] text-white p-2 rounded-sm cursor-pointer' onClick={alternatingHandler}>Alternating Case</button>
                <button className='bg-[#27548A] text-white p-2 rounded-sm cursor-pointer' onClick={titleHandler}>Title Case</button>
                <button className='bg-[#27548A] text-white p-2 rounded-sm cursor-pointer' onClick={inverseHandler}>Inverse Case</button>
                <button className='bg-[#27548A] text-white p-2 rounded-sm cursor-pointer' onClick={copyHandler}>Copy To Clipboard</button>
                <button className='bg-[#27548A] text-white p-2 rounded-sm cursor-pointer' onClick={clearHandler}>Clear</button>
            </div>
        </div>
    )
}
