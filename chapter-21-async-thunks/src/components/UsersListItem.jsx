import React from "react";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  return (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button
            className="mr-3"
            loading={isLoading}
            onClick={() => doRemoveUser(user)}
          >
            <GoTrashcan />
          </Button>

          {error && <div>Error deleting user.</div>}

          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
