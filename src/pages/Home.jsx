import styled from "styled-components";
import Chart from "../components/Chart";
import InfoWidgets from "../components/InfoWidgets";
import LgWidget from "../components/LgWidget";
import SmWidget from "../components/SmWidget";
import { salesData } from '../SalesData';

const Container = styled.div`
    flex: 4;
`

const UserWidget = styled.div`
  display: flex;
  margin: 40px;
`

const Home = () => {
  return (
      <Container>
        <InfoWidgets/>
        <Chart data={salesData} title="Sales Analytics" grid dataKey="Sales (AED)"/>
        <UserWidget>
          <SmWidget/>
          <LgWidget/>
        </UserWidget>
      </Container>
  );
};

export default Home;
