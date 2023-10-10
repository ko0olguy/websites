import dark from "../img-dark.png";
import { ModeToggle } from "./toggle";
import { DropDown } from "./dropdown";

export default function NavBar() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur p-3">
      <div className="flex justify-between items-center h-full">
        <div className="self-center absolute">
          <DropDown />
        </div>
        <div className="flex justify-center items-center self-center flex-1">
          <img src={dark} className="w-40" alt="Logo" />
        </div>
        <div className="self-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
