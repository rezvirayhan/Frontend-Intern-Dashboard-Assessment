import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
const Login = () => {
  const [email, setEmail] = useState("user1@example.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6 font-sans">
      <div className="max-w-[1000px] w-full bg-white rounded-[32px] shadow-sm border border-gray-100 flex overflow-hidden">
        <div className="hidden md:flex w-1/2 bg-[#0E3E2B] p-12 flex-col relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#1B5C41] rounded-full opacity-50 blur-3xl"></div>
          <div className="relative z-10 flex justify-center mb-12">
            <span className="text-white text-5xl font-bold tracking-tight">
              Donezo
            </span>
          </div>

          <div className="relative z-10 flex-1 flex items-center justify-center">
            <span className="text-white text-3xl font-bold tracking-tight">
              Sign In
            </span>
          </div>

          <div className="relative z-10 text-center mt-12">
            <p className="text-gray-300 text-sm">
              Join over 10k+ teams managing projects efficiently.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome Back!
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              Please enter your details to sign in.
            </p>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. tmichael20@mail.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0E3E2B] focus:ring-2 focus:ring-[#0E3E2B]/10 outline-none transition-all text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0E3E2B] focus:ring-2 focus:ring-[#0E3E2B]/10 outline-none transition-all text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0E3E2B] hover:bg-[#165a3f] text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-green-900/10 disabled:opacity-70"
              >
                {loading ? "Logging in..." : "Sign In"}
              </button>
            </form>

            <p className="text-center mt-8 text-sm text-gray-600">
              Don't have an account?{" "}
              <span className="text-[#0E3E2B] font-bold hover:underline cursor-pointer">
                Sign up for free
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
