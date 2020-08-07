import React from 'react';
import { Card} from '../card/Card';
import './card-list.css'

 export const CardList = props => {
    console.log(props.monsters.length)
    if(!props.monsters.length){
        return <h3 className='notfound'>Monster not found!</h3>
    }
  return(
    <div className='card-list'> 
        {props.monsters.map(monster => (
            
        <Card key={monster.id} monster={monster}/> 
    ))}
        </div>
  )
 }