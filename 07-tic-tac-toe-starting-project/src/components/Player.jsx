import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    buttonCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
      {/* isEditing ? 'Save' : 'Edit' */}
    </li>
  );
}
