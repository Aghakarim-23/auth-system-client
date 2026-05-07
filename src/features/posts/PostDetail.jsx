import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const PostDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await api.get(`/api/posts/${id}`);
      return res.data;
    },
  });

  const post = data?.post ?? data;

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/my-posts"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-500 transition-colors mb-8"
        >
          ← Back to My Posts
        </Link>

        {isLoading && (
          <div className="bg-white rounded-2xl border border-slate-100 p-8 animate-pulse space-y-4">
            <div className="h-3 bg-slate-100 rounded w-1/4" />
            <div className="h-6 bg-slate-100 rounded w-3/4" />
            <div className="space-y-2 pt-2">
              <div className="h-3 bg-slate-100 rounded w-full" />
              <div className="h-3 bg-slate-100 rounded w-5/6" />
              <div className="h-3 bg-slate-100 rounded w-4/6" />
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-sm text-red-400">
            Failed to load this post. Please try again.
          </div>
        )}

        {!isLoading && !error && post && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-indigo-400 bg-indigo-50 px-2.5 py-1 rounded-full">
                #{post.id}
              </span>
              <span className="text-xs text-slate-400">{formatDate(post.createdAt)}</span>
            </div>

            <h1 className="text-2xl font-bold text-slate-800 mb-4">{post.title}</h1>

            <div className="border-t border-slate-100 my-5" />

            <p className="text-sm text-slate-600 leading-7 whitespace-pre-wrap">{post.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
