import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App";
const DashboardContext = createContext();

const DashboardLayout = () => {

  const user = { name: "John" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext
(DashboardContext);
export default DashboardLayout;
