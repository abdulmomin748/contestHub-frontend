import useAuth from "./useAuth";
import useAxiosSequre from "./useAxiosSequre";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSequre();
  const { isPending, data: role = "user" } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}/role`);
      console.log("from use role inside queryFn", res.data);

      return res.data?.role;
    },
  });
  console.log("from use role", role);

  return { role, isPending };
};

export default useRole;
