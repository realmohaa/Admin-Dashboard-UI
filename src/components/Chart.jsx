import styled from "styled-components";
import { 
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer } from 'recharts';

const Container = styled.div`
    padding: 20px;
    margin: 40px;
    border-radius: .8em;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15);
`

const CharTitles = styled.h3`
    margin-bottom: 20px;
`

const Chart = ({ title, data, dataKey, grid }) => {
  return (
      <Container>
          <CharTitles>{title}</CharTitles>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={data}>
                  <XAxis dataKey="name" stroke="#5550BD"/>
                  <Line type="monotone" dataKey={dataKey} stroke="#5550BD"/>
                  <Tooltip />
                  {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                  <Legend/>
              </LineChart>
          </ResponsiveContainer>
      </Container>
  );
};

export default Chart;
