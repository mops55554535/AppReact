import { Country, CurrencyEnum } from 'shared/const/common';

export interface Profile {
    first: string,
    lastname: string,
    age: 22,
    currency: CurrencyEnum,
    country: Country,
    city: string,
    username: string,
    avatar: string

}
export interface ProfileShema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}
