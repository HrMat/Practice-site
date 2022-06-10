import styled from 'styled-components'

export const Label = styled.label`
   text-align: center;
`
export const Wrapper = styled.div`
   display: flex;
   justify-content: space-around;
`
export const FromWrapper = styled.div``
export const ToWrapper = styled.div`
   display: flex;
   flex-direction: column;
`
export const Result = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 30%;
`
export const FromButton = styled.button`
   display: block;
   color: ${({ isSelected }) => (isSelected ? 'red' : 'black')};
`
export const ToButton = styled.button`
   display: block;
   color: ${({ isSelected }) => (isSelected ? 'red' : 'black')};
`
export const ConvertButton = styled.button`
   display: block;
   margin: auto;
   text-align: center;
   justify-content: center;
   width: 30%;
   margin-bottom: 5%;
`
export const Screen = styled.div`
   height: 50%;
   text-align: center;
`
export const Input = styled.input`
   height: 30px;
   margin-bottom: 5%;
   text-align: center;
`
