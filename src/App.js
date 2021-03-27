import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import { NavBar } from "./components/nav";
import { Switcher } from "./components/switcher";
import { Profile } from "./components/profile";
import { FlexRow } from "./static/flexbox";

const Flexbox = styled(FlexRow)`
  justify-content: flex-start;
  column-gap: 284px;
`;

function App() {
  const [selectedOwner, setSelectedOwner] = useState("Jana Bridges");

  return (
    <div>
      <NavBar />
      <Flexbox>
        <Switcher
          selectedOwner={selectedOwner}
          setSelectedOwner={setSelectedOwner}
        />
        <Profile selectedOwner={selectedOwner} />
      </Flexbox>
    </div>
  );
}

export default App;
