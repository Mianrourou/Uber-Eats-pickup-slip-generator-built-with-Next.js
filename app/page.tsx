import UberEatsSlipBuilder from "@/components/UberEatsSlipBuilder";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Uber Eats Pickup Slip Generator
          </h1>
          <p className="text-sm text-gray-300">
            Customize and generate pickup slips, support PNG download
          </p>
        </div>
        <UberEatsSlipBuilder />
      </div>
    </main>
  );
}
