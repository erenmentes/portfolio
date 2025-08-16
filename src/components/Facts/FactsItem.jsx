import React, { useEffect, useState } from 'react'
import fetchFactsApi from '../../Api/FactsAPI';
import './FactsItem.css'

const FactsItem = () => {

  const [fact, setFact] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchFactsApi();
      setFact(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(fact);
  }, [fact]);

  return (
    <div className='factItem'>
      <p className='fact'>{fact.text}</p>
    </div>
  )
}

export default FactsItem;