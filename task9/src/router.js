import LinkLayout from "./layouts/LinkLayout";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import ParamPage from "./pages/ParamPage";

const router = [
    {
        element: <LinkLayout/>,
        path: '/',
        children: [
            {
                element: <MainPage/>,
                index: true
            },
            {
                element: <AboutPage/>,
                path: 'about'
            }
        ]
    },
    {
        element: <ParamPage/>,
        path: '/facts/:id'
    },
    {
        element: <ErrorPage/>,
        path: '*'
    }
]

export default router;