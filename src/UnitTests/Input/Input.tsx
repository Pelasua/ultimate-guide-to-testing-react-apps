import React from 'react'


interface props extends React.InputHTMLAttributes<HTMLInputElement> {
    loading?: boolean,
    testId?: string,
    label?: string,
    error?: string,
}


function Input({ name, type, disabled, loading, placeholder, testId, label, error, }: props) {
    return (
        <div>
            <label>
                {label}
                <input data-testid={testId} name={name} type={type} disabled={disabled || loading} placeholder={placeholder} />
            </label>
            {error &&
                <span>{error}</span>
            }
        </div>

    )
}

export default Input