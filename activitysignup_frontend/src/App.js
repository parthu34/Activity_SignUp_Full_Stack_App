import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import ActivityCandidates from './components/ActivityCandidates';
import { Container } from "@material-ui/core";


function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
      </Container>
      <ActivityCandidates/>
    </Provider>
  );
}

export default App;
