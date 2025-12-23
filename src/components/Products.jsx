import { Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>  
    <h5 className="text-primary">Products Page</h5>
    <Outlet />
    </>
    );  
}