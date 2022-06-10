import Calculator from '../../components/Calculator'
import { useState } from 'react'
import styled from 'styled-components'
import DistanceConverter from '../../components/DistanceConverter'

const CalcButton = styled.button`
   width: 10%;
`
const ConvButton = styled.button`
   width: 10%;
`
const Div = styled.div`
   display: flex;
   flex-direction: column;
`
function Tools() {
   const [displayCalc, setDisplayCalc] = useState(false)
   const [displayConverter, setDisplayConverter] = useState(false)
   return (
      <Div>
         <CalcButton onClick={() => setDisplayCalc(!displayCalc)}>
            {displayCalc ? 'hide calculator' : 'show calculator'}
         </CalcButton>
         {displayCalc ? <Calculator /> : ''}
         <ConvButton onClick={() => setDisplayConverter(!displayConverter)}>
            {displayCalc ? 'hide converter' : 'show converter'}
         </ConvButton>
         {displayConverter ? <DistanceConverter /> : ''}
      </Div>
   )
}

export default Tools
