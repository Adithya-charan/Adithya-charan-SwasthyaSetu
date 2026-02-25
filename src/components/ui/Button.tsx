import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    href?: string;
    isFullWidth?: boolean;
}

export function Button({
    className = '',
    variant = 'primary',
    size = 'md',
    href,
    isFullWidth,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg active:scale-[0.98]";

    const variants = {
        primary: "bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/20 focus:ring-primary-500",
        secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 focus:ring-slate-900",
        outline: "border-2 border-slate-200 hover:border-primary-500 hover:text-primary-600 bg-transparent text-slate-600 focus:ring-primary-500",
        danger: "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20 focus:ring-red-500",
        ghost: "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
        icon: "p-2 w-10 h-10",
    };

    const width = isFullWidth ? "w-full" : "";

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
