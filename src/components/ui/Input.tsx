interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export function Input({ label, error, icon, className = '', ...props }: InputProps) {
    return (
        <div className="space-y-1.5 w-full">
            {label && (
                <label className="block text-sm font-medium text-slate-700">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    className={`
            w-full px-4 py-2.5 rounded-lg border bg-white
            focus:ring-2 focus:ring-offset-0 transition-all outline-none
            disabled:bg-slate-50 disabled:text-slate-500
            ${icon ? 'pl-10' : ''}
            ${error
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                            : 'border-slate-200 focus:border-primary-500 focus:ring-primary-100 hover:border-slate-300'
                        }
            ${className}
          `}
                    {...props}
                />
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        {icon}
                    </div>
                )}
            </div>
            {error && (
                <p className="text-sm text-red-500 mt-1">{error}</p>
            )}
        </div>
    );
}
