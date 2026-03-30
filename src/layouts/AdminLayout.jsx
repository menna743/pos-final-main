import { Outlet, useNavigate } from "react-router-dom";
import AdminMenu from "../componenets/AdminMenu";
import { useEffect } from "react";

export default function AdminLayout() {
  const navigate = useNavigate();
  
  useEffect(() => {
  let storedUser = sessionStorage.getItem('user');

  if (!storedUser) return;

  let user = JSON.parse(storedUser);
  let role = user?.system_role?.toLowerCase().trim();

  console.log('AdminLayout role:', role);

  if (role !== 'admin') {
    navigate('/login');
  }
}, []);
  return (
    <div className="w-full h-full overflow-hidden flex">
        <AdminMenu />
      <div className="grow h-full overflow-auto bg-[#f8fafc]">
      <Outlet/>
      </div>
    </div>
  )
}
