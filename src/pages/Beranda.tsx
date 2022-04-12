import { BackgroundHeader } from "../components/beranda/BackgroundHeader";
import { BenefitDua } from "../components/beranda/BenefitDua";
import { BenefitSatu } from "../components/beranda/BenefitSatu";
import { CounterStat } from "../components/beranda/CounterStat";
import { Testimonial } from "../components/beranda/Testimonial";
import { WelcomeHeader } from "../components/beranda/WelcomeHeader";

export const Beranda = () => {
    return (
        <>
            <WelcomeHeader/>
            <BackgroundHeader/>
            <CounterStat/>
            <BenefitSatu/>
            <BenefitDua/>
            <Testimonial/>
        </>
    );
}