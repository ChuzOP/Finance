import Image from "next/image";
import { Text } from "@/app/components/atomic";
import { LoginForm } from "./components/organisms";

const LoginPage = () => {
  return (
    <div className="flex w-full">
      <div className="relative h-screen max-h-screen w-[60%]">
        <Image
          src="/loginImage.jpeg"
          height={1024}
          width={864}
          alt="login image"
          style={{ objectFit: "cover" }}
          className="h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <Text
          variant={"subtitle-01"}
          bold
          className="text-white absolute bottom-10 mx-auto px-32 text-center"
        >
          “El cuidado constante de tus finanzas personales es la semilla que
          cultivará un futuro financiero próspero. Cuida cada centavo como si
          fuese una semilla de tus sueños financieros”
        </Text>
      </div>
      <div className="w-[40%] p-28 lg:p-40 flex flex-col items-center justify-center relative">
        <Text variant={"title-01"} bold className="text-center">
          Login to your account
        </Text>
        <LoginForm />
        <div className="absolute bottom-5 mx-auto flex gap-2">
          <Text variant={"subtitle-03"}>I’m new here, </Text>
          <Text variant={"subtitle-03"} bold underline>
            I want to Signup
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
