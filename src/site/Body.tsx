import React from 'react';

type BodyType = {
    title: string
}

export const Body:React.FC<BodyType> = (props) => {
    return(
        <>
            <div>
                {props.title}
            </div>
        </>
    )
}