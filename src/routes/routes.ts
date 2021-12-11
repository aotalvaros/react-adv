import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-LazyLoad/pages/NoLazy";

type JXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JXComponent> | JXComponent,
    name: string 
};

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout" */ '../01-LazyLoad/layout/LazyLayout'))

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy'
    },
];