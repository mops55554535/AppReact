import AboutPage from "pages/AboutPage/ui/AboutPage"
import MainPage from "pages/MainPage/ui/MainPage"
import { NotFoundPage } from "pages/NotFound"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NotFoundPage = "not_found"
}
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NotFoundPage]: "*"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NotFoundPage]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}