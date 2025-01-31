import { Label } from "@/boite-a-outils/components/ui/label"
import { Switch } from "@/boite-a-outils/components/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
