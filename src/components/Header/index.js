import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/StyledLink'

const Div = styled.div`
   margin-bottom: 2%;
`
const LinkWrapper = styled.div`
   margin-bottom: 2%;
`

function Header() {
   return (
      <Div>
         <LinkWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/tools">Tools</StyledLink>
            <StyledLink to="/games">Games</StyledLink>
            <StyledLink to="/quizz">Quizz</StyledLink>
         </LinkWrapper>
         <Outlet />
      </Div>
   )
}

export default Header
