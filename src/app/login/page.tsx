import Link from "next/link";
import { SignInCard } from "@/components/Login/SignInCard";

export const LoginPage = () => {
  return (
    <main className="min-h-screen bg-[#010101] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md my-[75px]">
        <div className="text-center mb-10">
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            {"Iniciar sesión"}
          </h1>
          <p className="mt-3 text-gray-300 text-base md:text-lg">
            {"Accedé para armar equipos balanceados en segundos."}
          </p>
        </div>
        <SignInCard />
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-gray-400 hover:text-white underline underline-offset-4"
          >
            {"Volver al inicio"}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
