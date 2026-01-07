type Props = {
  variant?: "primary" | "outline";
  children: React.ReactNode;
};

export default function Button({ variant = "primary", children }: Props) {
  const base =
    "flex min-w-[140px] h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 font-bold transition-colors text-base leading-normal tracking-[0.015em]";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-blue-700 shadow-lg shadow-primary/20",
    outline:
      "bg-transparent border-2 border-[#e7ebf3] text-[#0d121b] hover:border-primary hover:text-primary",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      <span className="truncate flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
