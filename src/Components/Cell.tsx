import React from 'react';

export function Cell(props: any) {
    return (
        <button className="field" onClick={props.onClick}>{props.value}</button>
    )
}
