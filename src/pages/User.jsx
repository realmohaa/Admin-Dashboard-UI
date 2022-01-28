import { CalendarToday, Image, LocationCity, MailOutline, PermIdentity, Phone } from "@material-ui/icons";
import styled from "styled-components";
import TopElements from "../components/TopElements";

const Container = styled.div`
    flex: 4;
    margin: 0 20px;
`

const UserContainer = styled.div`
    display: flex;
    margin: 20px 0;
`

const  UserDetail = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15);
    padding: 20px;
    border-radius: .8em;
`

const Top = styled.div`
    display: flex;
    align-items: center;
`
const ProfPic = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
` 
const UserData = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`
const Name = styled.span`font-weight: 600;`
const RegDate = styled.span`font-weight: 300;`
const Bottom = styled.div`margin-top: 20px;`

const BlockTitle = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`
const DetailBlock = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
    margin-left: 10px;
`
const BlockText = styled.span`
    font-size: 15px;
    margin-left: 10px;
`

const UserUpdate = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15);
    padding: 20px;
    margin-left: 10px;
    border-radius: .8em;
`

const Left = styled.div``

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
const Right = styled.div`
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
    width: 100px;
    height: 100px;
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
    width: 30px;
    height: 30px;
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

const User = () => {
  return (
      <Container>
          <TopElements title="Edit User" buttonRoute="/AddUser"/>
          <UserContainer>
              <UserDetail>
                  <Top>
                      <ProfPic src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' alt='Profile Picture'/>
                      <UserData>
                          <Name>Mohammed Anwar</Name>
                          <RegDate>22-01-2022</RegDate>
                      </UserData>
                  </Top>
                  <Bottom>
                      <BlockTitle>User Details</BlockTitle>
                      <DetailBlock>
                            <PermIdentity/>
                            <BlockText>Realmohaa</BlockText>
                      </DetailBlock>
                      <DetailBlock>
                            <CalendarToday/>
                            <BlockText>18 Aug 1900</BlockText>
                      </DetailBlock>
                      <BlockTitle>Contact Details</BlockTitle>
                      <DetailBlock>
                            <Phone/>
                            <BlockText>+36 70 000 0000</BlockText>
                      </DetailBlock>
                      <DetailBlock>
                            <MailOutline/>
                            <BlockText>realmohaa@outlook.com</BlockText>
                      </DetailBlock>
                      <DetailBlock>
                            <LocationCity/>
                            <BlockText>Budapest, Hungary</BlockText>
                      </DetailBlock>
                  </Bottom>
              </UserDetail>

              <UserUpdate>
                  <UpdateForm>
                      <Left>
                          <FormItem>
                              <ItemLabel>Username</ItemLabel>
                              <Input type="text" placeholder="Realmohaa"/>
                          </FormItem>
                          <FormItem>
                              <ItemLabel>First Name</ItemLabel>
                              <Input type="text" placeholder="Mohammed"/>
                          </FormItem>
                          <FormItem>
                              <ItemLabel>Last Name</ItemLabel>
                              <Input type="text" placeholder="Anwar"/>
                          </FormItem>
                          <FormItem>
                              <ItemLabel>Email</ItemLabel>
                              <Input type="text" placeholder="realmohaa@outlook.com"/>
                          </FormItem>
                          <FormItem>
                              <ItemLabel>Mobile Number</ItemLabel>
                              <Input type="number" placeholder="+36 70 000 0000"/>
                          </FormItem>
                          <FormItem>
                              <ItemLabel>Address</ItemLabel>
                              <Input type="text" placeholder="realmohaa@outlook.com"/>
                          </FormItem>
                      </Left>
                      <Right>
                          <Upload>
                              <UploadImg src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' alt='Profile Picture'/>
                              <ImgUploadLabel htmlFor="file"><Image /></ImgUploadLabel>
                              <Input type="file" id="file" style={{display:"none"}}/>
                          </Upload>
                          <Button>Save</Button>
                      </Right>
                  </UpdateForm>
              </UserUpdate>
          </UserContainer>
      </Container>
  );
};

export default User;
