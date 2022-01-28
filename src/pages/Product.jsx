import styled from "styled-components";
import TopElements from "../components/TopElements";
import Chart from "../components/Chart";
import { productData } from "../DummyData";
import {Image} from "@material-ui/icons";

const Container = styled.div`
    flex: 4;
    margin: 0 20px;
`
const Top = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 3;
  margin-left: -30px;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 20px 20px -20px;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15); 
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15);
  border-radius: .7em;
`
const DetailsTop = styled.div`
  display: flex;
  align-items:center;
`
const ProductImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`
const ProductName = styled.span`font-weight: 600;`
const DetailsBottom = styled.div`margin-top: 10px;`
const DetailBlock = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`
const KeyValue = styled.span``
const Value = styled.span`font-weight: 300;`

const Bottom = styled.div`
  flex: 4;
  margin: 0 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15); 
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15);
  border-radius: .7em;
`
const UpdateLeft = styled.div``

const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin: 15px 5px;
`

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`
const ItemLabel = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
`
const Input = styled.input`
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
`
const Select = styled.select``
const Option = styled.option``

const RightForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Upload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const UploadImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    opacity: .7;
`

const ImgUploadLabel = styled.label`
    position: absolute;
    color: rgba(0,0,0,.7);
    transform: scale(1.5);
    background-color: rgba(0,0,0,.5);
    color: #FFF;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

const Button = styled.button`
    width: 80px;
    border: none;
    padding: 8px;
    background-color: #3BB077;
    color: #FFF;
    border-radius: .7em;
    font-size: 15px;
    cursor: pointer;
`

const Product = () => {
  return (
      <Container>
        <TopElements title="Edit Product" buttonRoute="/addProduct"/>
          <Top>
            <Left>
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </Left>
            <Right>
              <DetailsTop>
                <ProductImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0Z0vPQNhInoMd29bi7Up7riNXCKmBMzNHw&usqp=CAU"/>
                <ProductName>Galax RTX 3080</ProductName>
              </DetailsTop>
              <DetailsBottom>
                <DetailBlock>
                  <KeyValue>ID:</KeyValue>
                  <Value>236546543</Value>
                </DetailBlock>
                <DetailBlock>
                  <KeyValue>Sales:</KeyValue>
                  <Value>8900 AED</Value>
                </DetailBlock>
                <DetailBlock>
                  <KeyValue>Active:</KeyValue>
                  <Value>Yes</Value>
                </DetailBlock>
                <DetailBlock>
                  <KeyValue>Stock:</KeyValue>
                  <Value>14</Value>
                </DetailBlock>
              </DetailsBottom>
            </Right>
          </Top>

          <Bottom>
          <UpdateForm>
            <UpdateLeft>
                <FormItem>
                    <ItemLabel>Product Name</ItemLabel>
                    <Input type="text" placeholder="Galax RTX 3080"/>
                </FormItem>
                <FormItem>
                    <ItemLabel>Stock</ItemLabel>
                    <Input type="number" placeholder="14"/>
                </FormItem>
                <FormItem>
                    <ItemLabel>Active</ItemLabel>
                    <Select name="active" id="active">
                      <Option value="yes">Yes</Option>
                      <Option value="yes">Yes</Option>
                    </Select>
                </FormItem>
            </UpdateLeft>
            <RightForm>
                <Upload>
                    <UploadImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0Z0vPQNhInoMd29bi7Up7riNXCKmBMzNHw&usqp=CAU' alt='Profile Picture'/>
                    <ImgUploadLabel htmlFor="file"><Image /></ImgUploadLabel>
                    <Input type="file" id="file" style={{display:"none"}}/>
                </Upload>
                <Button>Save</Button>
            </RightForm>
        </UpdateForm>
          </Bottom>
      </Container>
  );
};

export default Product;
