import styled from "styled-components";

const Container = styled.div`
    flex:4;
    padding: 20px;
`

const FormTitle = styled.h1``

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`

const FormItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
`
const ItemLabel = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
`
const Input = styled.input`
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`

const Button = styled.button`
    width: 50%;
    margin: 20px 0;
    border: none;
    padding: 8px;
    background-color: #3BB077;
    color: #FFF;
    border-radius: .7em;
    font-size: 15px;
    cursor: pointer;
`

const AddUser = () => {
  return (
      <Container>
        <FormTitle>Create a new user</FormTitle>
        <Form>
            <FormItem>
                <ItemLabel>Username</ItemLabel>
                <Input type="text" placeholder="user"/>
            </FormItem>
            <FormItem>
                <ItemLabel>First Name</ItemLabel>
                <Input type="text" placeholder="John"/>
            </FormItem>
            <FormItem>
                <ItemLabel>Last Name</ItemLabel>
                <Input type="text" placeholder="Doe"/>
            </FormItem>
            <FormItem>
                <ItemLabel>Email</ItemLabel>
                <Input type="text" placeholder="user@mymail.com"/>
            </FormItem>
            <FormItem>
                <ItemLabel>Mobile Number</ItemLabel>
                <Input type="number" placeholder="+971 50 000 0000"/>
            </FormItem>
            <FormItem>
                <ItemLabel>Address</ItemLabel>
                <Input type="text" placeholder="Dubai, United Arab Emirates"/>
            </FormItem>
            <FormItem>
            <Button>Create</Button>
            </FormItem>
        </Form>
      </Container>
  );
};

export default AddUser;
