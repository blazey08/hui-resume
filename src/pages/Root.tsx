import { Navbar } from "@/components/common/navbar/navbar"
import { sections } from "@/components/common/navbar/routes"
import { Element } from "react-scroll"

export function RootLayout() {

    return (
        <div className="flex">
            <Navbar />
            <div className="flex flex-col items-center justify-center flex-1 p-4">
                {sections.map(({ id, component: SectionComponent }) => (
                    <Element key={id} name={id}>
                        <SectionComponent />
                    </Element>
                ))}
            </div>
        </div>
    )
}