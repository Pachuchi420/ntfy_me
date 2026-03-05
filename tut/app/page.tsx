"use client"
import {useState} from "react"
import { SignUpModal } from "@/components/signup-modal";
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";

export default function page() {
    const [open, setOpen] = useState(false)
    return (
        <main>
            <AgencyHeroSection openLogin={ () => setOpen(true)} />
            <SignUpModal open ={open} setOpen={setOpen}/>
        </main>
    )
}