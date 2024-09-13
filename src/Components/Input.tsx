import React, { useEffect, useState } from 'react';


interface props extends React.InputHTMLAttributes<HTMLInputElement> {
    loading?: boolean,
    label?: string,
    error?: string,
}


function Input({ name, type, disabled, loading, placeholder, label, error, onChange, value }: props) {
    const [shouldVibrate, setShouldVibrate] = useState(false);

    useEffect(() => {
     if (error) {
        setShouldVibrate(true);

        setTimeout(() => {
          setShouldVibrate(false);
        }, 500);
     }
    }, [error]);
    
    
    return (
        <div className='flex flex-col items-start'>
            <label className='flex flex-col items-start text-sm gap-1 text-gray-500 w-full'>
                {label}
                <input name={name} type={type} disabled={disabled || loading} placeholder={placeholder} className={`w-full ${shouldVibrate ? 'animate-vibrate' : ''} ${error ? 'border-solid border border-red-500' : ''}`} onChange={onChange} value={value}/>
            </label>
            {error &&
                <span className='text-red-500 text-xs' style={{
                    textDecoration: 'underline'
                }}>{error}</span>
            }
        </div>
    );
}

export default Input;