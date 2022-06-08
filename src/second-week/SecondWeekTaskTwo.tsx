import {Button} from './component/Button';

export const SecondWeekTaskTwo = () => {

    const btnOne = (name : string) => {
        alert(name)
    }

    const btnTwo = (name : string) => {
        alert(name)
    }
    const btnThree = () => {
        alert('Stupid')
    }

    return (
        <div>
            <Button name={'btn1'} callBack={() => btnOne('One')}/>
            <Button name={'btn2'} callBack={() => btnTwo('Two')}/>
            <Button name={'btn3'} callBack={() => btnThree()}/>
        </div>
    )
}