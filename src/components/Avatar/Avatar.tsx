import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface AvatarProps {
    image: string | StaticImport
}
const Avatar: React.FC<AvatarProps> = ({ image }) => {

    return (
        <div className="flex min-h-12 min-w-12 max-w-12 max-h-12 bg-blue-600 rounded-full overflow-hidden dark:bg-white">
            <Image data-testid="avatar-image" src={image} alt="avatar" width={100} height={100} />
        </div>
    )
}

export default Avatar