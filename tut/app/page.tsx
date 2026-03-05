"use client"
import {useState} from "react"
import { LoginModal } from "@/components/login-modal";
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";

export default function page() {
    const [open, setOpen] = useState(false)
    return (
        <main>
            <AgencyHeroSection openLogin={ () => setOpen(true)} />
            <LoginModal open ={open} setOpen={setOpen}/>
        </main>
    )
}