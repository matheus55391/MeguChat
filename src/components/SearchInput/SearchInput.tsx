import { ElementType, InputHTMLAttributes } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: ElementType;
}

export const SearchInput: React.FC<SearchInputProps> = ({
    leftIcon: LeftIcon,
    ...props
}) => {
    return (
        <div className="flex p-2 items-center space-x-2 border-2 border-gray-300 rounded-full mt-6 px-4 ">
            {
                LeftIcon ?
                    <LeftIcon data-testid="left-icon-custom" className="text-gray-400" /> :
                    <FaMagnifyingGlass data-testid="left-icon-default" className="text-gray-400" />
            }

            <input data-testid="search-input" type="text" placeholder="Search people or message" className="bg-transparent outline-none dark:text-white  " {...props} />
        </div>
    )
}

export default SearchInput