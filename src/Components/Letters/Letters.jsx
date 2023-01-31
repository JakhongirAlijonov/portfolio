import React from 'react'
import './Letters.css'
function Letters(title) {

let splitted = title.title.split('')


  return (
    <div>
      <h1 className="title">
        {splitted.map((char)=>{
          return <span key={Math.random()} className='blast' >{char}</span>
        })}
      </h1>
    </div>
  )
}

export default Letters
