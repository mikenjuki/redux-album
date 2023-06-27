/* eslint-disable react/prop-types */
import { useRemovePhotoMutation } from "../store";
import { GoXCircle } from "react-icons/go";

const PhotosListItem = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation();

  const handlePhotoDelete = () => {
    removePhoto(photo);
  };

  return (
    <div className="bg-slate-100 rounded-xl p-2  m-2 shadow-md relative cursor-pointer">
      <img src={photo.url} alt={photo.title} className="w-44 h-44 bg-cover" />
      <div
        className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80"
        onClick={handlePhotoDelete}
      >
        <GoXCircle className="text-4xl text-red-500" />
      </div>
      <div className="py-2 text-justify italic text-sm">{photo.title}</div>
    </div>
  );
};

export default PhotosListItem;
