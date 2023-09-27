import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routesConfig = [
    {
        path: RoutesPath.main,
        element: <MainPage />
    },
    {
        path: RoutesPath.about,
        element: <AboutPage />
    }
]