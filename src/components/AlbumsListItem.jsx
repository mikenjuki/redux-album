/* eslint-disable react/prop-types */

import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleAlbumDelete = () => {
    removeAlbum(album);
  };

  const isLoading = results.isLoading;

  const header = (
    <div className="flex flex-row items-center gap-4">
      <Button danger rounded loading={isLoading} onClick={handleAlbumDelete}>
        <GoTrash />
      </Button>
      {album.title}
    </div>
  );
  return (
    <div className="mb-3">
      <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album} />
      </ExpandablePanel>
    </div>
  );
};

export default AlbumsListItem;
