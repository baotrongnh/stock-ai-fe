import type { ComponentType, ReactElement } from "react"

export type RouteItem = {
     path: string,
     element: ComponentType,
     layout?: ComponentType<{ children: ReactElement }> | null,
     children?: RouteItem[]
}