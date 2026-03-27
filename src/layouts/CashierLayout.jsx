import { Outlet, useNavigate } from "react-router-dom";
import NavMenu from "../componenets/NavMenu";
import SearchBar from "../componenets/SearchBar";
import SideCart from "../componenets/SideCart";
import { useEffect } from "react";

export default function CashierLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    let role = user?.system_role?.toLowerCase().trim();

    if (role !== 'cashier') {
      navigate('/login');
    }
  }, []);
  return (
    <div className="w-full h-full overflow-hidden flex">
      <NavMenu />
      <div className="h-full grow w-2 flex flex-col">
        <SearchBar />
        <div className="w-full h-2 grow overflow-auto">
          <Outlet />
        </div>
      </div>
      <div className="w-104.75 h-full">
        <SideCart />
      </div>
    </div>
  );
}
