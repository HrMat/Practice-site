import { useState } from 'react'
import { CurrencyButton, CalcButton, ConvButton, Div } from './style'
import Calculator from '../../components/Calculator'
import DistanceConverter from '../../components/DistanceConverter'
import CurrencyConverter from '../../components/CurrencyConverter'

function Tools() {
   const [displayCalc, setDisplayCalc] = useState(false)
   const [displayDistance, setDisplayDistance] = useState(false)
   const [displayCurrency, setDisplayCurrency] = useState(false)
   return (
      <Div>
         <CalcButton onClick={() => setDisplayCalc(!displayCalc)}>
            {displayCalc ? 'hide calculator' : 'show calculator'}
         </CalcButton>
         {displayCalc ? <Calculator /> : ''}

         <ConvButton onClick={() => setDisplayDistance(!displayDistance)}>
            {displayCalc
               ? 'hide distance converter'
               : 'show distance converter'}
         </ConvButton>
         {displayDistance ? <DistanceConverter /> : ''}

         <CurrencyButton onClick={() => setDisplayCurrency(!displayCurrency)}>
            {displayCalc
               ? 'hide currency converter'
               : 'show currency converter'}
         </CurrencyButton>
         {displayCurrency ? <CurrencyConverter /> : ''}
      </Div>
   )
}

export default Tools
