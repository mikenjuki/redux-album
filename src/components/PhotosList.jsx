/* eslint-disable react/prop-types */

import PhotosListItem from "./PhotosListItem";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

const PhotosList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;

  if (isFetching) {
    content = <Skeleton times={3} className="w-8 h-8" />;
  } else if (error) {
    content = <div className="text-red-500">Error fetching photos...</div>;
  } else if (data) {
    content = data.map((photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ));
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-2">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button
          loading={addPhotoResults.isLoading}
          onClick={handleAddPhoto}
          primary
        >
          Add Photo
        </Button>
      </div>
      <div className="flex flex-wrap flex-row items-center">{content}</div>
    </div>
  );
};

export default PhotosList;
