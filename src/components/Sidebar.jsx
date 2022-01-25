import styled from "styled-components";
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, Home, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons";

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    position: sticky;
    top: 50px;
    background-color: rgb(251,251,255);
    border-radius: 0 1em 0 0;
`

const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`

const SidebarMenu = styled.div`margin-bottom: 10px`

const SidebarTitle = styled.h3`
    font-size: 14px;
    color: rgb(190,185,185);
`

const SidebarList = styled.ul`
    list-style: none;
    padding: 6px;
`

const SidebarListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    &:active, &:hover {
        background-color: rgb(230, 230, 250);
        border-radius: .5em;
    }
`

const Icon = styled.span`margin: 0 8px; font-size: 10px;`

const Sidebar = () => {
  return (
      <Container>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarTitle>Dashboard</SidebarTitle>
                  <SidebarList>
                      <SidebarListItem><Icon><Home/></Icon> Home</SidebarListItem>
                      <SidebarListItem><Icon><Timeline/></Icon> Analytics</SidebarListItem>
                      <SidebarListItem><Icon><TrendingUp/></Icon> Sales</SidebarListItem>
                  </SidebarList>
              </SidebarMenu>

              <SidebarMenu>
                  <SidebarTitle>Quick Menu</SidebarTitle>
                  <SidebarList>
                      <SidebarListItem><Icon><PermIdentity/></Icon> Users</SidebarListItem>
                      <SidebarListItem><Icon><Storefront/></Icon> Products</SidebarListItem>
                      <SidebarListItem><Icon><AttachMoney/></Icon> Transactions</SidebarListItem>
                      <SidebarListItem><Icon><BarChart/></Icon> Reports</SidebarListItem>
                  </SidebarList>
              </SidebarMenu>

              <SidebarMenu>
                  <SidebarTitle>Notifications</SidebarTitle>
                  <SidebarList>
                      <SidebarListItem><Icon><MailOutline/></Icon> Mail</SidebarListItem>
                      <SidebarListItem><Icon><DynamicFeed/></Icon> Feedback</SidebarListItem>
                      <SidebarListItem><Icon><ChatBubbleOutline/></Icon> Messages</SidebarListItem>
                  </SidebarList>
              </SidebarMenu>

              <SidebarMenu>
                  <SidebarTitle>Staff</SidebarTitle>
                  <SidebarList>
                      <SidebarListItem><Icon><WorkOutline/></Icon> Manage</SidebarListItem>
                      <SidebarListItem><Icon><Timeline/></Icon> Analytics</SidebarListItem>
                      <SidebarListItem><Icon><Report/></Icon> Reports</SidebarListItem>
                  </SidebarList>
              </SidebarMenu>
          </SidebarWrapper>
      </Container>
  );
};

export default Sidebar;
