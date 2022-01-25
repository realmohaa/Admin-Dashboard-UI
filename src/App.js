import Navbar from "./components/Navbar";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  display: flex;
  margin-top: 10px
`

const Page = styled.div`
  flex: 5;
`

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Sidebar/>
        <Page>
          other
        </Page>
      </Container>
    </div>
  );
}

export default App;
