import styled from 'styled-components'
import colors from '../../utils/colors'
import { useState } from 'react'

const Button = styled.button`
   font-size: 12px;
   text-align: center;
   padding: 8px 10px;
   margin: 2px auto;
   color: white;
   width: 35px;
   height: 35px;
   border: none;
   border-radius: 25px;
   background-color: ${colors.greyNumbers};

   &:hover {
      cursor: pointer;
      transform: scale(1.1);
   }
   &:nth-child(1) {
      color: black;
      background-color: ${colors.darkLightGrey};
   }
   &:nth-child(2) {
      font-size: 16px;
      color: black;
      background-color: ${colors.darkLightGrey};
   }
   &:nth-child(3) {
      color: black;
      background-color: ${colors.darkLightGrey};
   }
   &:nth-child(4n) {
      background-color: ${({ isSelect }) =>
         isSelect ? colors.lightBlue : colors.orangeNumbers};
   }
   &:nth-child(19) {
      background-color: ${colors.orangeNumbers};
   }
`
const Div = styled.div`
   margin: 5% auto auto auto;
   width: 180px;
   height: 75%;

   display: grid;

   .firstRow {
      grid-row: 1;
   }
   .zero {
      width: 80px;
      grid-column: 1 / 3;
   }
`
const Screen = styled.div`
   width: 90%;
   height: 15%;
   margin: 2% auto;

   font-size: 1.8em;
   color: white;

   text-align: right;

   padding-bottom: 5%;
`
const Wrapper = styled.div`
   margin: auto;
   height: 300px;
   width: 200px;

   background-color: black;
`

function Calculator() {
   const [numbers, setNumbers] = useState('')
   const [secondNumbers, setSecondNumbers] = useState('')
   const [sign, setSign] = useState('')

   function calculator(a, b) {
      if (sign === '*') {
         return parseFloat(a) * parseFloat(b)
      } else if (sign === '/') {
         return parseFloat(a) / parseFloat(b)
      } else if (sign === '-') {
         return parseFloat(a) - parseFloat(b)
      } else if (sign === '+') {
         return parseFloat(a) + parseFloat(b)
      }
   }

   return (
      <Wrapper>
         <Screen>{numbers}</Screen>
         <Div>
            <Button
               className="firstRow"
               onClick={() => {
                  setNumbers('')
                  setSecondNumbers('')
                  setSign('')
               }}
            >
               AC
            </Button>
            <Button
               className="firstRow"
               onClick={() => setNumbers(numbers.toString().slice(0, -1))}
            >
               ←
            </Button>
            <Button
               className="firstRow"
               onClick={() => setNumbers(parseFloat(numbers) / 100)}
            >
               %
            </Button>
            <Button
               className="firstRow"
               onClick={() => {
                  setSign('/')
                  setSecondNumbers(numbers)
                  setNumbers('')
               }}
            >
               ÷
            </Button>
            <Button onClick={() => setNumbers(numbers + '7')}>7</Button>
            <Button onClick={() => setNumbers(numbers + '8')}>8</Button>
            <Button onClick={() => setNumbers(numbers + '9')}>9</Button>
            <Button
               onClick={() => {
                  setSign('*')
                  setSecondNumbers(numbers)
                  setNumbers('')
               }}
            >
               X
            </Button>
            <Button onClick={() => setNumbers(numbers + '4')}>4</Button>
            <Button onClick={() => setNumbers(numbers + '5')}>5</Button>
            <Button onClick={() => setNumbers(numbers + '6')}>6</Button>
            <Button
               onClick={() => {
                  setSign('-')
                  setSecondNumbers(numbers)
                  setNumbers('')
               }}
            >
               -
            </Button>
            <Button onClick={() => setNumbers(numbers + '1')}>1</Button>
            <Button onClick={() => setNumbers(numbers + '2')}>2</Button>
            <Button onClick={() => setNumbers(numbers + '3')}>3</Button>
            <Button
               onClick={() => {
                  setSign('+')
                  setSecondNumbers(numbers)
                  setNumbers('')
               }}
            >
               +
            </Button>
            <Button className="zero" onClick={(e) => setNumbers(numbers + '0')}>
               0
            </Button>
            <Button onClick={() => setNumbers(numbers + '.')}>,</Button>
            <Button
               onClick={() => {
                  setNumbers(calculator(secondNumbers, numbers))
               }}
            >
               =
            </Button>
         </Div>
      </Wrapper>
   )
}

export default Calculator
