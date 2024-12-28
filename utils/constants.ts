import { IconBrandFacebook, IconBrandInstagram, IconBrandSpotify, IconBrandYoutube, IconMail, IconSpeakerphone } from "@tabler/icons-react";

// used in the banner notification and the auditions page
export const auditionFormLink = "https://example.com/audition-form";

{/* Banner Notification */}
export const currentBannerNotification = {
    title: "🎤 Auditions Open Now!",
    message: "Join our group and showcase your talent!",
    link: auditionFormLink,
    linkText: "Sign up here!",
    color: "gray",
    icon: IconSpeakerphone,
}

{/* For the Navbar // Navigation */}
export const pages = [
    {
        href: '/',
        title: 'Home',
        description: 'The SympVibes website home page!',
    },
    {
        href: '/tickets',
        title: 'Tickets',
        description: 'Purchase tickets for our upcoming concerts!',
    },
    {
        href: '/concerts',
        title: 'Concerts',
        description: 'Details about our semesterly concerts!',
    },
    // {
    //     href: '/program',
    //     title: "Program",
    //     description: 'View the program for our Fall 2024 concerts!',
    // },
    {
        href: '/auditions',
        title: 'Auditions',
        description: 'Information about the audition process to become a member of SympVibes!',
    }, 
    {
        href: '/members',
        title: 'Members',
        description: 'Get to know the people in SympVibes!',
    },
    {
        href: '/music',
        title: 'Music',
        description: 'A sneak peek at some of our repertoire and recordings!',
    }, 
    {
        href: '/contact',
        title: 'Contact',
        description: 'Get in touch with the group!',
    }
];

export const footerLinks = [
    {
        icon: IconBrandInstagram,
        href: 'https://www.instagram.com/sympvibes/',
        title: 'Instagram',
    },
    {
        icon: IconBrandYoutube,
        href: 'https://m.youtube.com/@SympVibesMusic',
    },
    {
        icon: IconBrandFacebook,
        href: 'https://www.facebook.com/SympVibes/',
        title: 'Facebook',
    },
    {
        icon: IconMail,
        href: 'mailto:gtsympvibes@gmail.com',
        title: 'Email',
    },
    {
        icon: IconBrandSpotify,
        href: 'https://open.spotify.com/artist/4Rhcg68dphZbx9v8ZkY6pT?si=axF_GeXEQciKBF37psZW5w',
        title: 'Spotify',
    }
]
