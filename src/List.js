import React from 'react'

const List = ({people}) => {
  return (
    <div>
        {people.map((person)=>{
            const {id,name,age,image} = person ;
            return(
                <div key={id} className='person'>
                    <img src={image} alt={name} width='300' height='200'/>
                    <div className=''>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>

                </div>
            )
        })}
    </div>
  )
}

export default List