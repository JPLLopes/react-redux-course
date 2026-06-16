import React from "react";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const header = (
    <>
      <Button
        className="mr-3"
        loading={isLoading}
        onClick={() => doRemoveUser(user)}
      >
        <GoTrashcan />
      </Button>

      {error && <div>Error deleting user.</div>}

      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
