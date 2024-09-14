import React, { useEffect, useState } from 'react';


interface props extends React.InputHTMLAttributes<HTMLInputElement> {
    loading?: boolean,
    label?: string,
    error?: string,
}


function Input({ name, type, disabled, loading, placeholder, label, error, onChange, value }: props) {
    const [shouldVibrate, setShouldVibrate] = useState(false);
    const [currentError, setCurrentError] = useState<string | undefined>(undefined);

    useEffect(() => {
     if (error) {
        setShouldVibrate(true);

        setTimeout(() => {
          setShouldVibrate(false);
        }, 500);
     }
    }, [error]);



    useEffect(() => {
        setCurrentError(error);
    }, [error]);
    
    
    
    return (
        <div className='flex flex-col items-start'>
            <label className='flex flex-col items-start text-sm gap-1 text-gray-500 w-full'>
                {label}
                <input name={name} type={type} disabled={disabled || loading} placeholder={placeholder} className={`w-full ${shouldVibrate ? 'animate-vibrate' : ''} ${currentError ? 'border-solid border border-red-500' : ''}`} onChange={(e) =>{
                    onChange && onChange(e);
                    setCurrentError(undefined);
                }} value={value}/>
            </label>
            {currentError &&
                <span className='text-red-500 text-xs' style={{
                    textDecoration: 'underline'
                }}>{currentError}</span>
            }
        </div>
    );
}

export default Input;