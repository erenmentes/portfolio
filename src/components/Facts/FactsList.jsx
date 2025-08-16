import React from 'react'
import FactsItem from './FactsItem';
import './FactsList.css'

const FactsList = () => {
  return (
    <div>
      <h2 className='factsTitle'>random useless fact /</h2>
      <FactsItem/>
    </div>
  )
}

export default FactsList;   