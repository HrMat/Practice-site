import { useState } from 'react'
import {
   Label,
   Wrapper,
   FromWrapper,
   ToWrapper,
   Result,
   FromButton,
   ToButton,
   ConvertButton,
   Screen,
   Input,
} from './style'

function DistanceConverter() {
   const [baseUnits, setBaseUnits] = useState('')
   const [nextUnits, setNextUnits] = useState('')
   const [value, setValue] = useState(0)
   const [result, setResult] = useState(0)

   let cToMeter = 0
   const CalcConvert = (a, b, c) => {
      if (a === b) {
         return setResult(c)
      } else if (a === 'mm') {
         cToMeter = c / 1000
      } else if (a === 'cm') {
         cToMeter = c / 100
      } else if (a === 'm') {
         cToMeter = c
      } else if (a === 'km') {
         cToMeter = c * 1000
      } else if (a === 'in') {
         cToMeter = c / 39.37
      } else if (a === 'ft') {
         cToMeter = c / 3281
      } else if (a === 'yd') {
         cToMeter = c / 1094
      } else if (a === 'mi') {
         cToMeter = c / 1609
      }
      if (b === 'm') {
         return setResult(cToMeter)
      } else if (b === 'mm') {
         return setResult(cToMeter * 1000)
      } else if (b === 'cm') {
         return setResult(cToMeter * 100)
      } else if (b === 'km') {
         return setResult(cToMeter / 1000)
      } else if (b === 'in') {
         return setResult(cToMeter * 39.37)
      } else if (b === 'ft') {
         return setResult(cToMeter * 3.281)
      } else if (b === 'yd') {
         return setResult(cToMeter * 1.094)
      } else if (b === 'mi') {
         return setResult(cToMeter / 1609)
      }
   }

   return (
      <Wrapper>
         <FromWrapper>
            <div>From</div>
            <FromButton
               isSelected={baseUnits === 'mm'}
               onClick={() => {
                  setBaseUnits('mm')
               }}
            >
               Millimeter (mm)
            </FromButton>
            <FromButton
               isSelected={baseUnits === 'cm'}
               onClick={() => {
                  setBaseUnits('cm')
               }}
            >
               Centimeter (cm)
            </FromButton>
            <FromButton
               isSelected={baseUnits === 'm'}
               onClick={() => {
                  setBaseUnits('m')
               }}
            >
               Meter (m)
            </FromButton>
            <FromButton
               isSelected={baseUnits === 'km'}
               onClick={() => {
                  setBaseUnits('km')
               }}
            >
               Kilometer (km)
            </FromButton>
            <FromButton
               isSelected={baseUnits === 'in'}
               onClick={() => {
                  setBaseUnits('in')
               }}
            >
               Inch (in)
            </FromButton>
            <FromButton
               isSelected={baseUnits === 'ft'}
               onClick={() => {
                  setBaseUnits('ft')
               }}
            >
               Foot (ft)
            </FromButton>
            <FromButton
               isSelected={baseUnits === 'yd'}
               onClick={() => {
                  setBaseUnits('yd')
               }}
            >
               Yard (yd)
            </FromButton>
            <FromButton
               isSelected={baseUnits === 'mi'}
               onClick={() => {
                  setBaseUnits('mi')
               }}
            >
               Mile (mi)
            </FromButton>
         </FromWrapper>
         <Result>
            <Label>{baseUnits} to convert</Label>
            <Input
               type="text"
               onChange={(e) => {
                  setValue(e.target.value)
               }}
            ></Input>
            <ConvertButton
               onClick={(e) => {
                  CalcConvert(baseUnits, nextUnits, value)
                  console.log(`result:${result}`)
                  e.preventDefault()
               }}
            >
               Convert
            </ConvertButton>

            <Screen>
               {result} {nextUnits}
            </Screen>
            <button onClick={() => setResult(0)}>Reset</button>
         </Result>
         <ToWrapper>
            <div>To</div>
            <ToButton
               isSelected={nextUnits === 'mm'}
               onClick={() => {
                  setNextUnits('mm')
               }}
            >
               Millimeter (mm)
            </ToButton>
            <ToButton
               isSelected={nextUnits === 'cm'}
               onClick={() => {
                  setNextUnits('cm')
               }}
            >
               Centimeter (cm)
            </ToButton>
            <ToButton
               isSelected={nextUnits === 'm'}
               onClick={() => {
                  setNextUnits('m')
               }}
            >
               Meter (m)
            </ToButton>
            <ToButton
               isSelected={nextUnits === 'km'}
               onClick={() => {
                  setNextUnits('km')
               }}
            >
               Kilometer (km)
            </ToButton>
            <ToButton
               isSelected={nextUnits === 'in'}
               onClick={() => {
                  setNextUnits('in')
               }}
            >
               Inch (in)
            </ToButton>
            <ToButton
               isSelected={nextUnits === 'ft'}
               onClick={() => {
                  setNextUnits('ft')
               }}
            >
               Foot (ft)
            </ToButton>
            <ToButton
               isSelected={nextUnits === 'yd'}
               onClick={() => {
                  setNextUnits('yd')
               }}
            >
               Yard (yd)
            </ToButton>
            <ToButton
               isSelected={nextUnits === 'mi'}
               onClick={() => {
                  setNextUnits('mi')
               }}
            >
               Mile (mi)
            </ToButton>
         </ToWrapper>
      </Wrapper>
   )
}

export default DistanceConverter
