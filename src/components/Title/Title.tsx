interface TitleProps {
    children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
    return (
        <h1
            data-testid="title"
            className="text-3xl font-bold dark:text-white"
        >
            {children}
        </h1>
    )
}

export default Title