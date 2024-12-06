import React from 'react';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

function Popup({ isOpen, onClose }: PopupProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
    <div className="bg-white p-6 rounded-lg shadow-2xl max-w-[650px] w-full transform transition-all duration-300 scale-95 hover:scale-100">
        <p className="bg-yellow-400 text-black p-4 rounded-md text-center text-lg font-medium">
            Made by Daya3611 for practice purposes. This is not the official website of Vidyalankar School of Information Technology. Visit 
            <a 
                href="https://dayanandgawade.in" 
                className="text-blue-600 font-bold hover:text-red-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
            >
                dayanandgawade.in
            </a> 
            for more information.
        </p>
        <button 
            onClick={onClose} 
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-l transition-all duration-300">
            Close
        </button>
    </div>
        </div>


    );
}

export default Popup;
