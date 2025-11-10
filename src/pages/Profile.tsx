import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import { useMe } from "../features/auth/hooks";
import { useUpdateProfile } from "../features/auth/hooks";

export default function Profile() {
  const { data: meData } = useMe();
  const updateProfile = useUpdateProfile();

  const user = useMemo(() => meData, [meData]);

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [avatar, setAvatar] = useState(
    (user as any)?.userAvatar || (user as any)?.avatarUrl || ""
  );

  useEffect(() => {
    if (!user) return;
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setPhoneNumber(user.phoneNumber || "");
    setAvatar((user as any)?.userAvatar || (user as any)?.avatarUrl || "");
  }, [user]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile.mutate({
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      phoneNumber: phoneNumber || undefined,
      userAvatar: avatar || undefined,
    });
  };

  return (
    <div className="min-h-screen pt-28 bg-white">
      <Navbar />
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl md:text-3xl font-bold">Your Profile</h2>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Update your personal details.
              </p>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    {avatar ? (
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img
                        src={avatar}
                        alt="Profile image"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-400"
                        fill="currentColor"
                      >
                        <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm0 12c-5 0-9 2.5-9 5.5S7 25 12 25s9-2.5 9-5.5S17 14 12 14z" />
                      </svg>
                    )}
                  </div>
                  <input
                    placeholder="Avatar image URL"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    className="flex-1 border rounded px-3 py-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600">
                      First name
                    </label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 w-full border rounded px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600">
                      Last name
                    </label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 w-full border rounded px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Phone</label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-1 w-full border rounded px-3 py-2"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    disabled={updateProfile.isPending}
                    className="rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#00C5C5] to-[#009F26]"
                  >
                    {updateProfile.isPending ? "Saving..." : "Save changes"}
                  </button>
                  {updateProfile.isError && (
                    <p className="text-sm text-red-600">
                      {(updateProfile.error as Error).message}
                    </p>
                  )}
                  {updateProfile.isSuccess && (
                    <p className="text-sm text-emerald-600">Saved!</p>
                  )}
                </div>
              </form>
            </div>

            <div className="md:w-1/2 bg-gradient-to-br from-[#00C5C5] to-[#009F26] p-8 flex items-center justify-center text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold">Keep your info updated</h3>
                <p className="mt-3 text-sm md:text-base opacity-90">
                  A complete profile helps us personalise your experience.
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
