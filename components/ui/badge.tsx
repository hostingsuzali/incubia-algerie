import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20",
                secondary:
                    "bg-[#CA9BFA]/10 text-[#CA9BFA] hover:bg-[#CA9BFA]/20",
                success:
                    "bg-[#059669]/10 text-[#059669] hover:bg-[#059669]/20",
                warning:
                    "bg-[#F59E0B]/10 text-[#F59E0B] hover:bg-[#F59E0B]/20",
                outline:
                    "border border-[#E7EBE9] text-[#47534E] hover:bg-[#F9FAF9]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
