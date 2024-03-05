import React, { useState } from 'react'

const Dropdown = () => {
    const colors = ['Red','Blue','Pink'];

    const[valor, setValor] = useState('');
    const[isExpanded, setIsExpanded] = useState(false)
    const toggling = () => setIsExpanded(!isExpanded)

    const onChange = (event) => {
        setValor(event.target.value)
    }
  return (
    <div>
      <div onClick={toggling}>
        Selecciona una opcion
      </div>
      {isExpanded && (
        <div>
            <ul>
                {colors.map(color => (
                    <li key={color} onChange={onChange}>
                        {color}
                    </li>
                ))}
            </ul>
        </div>
      )
      }
      <h1>{valor}</h1>
    </div>
  )
}

export default Dropdown
