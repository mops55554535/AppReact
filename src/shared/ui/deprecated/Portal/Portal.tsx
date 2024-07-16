import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 * @deprecated
 */
interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
