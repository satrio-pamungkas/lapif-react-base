import { BackgroundHeader } from "../components/beranda/BackgroundHeader";
import { BenefitDua } from "../components/beranda/BenefitDua";
import { BenefitSatu } from "../components/beranda/BenefitSatu";
import { Chatbox } from "../components/beranda/Chatbox";
import { CounterStat } from "../components/beranda/CounterStat";
import { Testimonial } from "../components/beranda/Testimonial";
import { WelcomeHeader } from "../components/beranda/WelcomeHeader";
import { API_URL } from "../config";

export const Beranda = () => {
    console.log(API_URL);
    return (
        <>
            <WelcomeHeader/>
            <BackgroundHeader/>
            <CounterStat/>
            <Chatbox/>
            <BenefitSatu/>
            <BenefitDua/>
            <Testimonial/>
        </>
    );
}