import {FilterType} from './SecondWeekTaskFour';
export type PropsType = {
    onClickHandler : (filter:FilterType) => void
    currentMoney: Array<MoneyType>

}
export type MoneyType = {
    banknots: string
    value: number
    number: string
}
export const DZTaskFour = (props: PropsType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknots}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.onClickHandler('all')}>ALL</button>
                <button onClick={() => props.onClickHandler('RUBLS')}>Rubles</button>
                <button onClick={() => props.onClickHandler('Dollars')}>Dollars</button>
            </div>
        </div>
    )
}