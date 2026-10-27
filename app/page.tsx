export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-6 text-center text-black">
      <h1 className="text-3xl font-bold md:text-5xl">Maintenance Mode</h1>
      <p className="mt-4 text-sm text-black/70 md:text-base">
        Our server is currently being upgraded, please come back in the future.
      </p>
    </div>
  )
}
