import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({id,superhero, alter_ego, characters, first_appearance}) => {
    
    const heroImageUrl = `./assets/heroes/dc-arrow.jpg`

  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'> 
                    <img 
                        src={require(`../../../assets/heroes/${id}.jpg`)}
                        alt={ superhero }
                        className='img-thumbnail'/>
                </div>

                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{ superhero }</h5>
                        <p className='card-text'>{alter_ego}</p>
                        {
                            (alter_ego !== characters) && (<p>{characters}</p>)
                        }
                        <p className='card-text'>
                            <small>{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${ id }`}>
                            Mas..
                        </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

