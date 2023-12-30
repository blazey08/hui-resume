import { ReactNode } from "react";

export function Heading5({children}: {children: ReactNode}){
    return(
        <h4 className="text-sm font-medium leading-none">
            {children}
        </h4>
    )
}