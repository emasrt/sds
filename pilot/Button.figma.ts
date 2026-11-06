// url=https://www.figma.com/design/aq8Ojjdvio3MEOwhOer8sU/Simple-Design-System--Community-?node-id=4185-3778
// source=src/ui/primitives/Button/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')

// Primary is the code default, but we emit it explicitly so the snippet is self-describing
const variant = instance.getEnum('Variant', {
  'Primary': 'primary',
  'Neutral': 'neutral',
  'Subtle': 'subtle',
})

// Medium is the code default: only Small needs to be emitted
const size = instance.getEnum('Size', {
  'Medium': undefined,
  'Small': 'small',
})

// State=Hover is a visual-only state in Figma (no code prop); Disabled -> isDisabled
const isDisabled = instance.getEnum('State', {
  'Default': false,
  'Hover': false,
  'Disabled': true,
})

const hasIconStart = instance.getBoolean('Has Icon Start')
const iconStartSwap = hasIconStart ? instance.getInstanceSwap('Icon Start') : null
let iconStart
if (iconStartSwap && iconStartSwap.type === 'INSTANCE') {
  iconStart = iconStartSwap.executeTemplate().example
}

const hasIconEnd = instance.getBoolean('Has Icon End')
const iconEndSwap = hasIconEnd ? instance.getInstanceSwap('Icon End') : null
let iconEnd
if (iconEndSwap && iconEndSwap.type === 'INSTANCE') {
  iconEnd = iconEndSwap.executeTemplate().example
}

export default {
  example: figma.code`<Button
  onPress={() => {}}
  variant="${variant}"
  ${size ? figma.code`size="${size}"` : ''}
  ${isDisabled ? 'isDisabled' : ''}
>
  ${iconStart}
  ${label}
  ${iconEnd}
</Button>`,
  imports: ['import { Button } from "primitives"'],
  id: 'button',
  metadata: { nestable: true },
}
