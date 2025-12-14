import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-[#0C6158] text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)]',
        destructive:
          'bg-[#D64545] text-white hover:bg-[#D64545]/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)]',
        secondary:
          'bg-[#CDEDE4] text-[#0C6158] hover:bg-[#CDEDE4]/80',
        ghost:
          'bg-transparent text-[#0C6158] hover:bg-[#CDEDE4]',
        link: 'text-[#0C6158] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5 py-3 has-[>svg]:px-4 rounded-sm',
        sm: 'h-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5 text-sm',
        lg: 'h-11 rounded-sm px-6 has-[>svg]:px-4',
        icon: 'size-11 rounded-sm',
        'icon-sm': 'size-8 rounded-sm',
        'icon-lg': 'size-11 rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
