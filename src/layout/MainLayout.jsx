import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
      <div className="max-w-5xl mx-auto">
        <Header></Header>

        <div>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default MainLayout;