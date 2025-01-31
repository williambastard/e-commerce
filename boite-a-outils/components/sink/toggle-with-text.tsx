import { Italic } from "lucide-react"

import { Toggle } from "@/boite-a-outils/components/ui/toggle"

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  )
}
