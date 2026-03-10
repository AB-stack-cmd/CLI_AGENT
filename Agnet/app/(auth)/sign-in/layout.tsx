"use client"
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export default function AuthLayout({children}:{children:React.ReactNode}){
    return(
        <div suppressHydrationWarning >
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
    )
}