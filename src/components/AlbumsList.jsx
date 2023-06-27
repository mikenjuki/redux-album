/* eslint-disable react/prop-types */
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";

import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="w-full h-10" />;
  } else if (error) {
    content = (
      <div className="">
        <p className="text-3xl">Error loading albums</p>
      </div>
    );
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-2 mb-4">
        <h3 className="text-lg font-bold text-cyan-800">
          {user.name}&lsquo;s Albums
        </h3>

        <Button primary loading={results.isLoading} onClick={handleAddAlbum}>
          Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
