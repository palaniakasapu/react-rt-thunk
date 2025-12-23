import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import { Link } from "react-router-dom";



export const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  let users = useSelector((state) => state.user.users);
  let status = useSelector((state) => state.user.status);
  let error = useSelector((state) => state.user.error);
  console.log("---", users);
  return (
    <>
     <div className="container">
       <button className="btn btn-primary mx-2"><Link to="orders">Orders</Link></button>
       <button className="btn btn-primary"><Link to="products">Products</Link></button>
       </div>
      <div className="container">
        <h5 className="text-primary text-center m-5">
          user data using toolkit async thunk
        </h5>
        {status === "loading" ? (
          <h5>Fetching data please wait ...</h5>
        ) : (
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID </th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>website</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <a target="_blank" href={`https://${item.website}`}>
                      {item.website}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
