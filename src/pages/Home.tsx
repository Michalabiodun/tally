import Header from '../components/landing/Header'
import ZebraPattern from '../components/landing/ZebraPattern'
import Hero from '../components/landing/Hero'
import Trusted from '../components/landing/Trusted'
import UseCases from '../components/landing/UseCases'
import Dispatch from '../components/landing/Dispatch'
import DriverApp from '../components/landing/DriverApp'
import Subcontractor from '../components/landing/Subcontractor'
import Testimonials from '../components/landing/Testimonials'
import Integrations from '../components/landing/Integrations'
import CTA from '../components/landing/CTA'
import Footer from '../components/landing/Footer'
import ScrollReveal from '../components/landing/ScrollReveal'

function Home() {
    return (
        <div className="font-arimo pt-24">
            <Header />
            <ZebraPattern />
            <main className="flex flex-col gap-20">
                <Hero />
                <ScrollReveal>
                    <Trusted />
                </ScrollReveal>
                <ScrollReveal>
                    <UseCases />
                </ScrollReveal>
                <ScrollReveal animation="reveal-left">
                    <Dispatch />
                </ScrollReveal>
                <ScrollReveal animation="reveal-right">
                    <DriverApp />
                </ScrollReveal>
                <ScrollReveal animation="reveal-left">
                    <Subcontractor />
                </ScrollReveal>
                <ScrollReveal>
                    <Testimonials />
                </ScrollReveal>
                <ScrollReveal>
                    <Integrations />
                </ScrollReveal>
                <ScrollReveal animation="reveal-up">
                    <CTA />
                </ScrollReveal>
            </main>
            <Footer />
        </div>
    )
}

export default Home
