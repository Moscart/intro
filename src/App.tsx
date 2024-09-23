import Logo from "@/assets/logo.svg";
import Menu from "@/assets/icon-menu.svg";
import HeroMobile from "@/assets/image-hero-mobile.png";
import HeroDesktop from "@/assets/image-hero-desktop.png";
import Databiz from "@/assets/client-databiz.svg";
import Audiophile from "@/assets/client-audiophile.svg";
import Meet from "@/assets/client-meet.svg";
import Maker from "@/assets/client-maker.svg";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import Todo from "@/assets/icon-todo.svg";
import Calendar from "@/assets/icon-calendar.svg";
import Reminders from "@/assets/icon-reminders.svg";
import Planning from "@/assets/icon-planning.svg";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

function App() {
  return (
    <main className="bg-[hsl(var(--almost-white))] min-h-screen">
      <header className="flex justify-between items-center px-4 py-6 md:px-10 md:justify-normal md:gap-16">
        <img className="mt-2" src={Logo} alt="Logo" />
        <div className="hidden md:flex justify-between flex-grow">
          <nav className="text-[hsl(var(--medium-gray))] font-medium text-sm flex gap-4 lg:gap-9 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 group hover:text-[hsl(var(--almost-black))] data-[state=open]:text-[hsl(var(--almost-black))]">
                <div className="">Features</div>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="group-data-[state=open]:rotate-180 transition-transform duration-300"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/#" className="flex gap-3 items-center">
                    <div className="w-6 flex justify-center">
                      <img className="h-4" src={Todo} alt="Todo" />
                    </div>
                    <div className="mt-1">Todo List</div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/#" className="flex gap-3 items-center">
                    <div className="w-6 flex justify-center">
                      <img className="h-4" src={Calendar} alt="Calendar" />
                    </div>
                    <div className="mt-1">Calendar</div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/#" className="flex gap-3 items-center">
                    <div className="w-6 flex justify-center">
                      <img className="h-4" src={Reminders} alt="Reminders" />
                    </div>
                    <div className="mt-1">Reminders</div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/#" className="flex gap-3 items-center">
                    <div className="w-6 flex justify-center">
                      <img className="h-4" src={Planning} alt="Planning" />
                    </div>
                    <div className="mt-1">Planning</div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 group hover:text-[hsl(var(--almost-black))] data-[state=open]:text-[hsl(var(--almost-black))]">
                <div className="">Company</div>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="group-data-[state=open]:rotate-180 transition-transform duration-300"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/#">History</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/#">Our Team</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/#">Blog</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/#" className="hover:text-[hsl(var(--almost-black))]">
              Careers
            </a>
            <a href="/#" className="hover:text-[hsl(var(--almost-black))]">
              About
            </a>
          </nav>
          <div className="grid grid-cols-2 gap-2">
            <Button
              className="text-[hsl(var(--medium-gray))] hover:text-[hsl(var(--almost-black))] hover:bg-transparent"
              variant={"ghost"}
              size={"lg"}
            >
              Login
            </Button>
            <Button
              className="rounded-xl px-4 border border-[hsl(var(--medium-gray))] text-[hsl(var(--medium-gray))] hover:text-[hsl(var(--almost-black))] hover:border-[hsl(var(--almost-black))] hover:bg-transparent"
              variant={"outline"}
              size={"lg"}
            >
              Register
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <img src={Menu} alt="Menu" />
            </SheetTrigger>
            <SheetContent className="text-[hsl(var(--medium-gray))] font-medium">
              <div className="grid gap-4 mt-6">
                <Collapsible>
                  <CollapsibleTrigger className="group flex gap-4 items-center mt-1">
                    Features
                    <div className="">
                      <ChevronDown
                        className="group-data-[state=open]:rotate-180 trnasition duration-300"
                        size={16}
                        strokeWidth={2}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 grid gap-3 ms-6 py-2">
                      <a href="/#" className="flex gap-2 items-center">
                        <div className="w-6">
                          <img className="h-5" src={Todo} alt="Todo" />
                        </div>
                        <div className="mt-1">Todo List</div>
                      </a>
                      <a href="/#" className="flex gap-2 items-center">
                        <div className="w-6">
                          <img className="h-5" src={Calendar} alt="Calendar" />
                        </div>
                        <div className="mt-1">Calendar</div>
                      </a>
                      <a href="/#" className="flex gap-2 items-center">
                        <div className="w-6">
                          <img
                            className="h-5"
                            src={Reminders}
                            alt="Reminders"
                          />
                        </div>
                        <div className="mt-1">Reminders</div>
                      </a>
                      <a href="/#" className="flex gap-2 items-center">
                        <div className="w-6">
                          <img className="h-5" src={Planning} alt="Planning" />
                        </div>
                        <div className="mt-1">Planning</div>
                      </a>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="group flex gap-4 items-center mt-1">
                    Company
                    <div className="">
                      <ChevronDown
                        className="group-data-[state=open]:rotate-180 trnasition duration-300"
                        size={16}
                        strokeWidth={2}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 grid gap-3 ms-6 py-2">
                      <a href="/#">
                        <div className="mt-1">History</div>
                      </a>
                      <a href="/#">
                        <div className="mt-1">Our Team</div>
                      </a>
                      <a href="/#">
                        <div className="mt-1">Blog</div>
                      </a>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <a href="/#">
                  <div className="mt-1">Careers</div>
                </a>
                <a href="/#">
                  <div className="mt-1">About</div>
                </a>
              </div>
              <div className="grid gap-2 mt-4">
                <Button
                  className="text-[hsl(var(--medium-gray))] hover:text-[hsl(var(--almost-black))] hover:bg-transparent"
                  variant={"ghost"}
                  size={"lg"}
                >
                  Login
                </Button>
                <Button
                  className="rounded-xl border border-[hsl(var(--medium-gray))] text-[hsl(var(--medium-gray))] hover:text-[hsl(var(--almost-black))] hover:border-[hsl(var(--almost-black))] hover:bg-transparent"
                  variant={"outline"}
                  size={"lg"}
                >
                  Register
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <section className="md:pt-14 pb-6 md:grid md:grid-cols-2 max-w-md md:max-w-3xl lg:max-w-6xl 2 mx-auto md:px-4">
        <div className="md:row-start-1 md:col-start-2 md:ps-16 lg:ps-24">
          <img src={HeroMobile} className="md:hidden" alt="Hero" />
          <img src={HeroDesktop} className="hidden md:block" alt="Hero" />
        </div>
        <div className="md:flex md:justify-between md:flex-col">
          <div className="text-center md:text-left flex flex-col py-11 px-4 md:py-0 md:pb md:px-0">
            <h1 className="font-bold text-[2.1875rem] md:text-5xl lg:text-[73px] lg:pe-1 md:leading-[0.9] lg:pt-24">
              Make <span className="md:block">remote work</span>
            </h1>
            <p className="font-medium text-[hsl(var(--medium-gray))] mt-3 mb-6 md:my-6 lg:my-12 leading-[1.5rem] md:text-base lg:text-xl md:w-[90%] text-pretty">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <Button className="font-bold md:text-lg p-6 md:px-8 md:py-7 w-fit mx-auto md:mx-0 rounded-2xl">
              Learn more
            </Button>
          </div>
          <div className="flex justify-between items-center px-4">
            <img className="w-20 lg:w-28 h-fit" src={Databiz} alt="Databiz" />
            <img
              className="w-12 lg:w-20 h-fit"
              src={Audiophile}
              alt="Audiophile"
            />
            <img className="w-16 lg:w-24 h-fit" src={Meet} alt="Meet" />
            <img className="w-16 lg:w-24 h-fit" src={Maker} alt="Maker" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
