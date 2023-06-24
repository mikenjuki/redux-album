import { useEffect } from "react";
import { useSelector } from "react-redux";
import useThunk from "../hooks/useThunk";
import useToast from "../hooks/useToast";

import { fetchUsers, addUser } from "../store";
import Button from "./Button";

import Skeleton from "./Skeleton";

const UsersList = () => {
  const [runFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [runAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { errorClass: errorClassCreatingUser } = useToast(creatingUserError);
  const { errorClass: errorClassLoadingUsers } = useToast(loadingUsersError);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    runFetchUsers();
  }, [runFetchUsers]);

  const handleAddUser = () => {
    runAddUser();
  };

  if (isLoadingUsers) return <Skeleton times={5} className="w-full h-10" />;

  if (loadingUsersError) {
    return (
      <div className={errorClassLoadingUsers}>
        <p className="text-3xl">Error fetching data</p>
      </div>
    );
  }

  const renderedUsers = data.map((user) => (
    <div className=" bg-gray-100 p-2 rounded-md" key={user.id}>
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <h3 className="text-2xl text-gray-800">{user.name}</h3>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between m-3">
        <h2 className="text-xl">Users</h2>
        {isCreatingUser ? (
          <p>Creating user...</p>
        ) : (
          <Button onClick={handleAddUser} primary>
            Add User
          </Button>
        )}

        {creatingUserError && (
          <div className={`${errorClassCreatingUser} absolute top-4`}>
            <p className="text-3xl">Error creating user</p>
          </div>
        )}
      </div>
      {data.length > 0 && (
        <div className="grid gap-2 shadow-xl">{renderedUsers}</div>
      )}
    </div>
  );
};

export default UsersList;
// http://localhost:5005/users
// http://localhost:5005/albums
// http://localhost:5005/photos
