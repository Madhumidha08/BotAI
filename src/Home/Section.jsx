import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '../components/ui/card';


export const Section = ({
    onFindAns
}) => {
    const textBoxes = [
        {
            ask : 'Hi, what is the weather'
        },
        {
            ask : 'Hi, what is my location'
        },
        {
            ask : 'Hi, what is the temperature'
        },
        {
            ask : 'Hi, how are you'
        },
    ]
    return (
        <>
            <div className=' h-[82%]'>
                <div className='lg:h-[60%] md:h-[45%] h-[25%] w-full text-center flex items-center justify-center flex-col gap-2'>
                    <h1 className=' lg:text-[2rem] text-[1.4rem] font-medium'>How Can I Help You Today?</h1>
                    <img className=' lg:w-[2.5rem] w-[1.7rem] lg:h-[2.5rem] h-[1.7rem] shadow-lg rounded-full' src="https://s3-alpha-sig.figma.com/img/4b1c/47d6/93bc8af758e2de31a7de8493b52750af?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CmbYJc4tjuWzAp7T1D32ZBzJfMX6k7Ift-oVyb7YCw69X07JZwfvoz~qJyGl85DNC45XEiV4FM~bSIi4uSpWPGPLihjmNtoYXMmGoGC2b~7F-sK2GD2O5~om4r7ldt8e5-rG2j6gl-3IKi-mLkp7F2aPrbn2RtLld1iJbZeQaO8p238Zx0BgAXvWKUwwy0eq0xdGjN48xxTa5HSOB2dWoV62j484miYiIE6GhSt2S3Gh7XmfP998xTGK5T8mo5R-eBjc7LWK2crQLb9uev5ZKMwT8G1D2QAQzoWomSGaFhSS7HsvD3sGx~7yyayyWBNSN20yPAymJn6maT2lLGQQlg__" alt="" />
                </div>
                <div className=' h-[40%]'>
                    <div className=' grid h-full lg:grid-cols-2 md:grid-cols-2 gap-3'>
                        {textBoxes.map((ele) => (
                            <Card 
                                key={ele.ask} 
                                className = "dark:bg-[#D7C7F421] cursor-pointer" 
                                onClick = {() => onFindAns(ele)}
                            >
                                <CardHeader className = "p-3">
                                    <CardTitle className = "lg:text-[1.7rem] text-[1.3rem]">{ele.ask}</CardTitle>
                                </CardHeader>
                                <CardContent className = "p-3 lg:py-2">
                                    <p>Get immediate AI generated response</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}