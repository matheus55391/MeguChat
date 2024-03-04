import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface CloseModalButtonProps {
    onClick: () => void;
}

const CloseModalButton: React.FC<CloseModalButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-6 h-6 text-black dark:text-white"
        >
            <FaTimes className="mr-1 text-black dark:text-white" size={20} />
        </button>
    );
};

export default CloseModalButton;
