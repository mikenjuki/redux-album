/* eslint-disable react/prop-types */
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import removeUser from "../store/thunks/removeUser";
import { GoTrash, GoChevronDown, GoChevronUp } from "react-icons/go";

const UsersListItem = ({ user }) => {
  const [runRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    runRemoveUser(user);
  };

  return (
    <div className="bg-gray-100 p-2 rounded-md flex flex-row justify-between items-center">
      <div className="flex p-2 gap-3 items-center cursor-pointer">
        <Button loading={isLoading} onClick={handleClick}>
          <GoTrash />
        </Button>
        {error && <div>Error Deleting user</div>}
        <h3 className="text-2xl text-gray-800">{user.name}</h3>
      </div>
      <div>
        <GoChevronDown />
      </div>
    </div>
  );
};

export default UsersListItem;
