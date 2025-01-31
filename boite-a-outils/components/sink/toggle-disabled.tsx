import { Underline } from "lucide-react"

import { Toggle } from "@/boite-a-outils/components/ui/toggle"

export function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  )
}
