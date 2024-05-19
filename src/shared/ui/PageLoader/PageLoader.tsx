<<<<<<< HEAD
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "../Loader/Loader";
import cls from './PageLoader.module.scss'
=======
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

>>>>>>> 09b019a (Add tests ESlint)
interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
<<<<<<< HEAD
);
=======
);
>>>>>>> 09b019a (Add tests ESlint)
