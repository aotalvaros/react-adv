import { lazy, LazyExoticComponent } from "react";

type JXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JXComponent> | JXComponent,
    name: string 
};

const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1" */'../01-LazyLoad/pages/LazyPage1')); //hacer exportacion por defecto en el componente que se va trabajar para que no saque error
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2" */'../01-LazyLoad/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3" */'../01-LazyLoad/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    },
];