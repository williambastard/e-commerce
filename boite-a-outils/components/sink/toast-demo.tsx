"use client"

import { useToast } from "@/boite-a-outils/hooks/use-toast"
import { Button } from "@/boite-a-outils/components/ui/button"
import { ToastAction } from "@/boite-a-outils/components/ui/toast"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
  )
}
