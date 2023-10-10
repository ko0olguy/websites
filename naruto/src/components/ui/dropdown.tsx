    import { AlignLeft } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuGroup
    } from "@/components/ui/dropdown-menu";
    import { HoverCards } from "./HoverCards";

    export const DropDown = () => {

    return (
        <div className="flex justify-between items-center p-4 dark:text-white">

    <div className="hidden lg:flex">
        <HoverCards/>
    </div>


        <div className="lg:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="icon">
                        <AlignLeft className="h-6 w-6" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-44 text-lg">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                    <a href="/home">Home</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <a href="/search">Search</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <a href="/cards">All Cards</a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                    <a href="/contact">Contact</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <a href="/about">About</a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        </div>
    );
    };
