import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";
const ContestCreatorMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Contest"
        address="add-contest"
      />
      <MenuItem
        icon={MdHomeWork}
        label="My Created Contexts"
        address="my-crtd-context"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Submitted Tasks"
        address="submiteted-tasks"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Update Contests"
        address="update-contests"
      />
    </>
  );
};

export default ContestCreatorMenu;
