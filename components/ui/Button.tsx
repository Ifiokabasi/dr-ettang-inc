import { Arrow } from "./Icons";

const base = "group inline-flex cursor-pointer items-center gap-3 rounded-full font-bold tracking-wide transition duration-200 hover:-translate-y-0.5 hover:brightness-95";
const variants = {
  primary: "bg-brand px-7 py-4 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,.5),0_14px_30px_-14px_rgba(250,208,44,.85)]",
  dark: "bg-dark px-7 py-3 font-semibold text-white shadow-[0_14px_30px_-16px_rgba(0,0,0,.6)]",
  black: "bg-[#0d0d0d] px-7 py-4 text-white",
  outline: "border border-white/35 px-7 py-4 text-white",
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants; arrow?: "left" | "right"; href?: string;
};

export default function Button({ variant = "primary", arrow, href, className = "", children, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = <>{arrow === "left" && <Arrow />}{children}{arrow === "right" && <Arrow />}</>;
  return href ? <a href={href} className={cls}>{inner}</a> : <button className={cls} {...rest}>{inner}</button>;
}
