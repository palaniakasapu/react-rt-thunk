import { Outlet } from "react-router-dom";

export const Orders = () => {   
  return (
    <>
      <h5 className="text-primary">Orders Page</h5>
      <Outlet />
    </>
  );
}