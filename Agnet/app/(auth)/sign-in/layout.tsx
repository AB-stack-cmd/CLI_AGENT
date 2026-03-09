"use client"
import React, { ReactNode } from "react";

export default function AuthLayout({childen: children}:{childen:React.ReactNode}){
    return(
        <div>
            {children}
        </div>
    )
}