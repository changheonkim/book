import { LayoutWrapper } from './layout.styeld'

import Header from '../header';

import { LayoutProps } from './layout.type';

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Header></Header>
            <LayoutWrapper>{props.children}</LayoutWrapper>
        </>
    );
}
