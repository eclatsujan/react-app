import { PropsWithChildren } from "react";


export default function AppLayout({ children }: PropsWithChildren){
    return <div className="h-screen flex items-center justify-center">
        {children}
    </div>
}