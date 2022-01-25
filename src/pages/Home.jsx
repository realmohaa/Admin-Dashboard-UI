import styled from "styled-components";
import InfoWidgets from "../components/InfoWidgets";

const Container = styled.div`
    flex: 5;
`

const Home = () => {
  return (
      <Container>
        <InfoWidgets/>
      </Container>
  );
};

export default Home;
