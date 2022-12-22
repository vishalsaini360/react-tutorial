  import { Wrapper,Heading,InputLabel,Input,Form,Button } from './Signup.style'

  export default function Signup() {
    return (
      <Wrapper>
        <Heading>Signup</Heading>
        <Form>
          <InputLabel>Name</InputLabel>
          <Input name="name"/>
          <InputLabel>Email</InputLabel>
          <Input name="email"/>
          <InputLabel>Mobile</InputLabel>
          <Input name="mobile"/>
          <InputLabel>Password</InputLabel>
          <Input name="password" type='password'/>
          <Button type='submit'>Signup</Button>
        </Form>
      </Wrapper>
    )
  }
