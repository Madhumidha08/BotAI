import  SideBar  from '../components/SideBar'; // Corrected path
import React, { useState } from 'react';
import { Input } from '../components/ui/input'; // Corrected path
import { Button } from '../components/ui/button'; // Corrected path
import { Section } from './Section';
import  ChatList  from '../Chat/ChatList'; // Corrected path

const HomePage = () => {
    const [isTrue, setIsTrue] = useState(false);
    const [chat, setChat] = useState([]);

    const chatAns = [
        {   
            id: '0',
            qus: 'Hi, what is the weather',
            response: "I'm sorry for any confusion, but I can't provide real-time information such as current temperature or weather updates. You can check the temperature by using a weather website or app, or by asking a smart assistant like Siri, Google Assistant, or Alexa."
        },
        {
            id: '1',
            qus: 'Hi, what is my location',
            response: "As an AI, I don't have access to your location information. Therefore, I'm unable to determine where you are. If you're using a device with location services enabled, such as a smartphone or computer, you may be able to find your location through the device's settings or by using a map application."
        },
        {
            id: '2',
            qus: 'Hi, what is the temperature',
            response: "I'm sorry for any confusion, but I can't provide real-time information such as current temperature or weather updates. You can check the temperature by using a weather website or app, or by asking a smart assistant like Siri, Google Assistant, or Alexa."
        },
        {
            id: '3',
            qus: 'Hi, how are you',
            response: "Hello! I'm just a computer program, so I don't have feelings in the way humans do, but I'm here and ready to assist you. How can I help you today?"
        }
    ];

    const onFindAns = (item) => {
        setChat(prev => [...prev, item]);
        const data = chatAns.filter((ele) => ele.qus.toLowerCase().includes(item.ask.toLowerCase()));
        setChat(prev => [...prev, data[0]]);
        setIsTrue(true);
    };

    console.log(chat);

    return (
        <div className='py-2 px-4 bg-[#d6c4f8] to-[#9785BA33] dark:bg-[#322942] h-[100vh] overflow-y-auto'>
            <main className='flex items-center gap-3'>
                <div className='lg:hidden block mt-2'>
                    <SideBar />
                </div>
                <h1 className='text-[1.8rem] font-medium text-[#9785BA]'>Bot AI</h1>
            </main>
            {!isTrue ? (
                <Section onFindAns={onFindAns} />
            ) : (
                <ChatList chats={chat} />
            )}
            <div className='h-[10%] flex items-center gap-2'>
                <Input
                    name='ask'
                    // value={input.ask}
                    // onChange={onChange}
                    className='text-stone-700 bg-white'
                />
                <Button
                    variant='pink'
                    size='sm'
                    className='shadow-lg border-b-slate-700'
                    // onClick={handleSubmit}
                >
                    Ask
                </Button>
                <Button variant='pink' size='sm' className='shadow-lg border-b-slate-700'>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default HomePage;
