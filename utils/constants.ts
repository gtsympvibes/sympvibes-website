import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMail, IconSpeakerphone } from "@tabler/icons-react";

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
    }
]

export const homePageText = "Sympathetic Vibrations (SympVibes) is an all-male a cappella group at the Georgia Institute of Technology. The group was founded in Fall 1997 by James Clawson. The group typically has 12-16 active members. We also have some members who are on co-op rotations or other various diversions during their time at Georgia Tech. Our group rehearses three times a week, and we proudly sing music arranged by our very own members and alumni of the group. You can watch us perform at various events on Georgia Tech’s campus, in Atlanta, and across the state of Georgia. We also hold a few of our own concerts at various campus venues at the end of each semester - we'd love to see you there!";

const auditionHomePageText1 = "We hold auditions each semester during the second week of school. Our auditions include two rounds–an initial round where we lead you through some scales to check your range and tonal memory to assess how well you learn by ear. We’ll also have you sing a solo from a song you’d hear on the radio. Mostly during the initial round we’re looking for musical ability, stage presence, and confidence (this is a KEY element to a successful audition).";

const auditionHomePageText2 = "Callbacks are by invitation only and give you a chance to sing with the whole group. We run callbacks similarly to a regular rehearsal, except we’ll ask you to sing one-per-part after you’ve learned the music in order to assess how quickly and effectively you’ve learned it. During callbacks we really look for confidence and personality, and we want to see how you fit in with the group. We’ll also listen for blend and solo ability, so please step up for a solo if you know some of the music we sing.";

const auditionHomePageText3 = "Lastly, one thing that we look for throughout the audition process is commitment. We spend a lot of time rehearsing, gigging, recording, etc. and it is absolutely necessary that you understand the commitment that it takes to be in this group. Please let us know what your other commitments and priorities are–it is much easier to resolve conflicts early on."

const auditionHomePageText4 = "We look forward to seeing you at auditions! For more information, click the button below!";

export const auditionHomePageText = [auditionHomePageText1, auditionHomePageText2, auditionHomePageText3, auditionHomePageText4];

export const currentBannerNotification = {
    title: "🎤 Auditions Open Now!",
    message: "Join our group and showcase your talent!",
    link: "https://example.com/audition-form",
    linkText: "Sign up here!",
    color: "gray",
    icon: IconSpeakerphone,
}

export const members = [
    {
        name: "Reetesh Sudhakar",
        voicePart: "Tenor",
        perc: true,
        position: "Secretary",
        semJoined: "Spring '23",
        imagePath: "/members/ree.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Wesley Lanter",
        voicePart: "Bass",
        perc: false,
        position: "Business Manager",
        semJoined: "Fall '22",
        imagePath: "/members/wesley.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Daryn Roberts",
        voicePart: "Tenor",
        perc: true,
        position: "Music Director",
        semJoined: "Fall '22",
        imagePath: "/members/daryn.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Josh Robinson",
        voicePart: "Tenor",
        perc: false,
        position: undefined,
        semJoined: "Fall '22",
        imagePath: "/members/jrob.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Evan Smallwood",
        voicePart: "Tenor",
        perc: false,
        position: undefined,
        semJoined: "Fall '22",
        imagePath: "/members/evan.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Facundo Pagani",
        voicePart: "Tenor",
        perc: false,
        position: undefined,
        semJoined: "Fall '23",
        imagePath: "/members/facundo.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Seth Kinoshita",
        voicePart: "Baritone",
        perc: false,
        position: undefined,
        semJoined: "Fall '23",
        imagePath: "/members/seth.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Nicholas Oselette",
        voicePart: "Tenor",
        perc: false,
        position: undefined,
        semJoined: "Fall '22",
        imagePath: "/members/ose.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Will Goldsmith",
        voicePart: "Bass ",
        perc: true,
        position: undefined,
        semJoined: "Fall '22",
        imagePath: "/members/will.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Sam Kim",
        voicePart: "Tenor",
        perc: true,
        position: undefined,
        semJoined: "Spring '24",
        imagePath: "/members/will.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Ben Bond",
        voicePart: "Tenor",
        perc: false,
        position: undefined,
        semJoined: "Fall '24",
        imagePath: "/members/ben.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Donovan Sheppard",
        voicePart: "Baritone",
        perc: false,
        position: undefined,
        semJoined: "Fall '24",
        imagePath: "/members/donovan.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
    {
        name: "Carter Strickland",
        voicePart: "Bass / VP",
        perc: true,
        position: undefined,
        semJoined: "Fall '24",
        imagePath: "/members/carter.jpg",
        bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. Duis est egestas euismod elit malesuada ut. Egestas sem neque nam purus ad nisl. Leo ultrices porta amet arcu feugiat urna eleifend. Natoque torquent at blandit, fringilla finibus dis semper."
    },
]

export const alumni = [
    {
        year: "2024",
        names: "Matthew Kaminsky, Joshua Lerner, Keshav Jagannath"
    },
    {
        year: "2023",
        names: "Avi Natan, Kunho Kim, William Enger, Rohith Sudhakar, Joseph Henry Monti, Alex Kovensky, Jacob Blevins, Noah Horton"
    },
    {
        year: "2022",
        names: "Jeffrey Lin, Cooper Martin"
    },
    {
        year: "2021",
        names: "Tait Taylor, Koji Shimada, Kantwon Rogers, Joshua Gundugollu, Tyler Cochran, Chad Bullard, Alex Schwartz"
    },
    {
        year: "2020",
        names: "Rehan Khaki, Evan Downs"
    },
    {
        year: "2019",
        names: "Matthew Arnold, Scott Chambliss, Caleb Wikle"
    },
    {
        year: "2018",
        names: "Jacob Gorman, Dustin Nguyen, Austin O'Farrell, Christian Gabriel, Rahul Raina, Richard Huckaby"
    },
    {
        year: "2017",
        names: "Zach Steinfeld, Arrion Jackson"
    },
    {
        year: "2015",
        names: "Austin Soper"
    },
    {
        year: "2014",
        names: "Preston Mayo, Dan Walsh"
    },
    {
        year: "2013",
        names: "Carl Enger, Grayson Baum"
    },
    {
        year: "2012",
        names: "Fanye Abbey, Casey Jordan, Shawn Skolky"
    },
    {
        year: "2011",
        names: "Scott Johnson"
    },
    {
        year: "2010",
        names: "Joe Hsu, Prem Midha, Matt Harrison, Dave Dreifus, Kyle Davis"
    },
    {
        year: "2009",
        names: "Daniel Yum, Alex Enger, Paul Koziel"
    },
    {
        year: "2008",
        names: "Matt Eicholtz, John Hendrix"
    },
    {
        year: "2007",
        names: "Philip Brown, Michael Vincent, Benji White, Jeff Bosworth, Steve Ryan, David Hubbard"
    },
    {
        year: "2006",
        names: "Adam McKinnon, Dan Richard, Will Cross, Russell Hallman"
    },
    {
        year: "2005",
        names: "Jason Ardell, Brad Range, Roger Lee, Paul Hatcher, James Clawson (Founder)"
    },
    {
        year: "2004",
        names: "Richard Driftmeier, Curtis Brooks"
    },
    {
        year: "2001",
        names: "Joel Whitley"
    },
    {
        year: "2000",
        names: "Scott Percy"
    },
    {
        year: "Unknown",
        names: "Dominic Petrello, Antony Samuel, Victor Baldwin, John Zelek, Matthew Levine, Jack Crawford, Leo Wang, Jonny Wang, Will Alderman, Walter Ley, Logan Bennett, Truitt Clark, Dan Russo, Ryan Youngblood, Elliot Abnatha, Corey Boone, Ryan Ceciliani, Andy Jones, Mitchel Martinez, Oge Nnadi, Chris Rittelmeyer, Clarance Ju"
    }

]