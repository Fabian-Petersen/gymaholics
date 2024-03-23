import { useRouter } from "next/navigation";

const useRegister = () => {
  const router = useRouter();

  const handleRegister = async () => {
    router.push("/register");
  };

  return { handleRegister };
};

export default useRegister;
