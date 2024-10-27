"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Reviews",
    href: "/reviews",
    subItems: [
      { title: "All Reviews", href: "/reviews" },
      { title: "Pending", href: "/reviews/pending" },
      { title: "Responded", href: "/reviews/responded" },
    ],
  },
  {
    title: "Analytics",
    href: "/analytics",
    subItems: [
      { title: "Overview", href: "/analytics" },
      { title: "Sentiment Analysis", href: "/analytics/sentiment" },
      { title: "Trends", href: "/analytics/trends" },
    ],
  },
  {
    title: "Settings",
    href: "/settings",
  },
]

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {mainNavItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

        if (item.subItems) {
          return (
            <DropdownMenu key={item.title}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-8 w-full justify-start",
                    isActive
                      ? "bg-muted font-medium text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem key={subItem.title} asChild>
                    <Link
                      href={subItem.href}
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        pathname === subItem.href
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {subItem.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }

        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}