<<<<<<< HEAD
import { classNames } from "shared/lib/classNames/classNames";
=======
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
>>>>>>> 09b019a (Add tests ESlint)

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
<<<<<<< HEAD
);
=======
);
>>>>>>> 09b019a (Add tests ESlint)
