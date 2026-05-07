import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";

const User = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await api.get("/api/user/profile");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-600 rounded-full animate-spin" />
          <p className="text-slate-400 text-sm">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-8 text-center max-w-sm w-full">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-slate-700 font-medium">Failed to load profile</p>
          <p className="text-slate-400 text-sm mt-1">Please try again later.</p>
        </div>
      </div>
    );
  }

  const { user } = data;
  const initials = user?.name ? user.name.slice(0, 2).toUpperCase() : "??";

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Body */}
          <div className="px-6 pt-8 pb-6">
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-white text-xl font-bold tracking-wide">{initials}</span>
              </div>
            </div>

            {/* Name & email */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">{user?.name}</h2>
              <p className="text-slate-400 text-sm mt-0.5">{user?.email}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 mb-5" />

            {/* Fields */}
            <div className="space-y-4">
              <Row icon={<IdIcon />} label="User ID" value={`#${user?.id}`} />
              <Row icon={<PersonIcon />} label="Full Name" value={user?.name} />
              <Row icon={<MailIcon />} label="Email" value={user?.email} />
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-xs mt-4">{data?.message}</p>
      </div>
    </div>
  );
};

const Row = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-xs text-slate-400 leading-none mb-0.5">{label}</p>
      <p className="text-sm font-medium text-slate-700 truncate">{value}</p>
    </div>
  </div>
);

const IdIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
  </svg>
);

const PersonIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default User;
