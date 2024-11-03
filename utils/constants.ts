import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMail } from "@tabler/icons-react";

export const pages = [
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
    {
        href: '/auditions',
        title: 'Auditions',
        description: 'Information about the audition process to become a member of SympVibes!',
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
    }
]

export const homePageText = "Sympathetic Vibrations (SympVibes) is an all-male a cappella group at the Georgia Institute of Technology. The group was founded in Fall 1997 by James Clawson. The group typically has 12-16 active members. We also have some members who are on co-op rotations or other various diversions during their time at Georgia Tech. Our group rehearses three times a week, and we proudly sing music arranged by our very own members and alumni of the group. You can watch us perform at various events on Georgia Tech’s campus, in Atlanta, and across the state of Georgia. We also hold a few of our own concerts at various campus venues at the end of each semester - we'd love to see you there!";

const auditionHomePageText1 = "We hold auditions each semester during the second week of school. Our auditions include two rounds–an initial round where we lead you through some scales to check your range and tonal memory to assess how well you learn by ear. We’ll also have you sing a solo from a song you’d hear on the radio. Mostly during the initial round we’re looking for musical ability, stage presence, and confidence (this is a KEY element to a successful audition).";

const auditionHomePageText2 = "Callbacks are by invitation only and give you a chance to sing with the whole group. We run callbacks similarly to a regular rehearsal, except we’ll ask you to sing one-per-part after you’ve learned the music in order to assess how quickly and effectively you’ve learned it. During callbacks we really look for confidence and personality, and we want to see how you fit in with the group. We’ll also listen for blend and solo ability, so please step up for a solo if you know some of the music we sing.";

const auditionHomePageText3 = "Lastly, one thing that we look for throughout the audition process is commitment. We spend a lot of time rehearsing, gigging, recording, etc. and it is absolutely necessary that you understand the commitment that it takes to be in this group. Please let us know what your other commitments and priorities are–it is much easier to resolve conflicts early on."

const auditionHomePageText4 = "We look forward to seeing you at auditions! For more information, click the button below!";

export const auditionHomePageText = [auditionHomePageText1, auditionHomePageText2, auditionHomePageText3, auditionHomePageText4];