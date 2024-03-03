import { InputHTMLAttributes } from "react"

interface SideBarSearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
}

export const SideBarSearchInput: React.FC<SideBarSearchInputProps> = ({
    leftIcon,
    ...props
}) => {
    return (
        <div className="flex p-2 items-center space-x-2 border-2 border-gray-300 rounded-full mt-6 px-4 ">
            {leftIcon && (
                <div data-testid="search-input-left-icon" className="flex items-center">{leftIcon}</div>
            )}
            <input data-testid="search-input" type="text" placeholder="Search people or message" className="bg-transparent outline-none dark:text-white  " {...props}  />
        </div>
    )
}