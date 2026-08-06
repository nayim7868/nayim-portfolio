"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Background", href: "/background" },
  { label: "Contact", href: "/contact" },
];

export function HeaderNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--surface)]/90 backdrop-blur-xl">
      <Container className="flex max-w-[88rem] min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="brand shrink-0">
          <span className="brand-mark font-mono" aria-hidden>
            NS
          </span>
          <span className="header-brand">
            <span className="header-brand-name font-mono text-sm font-semibold tracking-wide">
              {siteConfig.name}
            </span>
            <span className="header-brand-label font-mono leading-none">
              {siteConfig.brandLabel}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition hover:text-white",
                pathname === item.href && "text-white",
              )}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="accent-cyan inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white transition hover:border-accent"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 fill-current"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3 .405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            GitHub
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-white/25 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5 fill-none stroke-current stroke-2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-[var(--surface)]/95 backdrop-blur-xl md:hidden"
        >
          <Container className="flex max-w-[88rem] flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.04] hover:text-white",
                  pathname === item.href && "bg-white/[0.04] text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="accent-cyan rounded-lg border border-white/10 px-3 py-2.5 text-sm text-white transition hover:border-accent"
            >
              GitHub
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
