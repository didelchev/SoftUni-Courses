import React from 'react'
import './PetCatalog.css'
import PetCard from '../../components/PetCard/PetCard'

export default function PetCatalog() {
  return (
    <div className='catalog-page'>
      <PetCard name= "Bugi" age={3} location="Sofia"/>
    </div>
  )
}
