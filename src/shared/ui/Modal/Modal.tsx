import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { useTranslation } from 'react-i18next';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
interface ModalProps {
    className?: string,
    children? : ReactNode,
    isOpen: boolean,
    onClose: () => void
}

export const Modal = (props: ModalProps) => {
    const {className, children, isOpen, onClose } = props
    const { t } = useTranslation();
  
    const {theme} = useTheme()

    const [isClosing,setIsClosing ] = useState(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()
    const ANIMATION_DELAY = 300

    const closeHandler =useCallback(()=> {
        if(onClose){
            setIsClosing(true)
            timeRef.current = setTimeout( () =>{
                console.log(timeRef)
                onClose()
                setIsClosing(false) 
            }, ANIMATION_DELAY)
        }
    }, [onClose])
    const onContentClick = (e:React.MouseEvent) =>{
        e.stopPropagation()
    } 

    const onKeyDown = useCallback( (e:KeyboardEvent)=>{
        if(e.key === 'Escape'){
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() =>{
        if(isOpen){
            window.addEventListener('keydown', onKeyDown)
        }
        return () =>{
            clearInterval(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])
  
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]:true
    }
 
    return (
        <Portal>
          <div className={classNames(cls.Modal, mods, [className])}>
          <div className={cls.overlay} onClick={closeHandler}>
            <div className={(cls.content)} onClick={onContentClick}>
                {children}
            </div>
          </div>
        </div>  
    </Portal>
    );
};
