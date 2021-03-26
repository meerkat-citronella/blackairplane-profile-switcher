import "./App.css";
import styled from "styled-components";
import { NavBar } from "./nav";
import { Switcher } from "./switcher";
import { Profile } from "./profile";
import "gotham-fonts/css/gotham-rounded.css";

// do jsdoc for the colors, so can see what color is when mouse over

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 284px;
`;

function App() {
  return (
    <div>
      <NavBar />
      <Flexbox>
        <Switcher />
        <Profile />
      </Flexbox>
    </div>
  );
}

export default App;
