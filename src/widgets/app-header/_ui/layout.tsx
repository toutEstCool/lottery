// Layout Component for Header

import { Button } from "@/shared/ui/button";
import { Sheet, SheetTrigger } from "@/shared/ui/sheet";
import { Menu } from "lucide-react";
import { ReactNode } from "react";

interface HeaderLayoutProps {
  logo?: ReactNode
  nav?: ReactNode
  profile?: ReactNode
  actions?: ReactNode
}

export function Layout(props: HeaderLayoutProps) {
  const {} = props


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="md:hidden mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'ghost'} size={'icon'}>
                <Menu className="h-5 w-5"/>
              </Button>
            </SheetTrigger>
          </Sheet>
        </div>
      </div>
    </header>
  )
}