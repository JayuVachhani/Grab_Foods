import React from 'react'
import './Common.css'

export const Common = (props) => {
  return (
    <div className="allFood_common">
      <div className="container">
        <h2 className="common_title">{props.title}</h2>
      </div>
    </div>
  )
}
