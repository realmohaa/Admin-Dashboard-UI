import Navbar from "./components/Navbar";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
  margin-top: 20px
`

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Sidebar/>
        <Home/>
      </Container>
    </div>
  );
}

export default App;
