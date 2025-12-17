import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
const ParticipatedContestRow = ({ registeredContest }) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  console.log(registeredContest);

  return (
    
  );
};

export default ParticipatedContestRow;
