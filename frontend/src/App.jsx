import React from "react";
import SidebarLeft from "./components/SidebarLeft";
import ChatWindowRight from "./components/ChatWindowRight";


const App = () => {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <SidebarLeft />
        <ChatWindowRight />
      </div>
    </div>
  );
};

export default App;
