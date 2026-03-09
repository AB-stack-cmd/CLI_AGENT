"use client"

export default function LoginForm() {
  return (
    <div className="border p-5 rounded-md w-80">
      <h2 className="text-lg font-semibold mb-4">Login</h2>

      <form className="flex flex-col gap-3">

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-black text-white p-2 rounded"
        >
          Sign In
        </button>

      </form>
    </div>
  )
}