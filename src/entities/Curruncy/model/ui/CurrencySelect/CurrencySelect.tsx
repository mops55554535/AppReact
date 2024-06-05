import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CurrencySelect.module.scss';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { CurrencyEnum } from '../../types/currency';
import { memo, useCallback } from 'react';
interface CurrencySelectProps {
    className?: string;
    value?: CurrencyEnum,
    onChange?: (value: CurrencyEnum) =>void
    readOnly?: boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
const {className, value, onChange, readOnly} = props

    const onChangeHandler = useCallback((value: string) =>{
        onChange?.(value as CurrencyEnum)
    }, [onChange])


        const options=[ 
                {value: CurrencyEnum.RUB, content: CurrencyEnum.RUB},
                {value: CurrencyEnum.USD, content: CurrencyEnum.USD},
                {value: CurrencyEnum.EUR, content: CurrencyEnum.EUR},
            ]
    return (
        <Select 
            className={classNames("", {}, [className])}>
            value={value}
            onChange={onChangeHandler}
            label={t('Укажите валюту')}
            options={options}
            readOnly={readOnly}
        </Select>
    );
});
