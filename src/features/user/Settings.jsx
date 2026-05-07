import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../../api/axios";

const Settings = () => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await api.put("/api/user/settings", { name });
      return res.data;
    },
    onSuccess: () => {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) mutation.mutate();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="px-6 pt-8 pb-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">Update Profile</h2>
              <p className="text-slate-400 text-sm mt-0.5">Change your display name</p>
            </div>

            <div className="border-t border-slate-100 mb-5" />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>

              {mutation.isError && (
                <p className="text-xs text-red-400">Failed to update. Please try again.</p>
              )}

              {success && (
                <p className="text-xs text-green-500">Profile updated successfully.</p>
              )}

              <button
                type="submit"
                disabled={mutation.isPending || !name.trim()}
                className="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {mutation.isPending ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
