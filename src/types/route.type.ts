import type { ComponentType } from "react"

export type RouteItem = {
     path: string,
     element: ComponentType,
     layout?: ComponentType
}