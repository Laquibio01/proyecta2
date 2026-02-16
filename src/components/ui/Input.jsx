import React from 'react';

const Input = ({ icon: Icon, className = '', ...props }) => {
    return (
        <div className="relative">
            {Icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Icon size={18} />
                </div>
            )}
            <input
                className={`w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${Icon ? 'pl-10' : ''} ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input;
