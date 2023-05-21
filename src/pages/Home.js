import { useEffect } from "react";
import { fetchUsers } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector((state) => state.users);
  const { loading, users, error } = usersStore;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {loading && "載入資料中"}
      {error && "Server忙碌中，請稍後重試"}
      {users && users.length > 0 && (
        <div>
          <p>使用者資料：</p>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
