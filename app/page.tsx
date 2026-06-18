export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-4">REVO</h1>

      <p className="text-gray-400 text-center max-w-xl mb-8">
        Premium motorcycle ride-sharing platform. Create rides, join riders,
        and explore the road together.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Create Ride
        </button>

        <button className="border border-white px-6 py-3 rounded-xl font-semibold">
          Join Ride
        </button>
      </div>
    </main>
  );
}