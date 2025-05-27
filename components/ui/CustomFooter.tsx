"use client";
import { useState, useEffect } from "react";
import type React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
    <div className="container flex items-center justify-center md:h-24">
      <p className="text-center text-sm leading-loose text-muted-foreground">
      © 2025 Robert Hollander. All rights reserved.
      </p>
    </div>
  </footer>
  );
}