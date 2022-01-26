import styled from "styled-components";
import { Visibility } from "@material-ui/icons";
import { Icon } from "@material-ui/core";

const Container = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15);
    padding: 20px;
    margin: 10px;
    border-radius: .8em;
`

const Title = styled.span`
    font-size: 22px;
    font-weight: bold;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
`

const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const UserDetails = styled.div`
    display: flex;
    flex-direction: column
`

const Name = styled.span`
    font-weight: 600
`

const RegistrationDate = styled.span`
    font-weight: 200
`

const ActionIconContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 1em;
    border: none;
    padding: 5px 8px;
    color: #555;
    cursor: pointer;
    font-size: 5px
`


const SmWidget = () => {
  return (
      <Container>
          <Title>Recent Customers:</Title>
          <List>
              <ListItem>
                <UserAvatar src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
                <UserDetails>
                    <Name>Moe Aziz</Name>
                    <RegistrationDate>18/01/2022</RegistrationDate>
                </UserDetails>
                <ActionIconContainer>
                    <Visibility/>
                </ActionIconContainer>
              </ListItem>

              <ListItem>
                <UserAvatar src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
                <UserDetails>
                    <Name>Moe Aziz</Name>
                    <RegistrationDate>18/01/2022</RegistrationDate>
                </UserDetails>
                <ActionIconContainer>
                    <Visibility/>
                </ActionIconContainer>
              </ListItem>

              <ListItem>
                <UserAvatar src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
                <UserDetails>
                    <Name>Moe Aziz</Name>
                    <RegistrationDate>18/01/2022</RegistrationDate>
                </UserDetails>
                <ActionIconContainer>
                    <Visibility/>
                </ActionIconContainer>
              </ListItem>

              <ListItem>
                <UserAvatar src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
                <UserDetails>
                    <Name>Moe Aziz</Name>
                    <RegistrationDate>18/01/2022</RegistrationDate>
                </UserDetails>
                <ActionIconContainer>
                    <Visibility/>
                </ActionIconContainer>
              </ListItem>
          </List>
      </Container>
  );
};

export default SmWidget;
