import { Timeline } from "@/components/about-me/timeline";
import { Heading2 } from "@/components/common/typography/Heading2";
import { Heading4 } from "@/components/common/typography/Heading4";


export function AboutMe() {
    return (
        <div id="about" className="flex flex-col gap-y-4 mb-2">
            <Heading2>About Me</Heading2>
            <Heading4>My Journey</Heading4>
            <Timeline />
        </div>
    )
}