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

const Select = styled.select`
    height: 40px;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
`
const Option = styled.option``

const AddProduct = () => {
  return (
    <Container>
    <FormTitle>Create a new product</FormTitle>
    <Form>
        <FormItem>
            <ItemLabel>Product Name</ItemLabel>
            <Input type="text" placeholder="user"/>
        </FormItem>
        <FormItem>
            <ItemLabel>Stock</ItemLabel>
            <Input type="number" placeholder="100"/>
        </FormItem>
        <FormItem>
            <ItemLabel>Active</ItemLabel>
            <Select name="active" id="active">
                <Option value="yes">Yes</Option>
                <Option value="yes">Yes</Option>
            </Select>
        </FormItem>
        <FormItem>
            <ItemLabel>Image</ItemLabel>
            <Input type="file" id="file"/>
        </FormItem>
        <FormItem>
        <Button>Create</Button>
        </FormItem>
    </Form>
  </Container>
);
};

export default AddProduct;
