import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
   padding: 5px 10px;
   text-decoration: none;
   border-radius: 30px;

   font-size: 1.3em;
   color: white;
   background-color: ${colors.lightBlue};

   border: 2px solid black;
`
