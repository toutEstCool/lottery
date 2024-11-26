// Layout Component for Header

import { Button } from "@/shared/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/shared/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface HeaderLayoutProps {
  logo?: ReactNode
  nav?: ReactNode
  profile?: ReactNode
  actions?: ReactNode
}

export function Layout(props: HeaderLayoutProps) {
  const {logo = 'https://i.pinimg.com/736x/18/53/17/18531772d5c38258260b74b1804d7050.jpg'} = props


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-end">
        <div className="md:hidden mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'ghost'} size={'icon'}>
                <Menu className="h-5 w-5"/>
              </Button>
            </SheetTrigger>
            <SheetContent side={'right'}>
              <SheetHeader>
                {/* <Image src={logo} width={35} height={35}/> */}
              </SheetHeader>
              <ul className="mt-4">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}