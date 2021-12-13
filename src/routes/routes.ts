import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-layload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[]
};

const lazyLayout = lazy(() => import(/* webpackChunkName: "lazyLayout" */ '../01-layload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload',
        component: lazyLayout,       
        name: 'LazyLoading Nested'
    },
    {
        path:'/no-lazy',
        component: NoLazy,
        name: 'No Lazy loading'
    }
    
];