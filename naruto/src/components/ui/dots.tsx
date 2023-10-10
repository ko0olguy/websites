import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type DotProp = {
active: any
}

const Dot = ({ active }: DotProp) => {
const controls = useAnimation();

// Animate when active prop changes
useEffect(() => {
    controls.start({ opacity: active ? 1 : 0.5, scale: active ? 1.2 : 1 });
}, [active]);

return (
    <motion.div
    animate={controls}
    className={`rounded-full mx-5 my-2 bg-foreground h-2 w-2`}
    transition={{ duration: 0.3 }}
    />
);
};

type DotProps = {
length: number,
currentIndex: number
}

export const Dots = ({ length, currentIndex }: DotProps) => (
<div className="row-span-full justify-center z-50">
    {[...Array(length)].map((_, index) => (
    
    <Dot key={index} active={index === currentIndex} />
    ))}
</div>
);