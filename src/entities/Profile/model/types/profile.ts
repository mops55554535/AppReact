import { CurrencyEnum } from 'entities/Curruncy';
import { Country } from 'shared/const/common';

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: CurrencyEnum,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string

}
export interface ProfileShema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readOnly: boolean
}
