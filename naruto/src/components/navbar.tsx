import img from "./img.png";
import { ModeToggle } from "./toggle";
import { DropDown } from "./ui/dropdown";

export default function NavBar() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur p-2">
    <div className="flex justify-between items-center">
        <div><DropDown/></div>
        <div className="flex items-center">
            <img src={img} className="w-40 mb-2 relative"></img>
        </div>
        <div>
            <ModeToggle />
        </div>
      </div>
    </header>
  );
}
