import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'; 
import { Menu } from 'lucide-react';
import { Header } from '../Header/Header'; 
const SideBar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="font-bold h-8 w-8 text-[#9785BA]" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Header height="h-[96vh] px-0 pt-[2rem] pb-[2rem]" />
            </SheetContent>
        </Sheet>
    );
};

export default SideBar;
