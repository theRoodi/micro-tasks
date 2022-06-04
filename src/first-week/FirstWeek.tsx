type TopCarsType = {
    manufacturer: string
    model: string
}

type CarType = {
    topCars: Array<TopCarsType>
}

export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

export function FirstWeek(props: CarType) {
    return (
        <table>
            {props.topCars.map((car, index) => {
                return (
                    <tr key={index}>
                        <td>ID: {index + 1}</td>
                        <td>Car: {car.manufacturer}</td>
                        <td>Model: {car.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}