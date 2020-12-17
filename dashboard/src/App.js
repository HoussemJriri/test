import { useState } from "react";
import {NavBar} from './components/navbar/NavBar'

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebarOpen = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container ">
      <NavBar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <h1> React Dashboard</h1>
    </div>
  );
};

export default App;
