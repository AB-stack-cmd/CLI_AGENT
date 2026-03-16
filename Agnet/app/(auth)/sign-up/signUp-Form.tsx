"use client";

import { useState } from "react";



const fields = [
  { id: "name",     label: "Full name",     type: "text",     placeholder: "Jane Smith" },
  { id: "email",    label: "Email address", type: "email",    placeholder: "jane@company.com" },
  { id: "password", label: "Password",      type: "password", placeholder: "Min. 8 characters" },
];

export default function SignUpForm() {

    
  const [focused, setFocused]     = useState<string | null>(null);
  const [values, setValues]       = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  console.log(values)

  return (
    <main className="relative flex min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#f0ede8]">

      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,237,232,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(240,237,232,.03) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Left panel ── */}
      <aside className="relative z-10 hidden md:flex w-[42%] flex-col justify-between border-r border-white/[.07] px-14 py-12">
        <div className="flex items-center gap-2.5">
          <span className="text-[#c8b99a]">◆</span>
          <span className="text-sm font-medium tracking-[.1em] uppercase">Forma</span>
        </div>

        <div className="select-none">
          <p className="mb-2 text-sm font-light tracking-widest text-white/40">Built for those who</p>
          <p
            className="leading-[.9] tracking-tight text-[#f0ede8]"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(52px,6vw,88px)" }}
          >
            move fast.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-light text-white/30">
          <span>© 2026 Forma Inc.</span>
          <a href="#" className="transition-colors hover:text-white/70">Privacy</a>
          <a href="#" className="transition-colors hover:text-white/70">Terms</a>
        </div>
      </aside>

      {/* ── Right panel ── */}
      <section className="relative z-10 flex flex-1 items-center justify-center px-8 py-12 md:px-14">
        {!submitted ? (
          <div
            className="w-full max-w-[380px]"
            style={{ animation: "fadeUp .5s ease both" }}
          >
            {/* Header */}
            <div className="mb-11">
              <h1
                className="mb-2.5 text-[36px] font-normal tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Create account
              </h1>
              <p className="text-sm font-light text-white/45">
                Already have one?{" "}
                <a href="#" className="text-[#c8b99a] transition-colors hover:text-[#e0d4c0]">Sign in</a>
              </p>
            </div>

            {/* Fields */}
            <form onSubmit={handleSubmit} className="mb-7 flex flex-col gap-8">
              {fields.map(({ id, label, type, placeholder }) => (
                <div key={id} className="relative">
                  <label
                    htmlFor={id}
                    className={`mb-2.5 block text-[11px] font-medium tracking-[.1em] uppercase transition-colors duration-200 ${
                      focused === id ? "text-[#c8b99a]" : "text-white/35"
                    }`}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={values[id as keyof typeof values]}
                    onChange={handleChange}
                    onFocus={() => setFocused(id)}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full border-none bg-transparent pb-3 text-base font-light text-[#f0ede8] placeholder-white/20 outline-none caret-[#c8b99a]"
                  />
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
                    <div
                      className="absolute inset-0 origin-left bg-[#c8b99a] transition-transform duration-300"
                      style={{ transform: focused === id ? "scaleX(1)" : "scaleX(0)" }}
                    />
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2.5 bg-[#f0ede8] px-7 py-4 text-sm font-medium tracking-[.05em] text-[#0a0a0a] transition-all duration-200 hover:-translate-y-px hover:bg-[#e8e3dc] active:translate-y-0"
              >
                <span>Get started</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            <p className="text-center text-xs font-light leading-relaxed text-white/25">
              By signing up, you agree to our{" "}
              <a href="#" className="text-[#c8b99a] transition-colors hover:text-[#e0d4c0]">Terms</a>{" "}and{" "}
              <a href="#" className="text-[#c8b99a] transition-colors hover:text-[#e0d4c0]">Privacy Policy</a>.
            </p>
          </div>
        ) : (
          <div className="text-center" style={{ animation: "fadeUp .5s ease both" }}>
            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center border border-[#c8b99a]/40 text-xl text-[#c8b99a]">
              ✓
            </div>
            <h2
              className="mb-3 text-[40px] font-normal tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              You&rsquo;re in.
            </h2>
            <p className="text-[15px] font-light text-white/45">
              Check your inbox to confirm your email.
            </p>
          </div>
        )}
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        body { font-family:'DM Sans',sans-serif; }
        input:-webkit-autofill {
          -webkit-box-shadow:0 0 0 1000px #0a0a0a inset;
          -webkit-text-fill-color:#f0ede8;
        }
      `}</style>
    </main>
  );
}