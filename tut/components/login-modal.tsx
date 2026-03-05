"use client"

import { useEffect, useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import { LoginForm } from "./login-form-dashboard"

type LoginModalProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function LoginModal({ open, setOpen }: LoginModalProps) {
  const [show, setShow] = useState(false) 

  // When parent opens the modal, mount it and fade/slide in.
  useEffect(() => {
    if (open) setShow(true)
  }, [open])

  function close() {
    // start fade/slide out
    setShow(false)

    // after animation finishes, unmount by updating parent state
    window.setTimeout(() => setOpen(false), 250)
  }

  // If parent says closed AND animation finished, unmount.
  if (!open && !show) return null

  return (
    <div
      onClick={close} // click outside closes
      className={[
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-black/40 backdrop-blur-sm",
        "transition-opacity duration-250",
        show ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        className={[
          "w-full max-w-md rounded-xl bg-background p-6",
          "transition-transform duration-250",
          show ? "translate-y-0 scale-100" : "translate-y-6 scale-95",
        ].join(" ")}
      >
        <LoginForm />
        <Button className="mt-4 w-full" onClick={close}>
          Close
        </Button>
      </div>
    </div>
  )
}