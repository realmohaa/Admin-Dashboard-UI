import { NotificationsNoneOutlined, Settings } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    position: sticky;
    top: 0;
    z-index: 10;
`

const Wrapper = styled.div`
    display: flex;
    align: center;
    justify-content: space-between;
    height: 100%;
    padding: 10px 20px;
`

const Left = styled.div``

const Logo = styled.span`
    font-weight: bold;
    font-size: 25px;
    color: #000;
    cursor: pointer;
`

const Right = styled.div`
    display: flex;
    align-items: center;
`

const UserAvatarContainer = styled.div``

const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;

`

const IconContainer = styled.div`
    margin-right: 15px;
    color: #555;
    display: flex;
    align-items: center;
    transition: all .1s ease-in-out;
    &:hover, &:active {
        transform: scale(1.15);
    }
`

const Navbar = () => {
  return (
  <Container>
      <Wrapper>
          <Left>
              <Logo>Admin Panel</Logo>
          </Left>
          <Right>
              <IconContainer>
                <Settings/>
              </IconContainer>

              <IconContainer>
                <Badge badgeContent={2} color="secondary">
                    <NotificationsNoneOutlined/>
                </Badge>
              </IconContainer>

              <UserAvatarContainer>
                  <UserAvatar src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile Picture"/>
              </UserAvatarContainer>
          </Right>
      </Wrapper>
  </Container>
  );
};

export default Navbar;
