import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 p-8">
        <h1 className="text-5xl font-extrabold text-center">Hello, I’m Maja</h1>
        <p className="mt-4 text-xl text-center text-gray-700">
          This is the beginning of my portfolio!
        </p>
      </main>
    </div>
  );
}
