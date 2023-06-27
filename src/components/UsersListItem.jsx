/* eslint-disable react/prop-types */
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import removeUser from "../store/thunks/removeUser";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
  const [runRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    runRemoveUser(user);
  };

  const header = (
    <div className="flex p-2 gap-3 items-center">
      <Button loading={isLoading} onClick={handleClick} danger rounded>
        <GoTrash />
      </Button>
      {error && <div>Error Deleting user</div>}
      <h3 className="text-2xl text-gray-800">{user.name}</h3>
    </div>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
