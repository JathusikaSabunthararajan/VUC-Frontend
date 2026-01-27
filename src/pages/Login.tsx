import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.jfif"; // ✅ Correctly import your logo

type LoginProps = {
  onLoginSuccess: () => void;
};

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Dummy login logic
    setTimeout(() => {
      if (email.trim() !== "" && password.trim() !== "") {
        localStorage.setItem("token", "dummy-token");
        onLoginSuccess(); // ✅ login success
      } else {
        setError("Please enter username and password");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={logo} // ✅ Use imported logo
            alt="University Logo"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Sign in with your university email
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username / Email
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#7D1230] text-white px-4 py-2 rounded-lg hover:bg-[#9D1240] transition-colors flex justify-center items-center gap-2"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
