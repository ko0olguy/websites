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

export const DropDown = () => {
return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
                <AlignLeft className="h-[2rem] w-[2rem] dark:text-white"/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 text-lg">
            <DropdownMenuGroup>
                <DropdownMenuItem><a href="/home">Home</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/search">Search</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/cards">All Cards</a></DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem><a href="/contact">Contact</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/about">About</a></DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}