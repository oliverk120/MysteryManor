interface NoirTitleProps {
  subtitle?: string;
  small?: boolean;
}

export default function NoirTitle({ subtitle, small }: NoirTitleProps) {
  if (small) {
    return (
      <div className="bg-black text-white text-center py-2 text-sm font-serif tracking-widest">
        Only Murders in the Bedroom
      </div>
    );
  }

  return (
    <header className="bg-black text-white text-center py-10 shadow-lg">
      <h1 className="text-5xl font-serif tracking-widest">
        Only Murders in the Bedroom
      </h1>
      {subtitle && <p className="text-xl mt-2 italic">{subtitle}</p>}
    </header>
  );
}
