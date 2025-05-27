"use client";
import { useState, useEffect } from "react";
import type React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLoading } from "@/components/loading-provider";
import { Button } from "@/components/ui/button";

export interface NavItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  href: string;
  icon?: React.ReactNode;
}

interface HeaderProps {
  navItems?: NavItem[];
  socialLinks?: SocialLink[];
}

export function CustomHeader({
  navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "/volunteering", label: "Volunteering" },
    { href: "#contact", label: "Contact" },
  ],
  socialLinks = [
    { platform: "github", href: "https://github.com/rh2o6" },
    { platform: "linkedin", href: "https://www.linkedin.com/in/rh206/" },
    { platform: "email", href: "mailto:robert201621@gmail.com" },
  ],
}: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const { isLoading, setIsLoading } = useLoading();

  const renderIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="h-4 w-4" />;
      case "linkedin":
        return <Linkedin className="h-4 w-4" />;
      case "email":
        return <Mail className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getModifiedHref = (href: string) => {
    if (href.startsWith("#") && !isHomePage) {
      return `/${href}`;
    }
    return href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetHref = getModifiedHref(href)

    // If it's a hash link on the home page, let the default behavior handle it
    if (href.startsWith("#") && isHomePage) {
      return
    }

    // Prevent the default navigation
    e.preventDefault()

    // Check if we're trying to navigate to the current page without a hash
    if (targetHref === pathname && !targetHref.includes("#")) {
      console.log("Already on this page, no navigation needed")
      return // Don't navigate if we're already on this page
    }

    // For all other cases, proceed with navigation
    setIsLoading(true)
    router
      .push(targetHref)
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Navigation error:", error)
        setIsLoading(false)
      })
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        <div className="mr-4 hidden md:flex">
          <Link
            href="/#home"
            className="mr-6 flex items-center space-x-2"
            onClick={(e) => pathname !== "/" && handleNavClick(e, "/")}
          >
            <span className="font-bold">Home</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={getModifiedHref(item.href)}
                className="transition-colors hover:text-foreground/80"
                onClick={(e) => !item.isExternal && handleNavClick(e, item.href)}
                {...(item.isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {socialLinks.map((link, index) => (
            <div key={index} className={link.platform === "github" ? "w-full flex-1 md:w-auto md:flex-none" : ""}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className={`${link.platform === "github" ? "ml-auto hidden h-8 w-8 md:flex" : "h-8 w-8"}`}
                >
                  {link.icon || renderIcon(link.platform)}
                  <span className="sr-only">{link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}</span>
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}