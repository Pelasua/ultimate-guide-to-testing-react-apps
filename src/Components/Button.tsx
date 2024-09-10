import React from 'react';

type Variant = 'primary' | 'secondary' | 'outline'
interface props  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    loading?: boolean,
    variant?: Variant
}
function Button({ onClick, children, loading = false, disabled, type, variant = 'primary' }: props) {
    const commonClasses = 'rounded-full py-2 px-1 font-semibold';
    const classesByVariant: Record<Variant, string> = {
        primary: 'bg-blue-400 hover:bg-blue-500 text-white',
        secondary: 'bg-green-400 hover:bg-green-500 text-white',
        outline: 'bg-white hover:bg-blue-400 text-blue-400 hover:text-white border-solid border-2 border-blue-400'
    };

    const className = `${commonClasses} ${classesByVariant[variant]}`;

    return (
        <button onClick={onClick} disabled={disabled || loading} type={type} className={className}>{loading ? 'Loading ...' : children}</button>
    );
}

export default Button;