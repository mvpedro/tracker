import { toggleVariants } from '@/components/ui/toggle'
import { cn } from '@/lib/shadcn'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default'
})

const ToggleGroup = ({
  className,
  variant,
  size,
  children,
  ref,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
)
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = ({
  className,
  children,
  variant,
  size,
  ref,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        'cursor-pointer',
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      )}
      {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  )
}
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
