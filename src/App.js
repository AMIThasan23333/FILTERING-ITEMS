import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
    <Navigation></Navigation>
    <Recommended></Recommended>
    <Products></Products>

    </div>
  );
}

export default App;
