import { useEffect } from "react";
import { useSelector } from "react-redux";
import useThunk from "../hooks/useThunk";

import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import UsersListItem from "./UsersListItem";

import Skeleton from "./Skeleton";

const UsersList = () => {
  const [runFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [runAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    runFetchUsers();
  }, [runFetchUsers]);

  const handleAddUser = () => {
    runAddUser();
  };

  const renderedUsers = data.map((user) => (
    <UsersListItem key={user.id} user={user} />
  ));

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={5} className="w-full h-10" />;
  } else if (loadingUsersError) {
    content = (
      <div className="">
        <p className="text-3xl">Error fetching data</p>
      </div>
    );
  } else {
    content = renderedUsers;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center m-3">
        <h2 className="text-xl">Users</h2>

        <Button loading={isCreatingUser} onClick={handleAddUser} primary>
          Add User
        </Button>

        {creatingUserError && (
          <div className={` absolute top-4`}>
            <p className="text-3xl">Error creating user</p>
          </div>
        )}
      </div>
      {<div className="grid gap-2 shadow-xl">{content}</div>}
    </div>
  );
};

export default UsersList;
// http://localhost:5005/users
// http://localhost:5005/albums
// http://localhost:5005/photos
