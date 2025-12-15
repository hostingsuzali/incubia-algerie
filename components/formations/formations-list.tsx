import { FormationsDetail } from "@/components/formations/formations-detail"

export function FormationsList() {
    // Formations data is now hardcoded in FormationsDetail component
    // No need for Sanity CMS - using static Algeria-grounded content

    return (
        <div className="w-full">
            <FormationsDetail />
        </div>
    )
}
