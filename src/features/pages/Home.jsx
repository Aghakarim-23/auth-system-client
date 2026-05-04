import React from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios"

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const res = await api.get("/api/home");
          console.log("API response:", res.data); // 👈 burada baxırsan

      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

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

export default Home;