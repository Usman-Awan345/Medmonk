import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import StepperForm from '../components/StepperForm'

function MultiStepsForm() {
  return (
    <div className='flex '>
      <Sidebar/>
      
       <div className='flex-1 flex flex-col '>
        
      <Header/>
      <StepperForm/>
        </div> 
      
    </div>
  )
}

export default MultiStepsForm
