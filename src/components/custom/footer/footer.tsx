"use client";

import * as React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8 grid gap-8 md:grid-cols-4">
          {/* Column 1 - Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-2xl border flex items-center justify-center">
                <span className="text-xs font-semibold tracking-wider">MX</span>
              </div>
              <span className="font-medium tracking-tight">
                Media X Infinity
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building clean, fast, and scalable web solutions.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:underline">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-medium mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web" className="hover:underline">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:underline">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:underline">
                  SEO & Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - CTA */}
          <div>
            <h4 className="font-medium mb-3">Let's talk</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Have a project in mind?
            </p>
            <Button asChild className="rounded-2xl w-full md:w-auto">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-4" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Media X Infinity. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
