import React from 'react';

const TitleBar: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-32 bg-[#1e2329] p-4 mb-6">
            <h1 className="text-[#F6C90E] text-3xl md:text-5xl font-bold text-center rounded-md">
                todo
            </h1>
        </div>
    );
};

export default TitleBar;
