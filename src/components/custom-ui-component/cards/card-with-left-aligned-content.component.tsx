import React from 'react'
import CustomButton from '../hoc/CustomButtonHOC'

export default function CardWithLeftAlignedContentComponent() {
    return (
        <div
            className="group relative w-[1000.94px] h-[400px] bg-[url('https://s3-alpha-sig.figma.com/img/669c/9cd3/2479037ce36ec2e7d6b19fe0e91383e5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E5yVmlPS7~1IbSbx9R32zwEG59RVCXGyHEN3nIPvoENukLm13BWh4Tl5ijQ9pG-Xuo6PBByDiK7PVp4J34xipTYahQ~5sY0yUTnFb0XZ~JQNYB4NFGi0qfjKLr6TJANwbJPfj6apKwxoegeG0rlYsjww6svvwRj3QnThDf17KZxGHWMd1fPiob~9PicLaEYnLKxbN8Ik2aDWgo910eIUEK-HCDpdHuyY0aVDhzXbm24kVuTycAwzJFZMlO~pop7pPtbUjdin-bK1RAqzey~OKyOlI9DVxY6roHJgpZWLXr4dbYpy47pRoQxoeso7lrRNPqy8sM1hWEyVwMlN4bFyBA__')] bg-cover bg-center overflow-hidden"
        >
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-base font-semibold z-10 pl-8 pt-20 transition-all duration-500">
                <div className="title translate-y-[110px] transition-all duration-500 group-hover:translate-y-[-60px] font-bold text-[24px]">
                    Business Connect
                </div>
                <div className="description opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="font-thin text-[14px] translate-y-[-40px] w-[350px] group-hover:translate-y-[-40px]">
                        {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    </div>
                </div>
                <CustomButton
                    title={"Know More"}
                    url={"/"}
                    buttonStyles={"!h-[35px] !w-[120px] transition-all translate-y-[10px] duration-500 group-hover:translate-y-[-10px]"}
                />
            </div>
            <div className="absolute inset-0 bg-[#E11162] transform -translate-x-[100%] group-hover:!rounded-buttonRadius1 opacity-1 transition-all duration-500 group-hover:-translate-x-[60%] group-hover:opacity-100 z-0"></div>
        </div>
    )
}
