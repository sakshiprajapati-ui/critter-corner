"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

// shadcn/ui components — ensure these paths match your setup
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Minimal theme toggle (no extra deps): toggles `dark` on <html>
function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    const root = document.documentElement;
    const initial = root.classList.contains("dark");
    setIsDark(initial);
  }, []);
  const toggle = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    setIsDark(root.classList.contains("dark"));
    localStorage.setItem(
      "theme",
      root.classList.contains("dark") ? "dark" : "light"
    );
  };
  React.useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") document.documentElement.classList.add("dark");
    if (stored === "light") document.documentElement.classList.remove("dark");
  }, []);
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggle}
      className="rounded-2xl"
    >
      <span className="inline-block h-4 w-4">
        {isDark ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.64 13A9 9 0 1 1 11 2.36 7 7 0 1 0 21.64 13z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zM4.84 20.83l1.79-1.79-1.79-1.8-1.79 1.8 1.79 1.79zM20 13h3v-2h-3v2zM17.24 4.84l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM12 7a5 5 0 100 10 5 5 0 000-10zm7.16 13.83l-1.79-1.79-1.79 1.79 1.79 1.79 1.79-1.79z" />
          </svg>
        )}
      </span>
    </Button>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
  ];

  const services = [
    { title: "Web Development", href: "/services/web" },
    { title: "UI/UX Design", href: "/services/design" },
    { title: "SEO & Growth", href: "/services/seo" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-2xl border flex items-center justify-center">
                <span className="text-xs font-semibold tracking-wider">MX</span>
              </div>
              <span className="hidden sm:block font-medium tracking-tight">
                Media X Infinity
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="rounded-xl">
                    Services <ChevronDown className="ml-1 size-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-3">
                    <ul className="grid gap-1 w-56">
                      {services.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <ModeToggle />
            <Button asChild className="hidden sm:inline-flex rounded-2xl">
              <Link href="/contact">
                <Phone className="mr-2 size-4" />
                Contact
              </Link>
            </Button>

            {/* Mobile menu trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-2xl"
                  aria-label="Open menu"
                >
                  {open ? (
                    <X className="size-5" />
                  ) : (
                    <Menu className="size-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-xs">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <div className="grid gap-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Separator className="my-2" />
                    <div>
                      <div className="px-3 pb-1 text-xs font-medium uppercase tracking-wide opacity-60">
                        Services
                      </div>
                      <div className="grid">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setOpen(false)}
                            className="rounded-xl px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button asChild className="mt-4 w-full rounded-2xl">
                    <Link href="/contact">
                      <Phone className="mr-2 size-4" />
                      Contact
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
