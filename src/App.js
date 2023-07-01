import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {MDBContainer} from "mdb-react-ui-kit";
import BodyContainer from "./Body/BodyContainer";

function App() {
  return (
    <BrowserRouter>
      <MDBContainer>
        <BodyContainer/>
      </MDBContainer>
    </BrowserRouter>
  );
}

export default App;
