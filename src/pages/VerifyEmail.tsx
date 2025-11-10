import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import { useSendOtp, useVerifyOtp } from "../features/auth/hooks";
import { useLocation } from "react-router-dom";

export default function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const sendOtp = useSendOtp();
  const verifyOtp = useVerifyOtp();
  const navigate = useNavigate();

  const location = useLocation() as { state?: { email?: string } };
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);

  const onResend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    sendOtp.mutate({ email });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !otp) return;
    verifyOtp.mutate(
      { email, otp: Number(otp) },
      {
        onSuccess: () => {
          // After email is verified, have user login; login will redirect to last page or home
          navigate("/login", { replace: true });
        },
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
              <h2 className="text-2xl md:text-3xl font-bold">
                Verify your email
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Enter the OTP sent to your email address.
              </p>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full border rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">OTP</label>
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="mt-1 w-full border rounded px-3 py-2"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    disabled={verifyOtp.isPending}
                    className="rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#00C5C5] to-[#009F26]"
                  >
                    {verifyOtp.isPending ? "Verifying..." : "Verify"}
                  </button>
                  <button
                    onClick={onResend}
                    disabled={sendOtp.isPending}
                    type="button"
                    className="rounded-lg px-4 py-2 font-semibold border"
                  >
                    {sendOtp.isPending ? "Sending..." : "Resend OTP"}
                  </button>
                </div>

                {(verifyOtp.isError || sendOtp.isError) && (
                  <p className="mt-2 text-sm text-red-600">
                    {(verifyOtp.error as Error)?.message ||
                      (sendOtp.error as Error)?.message}
                  </p>
                )}
              </form>
            </div>

            <div className="md:w-1/2 bg-gradient-to-br from-[#00C5C5] to-[#009F26] p-8 flex items-center justify-center text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold">Finish setting up</h3>
                <p className="mt-3 text-sm md:text-base opacity-90">
                  Verify to continue booking.
                </p>
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
