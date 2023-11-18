import axios from "axios";

const useLogOut = () => {
  const logout = async () => {
    return (await axios.get("/api/auth/logout")).data;
  };
  return logout;
};

export default useLogOut;
