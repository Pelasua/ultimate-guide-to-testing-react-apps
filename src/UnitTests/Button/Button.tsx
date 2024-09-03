import React from 'react'

interface props  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    loading?: boolean,
}
function Button({ onClick, children, loading = false, disabled, type }: props) {
    return (
        <button onClick={onClick} disabled={disabled || loading} type={type}>{loading ? 'Loading ...' : children}</button>
    )
}

export default Button