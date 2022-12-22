import { Wrapper,Content,Header2,Header4,Text,NavLinkWrapper,NavLink } from './NotFound.style'


export default function NotFound() {
  return (
    <Wrapper>
         <Content>
            <Header2>
               404
            </Header2>
            <Header4>
               Opps! Page not found
            </Header4>
            <Text>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </Text>
            <NavLinkWrapper>
               <NavLink to="/">return home</NavLink>
            </NavLinkWrapper>
         </Content>
      </Wrapper>
  )
}
