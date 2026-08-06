import React from "react";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const header = (
    <>
      <Button
        className={"mr-2"}
        loading={results.isFetching}
        onClick={() => removeAlbum(album)}
      >
        <GoTrashcan />
      </Button>

      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
