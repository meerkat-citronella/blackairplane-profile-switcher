import "./App.css";
import styled from "styled-components";
import { NavBar } from "./nav";
import { Switcher } from "./switcher";
import { Profile } from "./profile";
import "gotham-fonts/css/gotham-rounded.css";
import { FlexRow } from "./static/flexbox";

const Flexbox = styled(FlexRow)`
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
