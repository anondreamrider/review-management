import React, { ReactNode } from 'react'
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({ children, title = 'AI-Powered Review Management' }: Props) => (
  <div className="min-h-screen bg-background">
    <header className="border-b">
      <div className="container flex h-16 items-center">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
    <div className="flex">
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    </div>
  </div>
)

export default Layout