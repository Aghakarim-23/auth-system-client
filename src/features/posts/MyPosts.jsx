import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const PostCard = ({ title, content, createdAt, id }) => (
  <Link
    to={`/my-posts/${id}`}
    className="block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200 p-6 group"
  >
    <div className="flex items-start justify-between gap-4 mb-3">
      <span className="text-xs font-medium text-indigo-400 bg-indigo-50 px-2.5 py-1 rounded-full">
        #{id}
      </span>
      <span className="text-xs text-slate-400">{formatDate(createdAt)}</span>
    </div>
    <h3 className="text-base font-semibold text-slate-700 mb-2 group-hover:text-indigo-500 transition-colors duration-150">
      {title}
    </h3>
    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{content}</p>
    <span className="inline-block mt-4 text-xs text-indigo-400 font-medium group-hover:underline">
      Read more →
    </span>
  </Link>
);

const MyPosts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["myPosts"],
    queryFn: async () => {
      const res = await api.get("/api/posts/my-posts");
      return res.data;
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">My Posts</h1>
          <p className="text-slate-400 text-sm mt-1">
            {data?.message ?? "Your published posts"}
          </p>
        </div>

        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl border border-slate-100 p-6 animate-pulse"
              >
                <div className="h-3 bg-slate-100 rounded w-1/4 mb-4" />
                <div className="h-4 bg-slate-100 rounded w-2/3 mb-3" />
                <div className="h-3 bg-slate-100 rounded w-full" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-sm text-red-400">
            Failed to load posts. Please try again.
          </div>
        )}

        {!isLoading && !error && data?.posts?.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center">
            <p className="text-slate-400 text-sm">No posts yet.</p>
          </div>
        )}

        {!isLoading && !error && data?.posts && (
          <div className="space-y-4">
            {data.posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
