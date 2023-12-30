import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { sections } from "./routes";
import { Link } from 'react-scroll';
import { Button } from "@/components/ui/button";
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";

export function Navbar() {

    const isMobile = useMediaQuery({ maxWidth: 767 })
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        if (!isMobile) {
            setShowDrawer(false);
        } else if (isMobile) {
            setShowDrawer(true)
        }
    }, [isMobile]);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    };

    return (
        <div>
            {isMobile && (
                <Button onClick={toggleDrawer} className="fixed top-0 right-0 m-4" variant="ghost" size="icon">
                    <AlignJustify />
                </Button>
            )}

            <nav className="lg:flex flex-col fixed top-1/2 right-0 transform -translate-y-1/2">
                {isMobile ? (
                    <div className={`drawer right-0 p-2 rounded-full bg-[#FBFBFB] bg-opacity-10 transform ${showDrawer ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
                        <ul className="flex flex-col my-4">
                            {sections.map((route) => (
                                <li key={route.id} className="my-4">
                                    <Link
                                        to={route.id}
                                        smooth={true}
                                        className="text-black-500 hover:text-blue-700 block">
                                        {route.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                ) : (
                    <div className={`flex-col items-center h-full justify-center rounded-full bg-[#FBFBFB] bg-opacity-10 p-1 ${isMobile ? 'hidden' : ''}`}>
                        <ul className="flex flex-col my-4">
                            {sections.map((route) => (
                                <li key={route.id} className="my-4">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <Link
                                                        to={route.id}
                                                        smooth={true}
                                                        className="text-black-500 hover:text-blue-700 block">
                                                        {route.icon}
                                                    </Link>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {route.label}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>

    )
}