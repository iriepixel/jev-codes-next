import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">404</p>
      <h1 className="text-[32px] font-bold tracking-tight md:text-[48px]">Nothing here</h1>
      <p className="text-foreground/60">That page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-4 rounded text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Back home
      </Link>
    </main>
  );
}
