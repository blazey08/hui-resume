import { ReactNode } from "react";

export function Heading4({ children }: { children: ReactNode }) {
    return (
        <p className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </p>
    );
}
