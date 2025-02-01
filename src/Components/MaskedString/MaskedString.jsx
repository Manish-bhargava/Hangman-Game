import React from 'react'
import Button from '../Buttons/Button';
import Masked from './Masked'
function MaskedString({actualWord,guessesWord,imageHandler}) {
    const ans=Masked(actualWord,guessesWord);
    
   
     
  return (
    <>
     
  <div>
{
        ans.map((i)=>{
      return <span className='text-orange-500 m-1 '>{i}</span>
        })
}
  </div>
    </>
  )
}

export default MaskedString