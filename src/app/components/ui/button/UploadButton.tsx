'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "../../dialog/dialog"
import { Button } from "./Button"


export function UploadButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(prev) => {
        if (!prev) {
          setIsOpen(prev)
        }
      }}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <Button>
          Carregar PDF
        </Button>
      </DialogTrigger>

      <DialogContent>
        teste
      </DialogContent>
    </Dialog>
  )
}
