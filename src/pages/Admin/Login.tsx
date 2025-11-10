import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Subscribe from '../../components/Subscribe';
import { useLogin } from '../../features/auth/hooks';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate(
      { email, password },
      {
        onSuccess: () => navigate('/admin/dashboard'),
      }
    );
  };

  return (
    <div className="min-h-screen pt-28 bg-white">
      <Navbar />
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl md:text-3xl font-bold">Welcome back</h2>
              <p className="mt-3 text-sm md:text-base text-gray-600">Sign in to access your bookings and preferences.</p>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-emerald-600">Forgot?</a>
                </div>

                <div>
                  <button disabled={login.isPending} className="w-full rounded-lg py-3 font-semibold text-white bg-gradient-to-r from-[#00C5C5] to-[#009F26]">
                    {login.isPending ? 'Signing in...' : 'Sign in'}
                  </button>
                  {login.isError && <p className="mt-2 text-sm text-red-600">{(login.error as Error).message}</p>}
                </div>
              </form>

              <p className="mt-4 text-sm text-gray-600">Don't have an account? <a href="/signup" className="text-emerald-600 font-medium">Sign up</a></p>
            </div>

            <div className="md:w-1/2 bg-gradient-to-br from-[#00C5C5] to-[#009F26] p-8 flex items-center justify-center text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold">A better way to book</h3>
                <p className="mt-3 text-sm md:text-base opacity-90">Save your favourite packages and get early-bird offers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </div>
  );
}