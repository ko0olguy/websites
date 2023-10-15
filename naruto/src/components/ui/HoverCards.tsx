import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Home, Search, WalletCards, Phone, HelpCircle } from "lucide-react";

export const HoverCards = () => {
    return (
        <div className="flex [&>*]:p-2">
            <HoverCard>
                <HoverCardTrigger asChild><a href="/"><Home/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min p-2 rounded-sm">
                    <p className="font-bold text-sm">Home</p>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger asChild><a href="/search"><Search/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min p-2 rounded-sm">
                    <p className="font-bold text-sm">Search</p>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger asChild><a href="/cards"><WalletCards/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min p-2 rounded-sm">
                    <p className="font-bold text-sm">Cards</p>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger asChild><a href="/contact"><Phone/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min p-2 rounded-sm">
                    <p className="font-bold text-sm">Contact</p>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger asChild><a href="/about"><HelpCircle/></a></HoverCardTrigger>
                <HoverCardContent className="w-min h-min p-2 rounded-sm">
                    <p className="font-bold text-sm">About</p>
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}