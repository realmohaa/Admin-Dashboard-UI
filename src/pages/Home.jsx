import styled from "styled-components";
import Chart from "../components/Chart";
import InfoWidgets from "../components/InfoWidgets";
import { salesData } from '../SalesData';

const Container = styled.div`
    flex: 5;
`

const Home = () => {
  return (
      <Container>
        <InfoWidgets/>
        <Chart data={salesData} title="Sales Analytics" grid dataKey="Sales (AED)"/>
      </Container>
  );
};

export default Home;
