import { Wrapper,Heading,InputLabel,Input,Button } from './Login.style'

export default function Login() {
  return (
    <Wrapper>
      <Heading>Login</Heading>
      <InputLabel>Email</InputLabel>
      <Input/>
      <InputLabel>Password</InputLabel>
      <Input type='password'/>
      <Button>Login</Button>
    </Wrapper>
  )
}
