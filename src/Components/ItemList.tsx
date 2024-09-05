import React from 'react'

interface props {
    data: {
        label: string,
        value: string
    }[],

}

function ItemList({ data }: props) {
    return (
        <div>
            <ul>
                {
                    data.length > 0 ? data.map((item, index) => (
                        <li key={'key_' + index}>{item.label}</li>
                    )): 
                    <span>No data</span>
                }
            </ul>
        </div>
    )
}

export default ItemList