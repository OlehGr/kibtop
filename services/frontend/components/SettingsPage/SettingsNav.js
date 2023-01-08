import Link from "next/link";
import { useRouter } from "next/router";
import Text from "../Elementes/Text/Text";
import {backPath} from "./backPath";

const SettingsNav = ({title, onClick}) => {
    const {pathname} = useRouter()

    const back = backPath(pathname)

    
    return (
        <>
            <div className="container">
                <nav className="settings-nav">
                    <Link href={back} {...{onClick}} className="settings-nav__back">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1.25199C14.9997 1.58377 14.8661 1.90186 14.6284 2.13633L8.14972 8.53693C7.95362 8.73061 7.79806 8.96056 7.69193 9.21365C7.5858 9.46673 7.53118 9.73799 7.53118 10.0119C7.53118 10.2859 7.5858 10.5571 7.69193 10.8102C7.79806 11.0633 7.95362 11.2933 8.14972 11.4869L14.62 17.8792C14.8507 18.1152 14.9784 18.4313 14.9755 18.7595C14.9726 19.0876 14.8394 19.4014 14.6046 19.6335C14.3697 19.8655 14.052 19.9971 13.7199 20C13.3878 20.0028 13.0678 19.8767 12.8289 19.6487L6.35861 13.2615C5.48861 12.4003 5 11.2332 5 10.0165C5 8.7998 5.48861 7.63279 6.35861 6.77159L12.8373 0.366817C13.0145 0.191688 13.2402 0.0724106 13.486 0.0240773C13.7318 -0.024256 13.9866 0.000527255 14.2181 0.0952911C14.4497 0.190055 14.6475 0.35054 14.7867 0.55644C14.9259 0.762339 15.0001 1.0044 15 1.25199Z" fill="#414042" fillOpacity="0.6"/>
                        </svg>

                        <Text content="Back" />
                    </Link>

                    <Link href={back} {...{onClick}} className="settings-nav__back--mob">
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.916664 10.3224L4.94792 6.24953C5.04475 6.1519 5.15996 6.0744 5.2869 6.02152C5.41384 5.96863 5.54999 5.94141 5.6875 5.94141C5.82501 5.94141 5.96116 5.96863 6.0881 6.02152C6.21503 6.0744 6.33025 6.1519 6.42708 6.24953C6.62109 6.4447 6.72999 6.70871 6.72999 6.9839C6.72999 7.2591 6.62109 7.52311 6.42708 7.71828L2.71875 11.4579L23.9583 11.4579C24.2346 11.4579 24.4996 11.5676 24.6949 11.763C24.8903 11.9583 25 12.2233 25 12.4995V12.4995C25 12.7758 24.8903 13.0407 24.6949 13.2361C24.4996 13.4314 24.2346 13.5412 23.9583 13.5412L2.65625 13.5412L6.42708 17.3016C6.52472 17.3985 6.60221 17.5137 6.65509 17.6406C6.70798 17.7675 6.7352 17.9037 6.7352 18.0412C6.7352 18.1787 6.70798 18.3149 6.65509 18.4418C6.60221 18.5687 6.52472 18.6839 6.42708 18.7808C6.33025 18.8784 6.21503 18.9559 6.0881 19.0088C5.96116 19.0617 5.82501 19.0889 5.6875 19.0889C5.54999 19.0889 5.41384 19.0617 5.2869 19.0088C5.15996 18.9559 5.04475 18.8784 4.94792 18.7808L0.916664 14.7391C0.331453 14.1532 0.00274849 13.3589 0.00274849 12.5308C0.00274849 11.7027 0.331453 10.9084 0.916664 10.3224Z" fill="#414042"/>
                        </svg>
                    </Link>

                    <h1 className="title title--settings"><Text content={title} /></h1>
                </nav>
            </div>
        </>
    );
}

export default SettingsNav;