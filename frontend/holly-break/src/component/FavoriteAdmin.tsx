import React from "react";

type FavModal = {
  isOpen: boolean;
  setIsOpen: any;
  id: number;
};

function FavoriteAdmin({ isOpen, setIsOpen, id }: FavModal) {
  return (
    <div className="modal-admin">
      <div className="modal-container">
        <i
          className="fa-solid fa-square-xmark"
          onClick={() => setIsOpen(false)}
        ></i>
      </div>
    </div>
  );
}

export default FavoriteAdmin;
