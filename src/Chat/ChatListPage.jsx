import  SideBar  from '../components/SideBar'; // Corrected path, ensure named export
import { useFilterChat } from '../hook/useFilterChat'; // Corrected path, ensure named export
import React, { useState } from 'react';
import  ChatList  from './ChatList'; // Ensure named export
import { Button } from '../components/ui/button'; // Ensure named export
import { Input } from '../components/ui/input'; // Ensure named export

export const ChatListPage = () => {
    const { onFilter } = useFilterChat();
    const [chats, setChats] = useState([]);
    const [input, setInput] = useState({
        ask: '',
        date: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
            date: new Date().toTimeString()
        });
    };

    const handleSubmit = () => {
        setChats(prev => [...prev, input]);
        let data = onFilter(input.ask);
        setChats(prev => [...prev, data[0]]);
    };

    return (
        <div className='py-2 px-4 bg-[#d6c4f8] to-[#9785BA33] dark:bg-[#322942] h-[100vh] overflow-y-auto'>
            <main className='flex items-center gap-3'>
                <div className='lg:hidden block mt-2'>
                    <SideBar />
                </div>
                <h1 className='text-[1.8rem] font-medium text-[#9785BA]'>Bot AI</h1>
            </main>
            <ChatList chats={chats.slice().reverse()} />
            <form
                className='h-[10%] flex items-center gap-2'
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <Input
                    name='ask'
                    value={input.ask}
                    onChange={onChange}
                    className='text-stone-700 bg-white'
                    required
                />
                <Button
                    variant='pink'
                    size='sm'
                    className='shadow-lg border-b-slate-700'
                >
                    Ask
                </Button>
                <Button
                    variant='pink'
                    size='sm'
                    className='shadow-lg border-b-slate-700'
                    type='button'
                >
                    Save
                </Button>
            </form>
        </div>
    );
};
