import React from 'react'

interface props {
    onClick: () => void,
    children: React.ReactNode
}

function Button({onClick, children}: props) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default Button