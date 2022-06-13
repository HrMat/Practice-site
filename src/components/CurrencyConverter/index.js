import styled from 'styled-components'
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/SComponents'
import { currencySymbols } from '../../data/currency'
import { useState } from 'react'

const Wrapper = styled.div`
   border: 2px solid black;
   width: 80%;
   margin: auto;

   color: white;
   background-color: black;

   display: flex;
   justify-content: space-around;
`
const BaseWrapper = styled.div`
   display: flex;
   flex-direction: column;
`
const TargetWrapper = styled.div`
   display: flex;
   flex-direction: column;
`

const ResultWrapper = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   input {
      margin-bottom: 15%;
      text-align: center;
   }
`
const Div = styled.div`
   display: flex;
   label {
      margin-top: 5%;
      margin-left: 2%;
   }
`
const Select = styled.select``
const Input = styled.input`
   margin-top: 5%;
`
const Option = styled.option``

function CurrencyConverter() {
   let apiKey = '2c6BxlAS1Dk5v8wQr1ucrpMuXwSqY4BE'
   const [numbers, setNumbers] = useState(0)
   const [base, setBase] = useState('EUR')
   const [target, setTarget] = useState('EUR')
   const { data, isLoading, error } = useFetch(
      `https://api.apilayer.com/fixer/latest?symbols=${target}&base=${base}&apikey=${apiKey}`
   )
   // const CurrData = data.rates.target
   console.log(data)
   if (error) return <span>Oups... {error}</span>

   return (
      <Wrapper>
         <BaseWrapper>
            <label>Base currency</label>
            <Select
               id="base-currency"
               onChange={(e) => setBase(e.target.value)}
            >
               {currencySymbols.map((symbol, i) => {
                  let name = symbol.split(',')[0]
                  let symb = symbol.split(',')[1]
                  return (
                     <Option value={symb} key={`${symbol}-${i}`}>
                        {name}
                     </Option>
                  )
               })}
            </Select>
         </BaseWrapper>
         <ResultWrapper>
            <Div>
               <Input onChange={(e) => setNumbers(e.target.value)}></Input>
               <label>{base.toUpperCase()}</label>
            </Div>
            <div>
               {numbers &&
                  (isLoading ? (
                     <Loader />
                  ) : (
                     parseFloat(numbers) * parseFloat(data.rates[target])
                  ))}{' '}
               {target}
            </div>
         </ResultWrapper>
         <TargetWrapper>
            <label>Targeted currency</label>
            <Select onChange={(e) => setTarget(e.target.value)}>
               {currencySymbols.map((symbol, i) => {
                  let name = symbol.split(',')[0]
                  let symb = symbol.split(',')[1]
                  return (
                     <Option value={symb} key={`${symbol}-${i}`}>
                        {name}
                     </Option>
                  )
               })}
            </Select>
         </TargetWrapper>
      </Wrapper>
   )
}

export default CurrencyConverter

// {isLoading ? <Loader /> : <div></div>}

//api key = PE9K8hUUhngfuzKd4KEHoV7EYY5jHzTt
// y2ZDSxizF4hnc4cGSpDcB2TBlpthjxtn
// JXOjKDL8q1DkE5MT4en57ctqrpOBsAHB
// 2c6BxlAS1Dk5v8wQr1ucrpMuXwSqY4BE

// https://api.apilayer.com/fixer/latest?symbols=${target}&base=${base}&apikey=${apiKey}
