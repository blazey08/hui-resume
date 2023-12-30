import { ReactNode } from "react";

export function Subtext1({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-sm text-muted-foreground">
      {children}
    </h1>
  );
}
