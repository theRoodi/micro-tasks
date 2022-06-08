import {useState} from 'react';
import {DZTaskFour, MoneyType} from './DZTaskFour';

export type FilterType = 'all' | 'Dollars' |'RUBLS'



export const SecondWeekTaskFour = () => {

    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const[filter, setFilter] = useState<FilterType>('all')

    const onClickHandler = (type:FilterType) => {
        setFilter(type)
    }

    let currentMoney
    switch (filter){
        case 'RUBLS':
            currentMoney = money.filter((filtered) => filtered.banknots === filter)
            break;
        case 'Dollars':
            currentMoney = money.filter((filtered) => filtered.banknots === filter)
            break;
        default:
            currentMoney = money;
    }


    return (
        <div>
            <DZTaskFour onClickHandler={onClickHandler} currentMoney={currentMoney} />
        </div>
    )
}