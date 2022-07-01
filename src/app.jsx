import React from 'react'
import makePdf from 'make_pdf'
import './app.css'

function App() {
    const pdf = makePdf()

    const onClick = async (e) => {
        e.preventDefault()
        await pdf.viewWithPdf()
    }

    return (
        <div className='div_container'>
            <div className='div_paper'>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officiis at iure sapiente maxime provident possimus dolorum eveniet illo nisi ullam, animi sunt nobis, error consequatur quos facere. Perspiciatis, harum.
                </div>
            </div>
            <button onClick={onClick}>pdf로 보기</button>
        </div>
    )
}

export default App