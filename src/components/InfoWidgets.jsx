import styled from "styled-components";
import { TrendingDown, TrendingUp } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 40px;
`
const Widget = styled.div`
    width: 100%;
    flex: 1;
    margin: 10px;
    padding: 35px 30px;
    border-radius: .8em;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,.15);
`
const WidgetTitle = styled.span`
    font-size: 20px;
`
const WidgetInfoContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`
const Info = styled.span`
    font-size: 28px;
    font-weight: 600;
`
const InfoRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 25px; 
`
const RateStatement = styled.span`
    font-size: 14px;
    color: gray;
`

const Icon = styled.span`
    padding: 0 5px;
    color:  ${props => props.direction === "up" ? 'green' : 'red' };;
`


const InfoWidgets = () => {
  return (
      <Container>
              <Widget>
                  <WidgetTitle>Revenue</WidgetTitle>
                  <WidgetInfoContainer>
                      <Info>9600 AED</Info>
                      <InfoRate>+13.7% <Icon direction="up"><TrendingUp/></Icon></InfoRate>
                  </WidgetInfoContainer>
                  <RateStatement>Compared to last month</RateStatement>
              </Widget>

              <Widget>
                  <WidgetTitle>Sales</WidgetTitle>
                  <WidgetInfoContainer>
                      <Info>6570 AED</Info>
                      <InfoRate>+19.7% <Icon direction="up"><TrendingUp/></Icon></InfoRate>
                  </WidgetInfoContainer>
                  <RateStatement>Compared to last month</RateStatement>
              </Widget>

              <Widget>
                  <WidgetTitle>Costs</WidgetTitle>
                  <WidgetInfoContainer>
                      <Info>4640 AED</Info>
                      <InfoRate>-1.2% <Icon direction="down"><TrendingDown/></Icon></InfoRate>
                  </WidgetInfoContainer>
                  <RateStatement>Compared to last month</RateStatement>
              </Widget>
      </Container>
  );
};

export default InfoWidgets;
