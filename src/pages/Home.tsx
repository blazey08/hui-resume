import { Intro } from "@/components/home/intro";
import { AnimationDiv } from "@/components/home/animationDiv";

export function Home() {
    return (
        <div id="home" className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <Intro />
                <AnimationDiv />
            </div>
        </div>
    )
}