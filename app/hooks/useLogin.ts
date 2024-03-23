import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  //   const { login } = useAuth();
  //   const { setToken } = useToken();

  const handleLogin = async () => {
    router.push("/login");
  };

  return { handleLogin };
};

export default useLogin;
