import Register from "./Register"
export default function Home() {
  return (
    <section className="flex flex-col items-center h-screen w-full">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Register />
      </div>
    </section>
  );
}
