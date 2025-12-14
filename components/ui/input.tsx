import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-[#0D1F1A] placeholder:text-[#47534E]/50 selection:bg-[#0C6158] selection:text-white dark:bg-white/30 border-[#E7EBE9] h-9 w-full min-w-0 rounded-sm border bg-white px-[14px] py-3 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-[#97D2C7] focus-visible:ring-[rgba(151,210,199,0.12)] focus-visible:ring-[3px]',
        'aria-invalid:ring-[#D64545]/20 dark:aria-invalid:ring-[#D64545]/40 aria-invalid:border-[#D64545]',
        'data-[success=true]:border-[#2F9D69]',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
