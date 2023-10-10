import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Home, Search, WalletCards, Phone, HelpCircle } from "lucide-react";

export const HoverCards = () => {
    return (
        <div className="flex [&>*]:p-2">
            <HoverCard>
                <HoverCardTrigger><a href="/home"><Home/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min">
                    <p className="font-bold">Home</p>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger><a href="/search"><Search/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min">
                    <p className="font-bold">Search</p>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger><a href="/cards"><WalletCards/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min">
                    <p className="font-bold">Cards</p>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger><a href="/contact"><Phone/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min">
                    <p className="font-bold">Contact</p>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger><a href="/about"><HelpCircle/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min">
                    <p className="font-bold">About</p>
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}