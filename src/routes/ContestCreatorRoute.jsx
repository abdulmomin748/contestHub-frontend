import React from "react";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const ContestCreatorRoute = ({ children }) => {
  const { loading } = useAuth();
  const { isPending, role } = useRole();
  if (loading || isPending) {
    return <p className="text-amber-600 text-3xl">Loading..................</p>;
  }
  if (role !== "contestCreator") {
    return <p className="text-red-600 text-3xl">Forbidden Access</p>;
  }
  return children;
};

export default ContestCreatorRoute;
