import { Edit } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/button'; // Corrected path
import { ModeTogle } from '../components/ModeTogle'; // Corrected path

export const Header = ({ height }) => {
    return (
        <header className='w-full dark:bg-[#4a3c59]'>
            <main className={`flex items-start justify-between flex-col ${height} w-full`}>
                <div className='w-full'>
                    <NavLink to={'/'}>
                        <div className='flex bg-[#D7C7F4] dark:bg-stone-300 text-stone-800 items-center justify-around gap-2 p-2 border w-full'>
                            <img
                                className='h-[2rem] w-[2rem] shadow-md rounded-md object-cover'
                                src="https://s3-alpha-sig.figma.com/img/4b1c/47d6/93bc8af758e2de31a7de8493b52750af?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CmbYJc4tjuWzAp7T1D32ZBzJfMX6k7Ift-oVyb7YCw69X07JZwfvoz~qJyGl85DNC45XEiV4FM~bSIi4uSpWPGPLihjmNtoYXMmGoGC2b~7F-sK2GD2O5~om4r7ldt8e5-rG2j6gl-3IKi-mLkp7F2aPrbn2RtLld1iJbZeQaO8p238Zx0BgAXvWKUwwy0eq0xdGjN48xxTa5HSOB2dWoV62j484miYiIE6GhSt2S3Gh7XmfP998xTGK5T8mo5R-eBjc7LWK2crQLb9uev5ZKMwT8G1D2QAQzoWomSGaFhSS7HsvD3sGx~7yyayyWBNSN20yPAymJn6maT2lLGQQlg__"
                                alt=""
                            />
                            <h1 className='text-[1rem] font-medium'>New Chat</h1>
                            <Edit className='w-5 h-5' />
                        </div>
                    </NavLink>
                    <div className='mt-4' />
                    <NavLink to={'/'} className={'m-auto w-[85%] block'}>
                        <Button variant="pink" className="w-full text-[1.1rem] rounded-md">
                            Past Conversations
                        </Button>
                    </NavLink>
                </div>
                <div className='flex items-center justify-around mb-10 w-full border-t-2 border-t-stone-500 dark:border-t-stone-100 pt-5'>
                    <h3 className='dark:text-stone-300'>Setting</h3>
                    <ModeTogle />
                </div>
            </main>
        </header>
    );
};
