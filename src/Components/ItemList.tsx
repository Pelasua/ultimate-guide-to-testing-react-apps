import React from 'react';

interface props {
    data: {
        label: string,
        value: string
    }[],

}

function ItemList({ data }: props) {
    return (
        <div>
            {
                data.length > 0 ?
                    <ul>
                        {data.map((item, index) => (
                            <li key={'key_' + index}>{item.label}</li>
                        ))}
                    </ul>
                    :
                    <span>No data</span>
            }
        </div>
    );
}

export default ItemList;