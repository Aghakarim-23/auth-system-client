import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";

const About = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const res = await api.get("/api/about");
      console.log("API response:", res.data); // 👈 burada baxırsan

      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-400 text-sm">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-red-400 text-sm">Error loading data</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-700 mb-2">About</h1>
        <p className="text-slate-400 text-sm mb-8">API response data</p>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
          <p className="text-slate-600">{data?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
