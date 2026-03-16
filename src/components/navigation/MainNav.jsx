import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx'
import Style from './MainNav.module.scss';
import logo from 'assets/grithub-logo-horz.svg'
import activity from 'assets/activity.svg'
import people from 'assets/people.svg'
import eventSeat from 'assets/event_seat.svg'
import sun from 'assets/sun.svg'
import newspaper from 'assets/newspaper.svg'
import mailOutline from 'assets/mail_outline.svg'

function MainNav({ page, clear = false }) {
    return (
        <nav className={clsx(page && `${Style.navbar} shadow-sm`, !clear && "bg-white",  `w-100 container-fluid px-5 py-3 mb-2`)}>
            <div className="col-12 d-flex justify-content-md-between justify-content-center flex-nowrap">
                <a className="navbar-brand" href="/" title="home">
                    <Image 
                        className={Style.logo}
                        src={logo} 
                        width={400} 
                        height={page ? 80 : 125} 
                        alt="GRITHub Logo" 
                    />
                </a>
                <menu className={Style.navbarNav}>
                    <Link className={clsx(Style.link, "nav-link me-3 me-lg-5")} href="/cowork" title='CoWorking'>
                        <Image src={activity} width={20} height={20} className="d-lg-none" alt="GRITHub Coworking" />
                        CoWorking
                    </Link>

                    <Link href="/programs" className={clsx(Style.link, "nav-link me-3 me-lg-5")} title='Programs'>
                        <Image src={people} width={20} height={20} className="d-lg-none" alt="Program Events at GRITHub" />
                        Programs
                    </Link>

                    <Link href="/consulting" className={clsx(Style.link, "nav-link me-3 me-lg-5")} title='Consulting'>
                        <Image src={eventSeat} width={20} height={20} className="d-lg-none" alt="Program Events at GRITHub" />
                        Consulting
                    </Link>

                    <Link className={clsx(Style.link, "nav-link me-3 me-lg-5")} href="/programs/incubation" title="Incubation">
                        <Image src={sun} width={20} height={20} className="d-lg-none" alt="Business Incubation" />
                        Incubation
                    </Link>

                    <Link className={clsx(Style.link, "nav-link me-3 me-lg-4")} href="/newsroom" title="Newsroom">
                        <Image src={newspaper} width={20} height={20} className="d-lg-none" alt="News" />
                        Newsroom
                    </Link>

                    <Link className={clsx(Style.link, "rounded-pill text-bg-danger text-white px-5 py-2")} href="/contact" title='Contact Us'>
                        <Image src={mailOutline} width={20} height={20} className={clsx("d-lg-none")} alt="Contact Us" />
                        Contact
                    </Link>
                </menu>
            </div>
        </nav>
    );
}

export default MainNav;