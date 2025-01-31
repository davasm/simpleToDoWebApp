import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return <div className="w-[650px] h-fit bg-[#344750] p-7 rounded-lg">{children}</div>;
};

export default Layout