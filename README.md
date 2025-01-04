# SympVibes Website

This is a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).
If you want to use pages router instead, see [next-pages-template](https://github.com/mantinedev/next-pages-template). In order to run this template, you'll need to have `npm` installed on your machine. Once you have that installed, you can run the following commands to get started: 

```bash
cd sympvibes-website # navigate to the project directory
npm install # install the dependencies
npm run dev # start the development server
```

This website was designed by [Reetesh Sudhakar](https://www.linkedin.com/in/reeteshsudhakar) in 2024, a member of the group. For any questions or concerns regarding development or deployment, feel free to reach out to him!

## [Pages](/app/)
- [Home Page](/app/page.tsx): Home page with some basic content and buttons
- [Auditions](/app/auditions/page.tsx): Auditions page with some basic content explaining the auditions process, along with an FAQs block
- [Concerts](/app/concerts/page.tsx): Concerts page that goes over what our semesterly concerts are like, and what to expect, with some videos embedded into the page
- [Contact](/app/contact/route.ts): A redirect page to email us at [gtsympvibes@gmail.com](mailto:gtsympvibes@gmail.com)
- [Members](/app/members/page.tsx): A page that introduces the members and alumni of the group, with a gallery of bios.
- [Music](/app/music/page.tsx): A page that goes over the music that we've produced and released in the past, with embedded Spotify components.
- [Program](/app/program/page.tsx): A page that shows a preview of the program for the upcoming concert. Note: this page is only visible in the navigation bar when concerts are upcoming. 
- [Tickets](/app/tickets/route.ts): A redirect page to our [Square website](sympathetic-vibrations.square.site)

## [Layout](/app/layout.tsx)
The layout of the website is defined in the [layout.tsx](/app/layout.tsx) file. This file defines the header and footer of the website, and the navigation bar. The navigation bar and footer are defined in the [AppWrapper component](/components/AppWrapper/AppWrapper.tsx).

## Styles
Most of the styles are created per component or per page in the corresponding `.module.css` file. Feel free to mess around with those as desired. 

## [Components](/app/components)
- Heros: There's some Hero components that are used at the top of the pages. You can update the design by updating the `.tsx` or `.module.css` files in the corresponding Hero folder. 
- [MemberCard](/components/MemberCard/MemberCard.tsx): A card that displays a member's name, role, and bio.
- [PDFView](/components/PDFView/PDFView.tsx): A component that displays a PDF file in an iframe. This is really just used to display the concert program in the [Program](/app/program/page.tsx) page. iframes are a bit finnicky, so when using this component, I'd recommend having a PDF that's 1-page for phones, and longer for desktops. The [Program](/app/program/page.tsx) page has a 1-page PDF for mobile and a multi-page PDF for desktop.
- [YouTubeEmbed](/components/YouTubeEmbed/YouTubeEmbed.tsx): A component that embeds a YouTube video. This is used in the [Concerts](/app/concerts/page.tsx) page to embed videos of past concerts. The component takes a YouTube video ID as a prop, and you should grab the link from the "Share" button on YouTube, generate an embed, and copy the "src" prop from the HTML code that's generated. 

## [Public](/public/)
- Anything in this folder is publically accessible. This is where you should put images, PDFs, and other files that you want to be accessible on the website.

## [Utils](/utils/)
This is the directory where you'll find a lot of the pre-defined constants and text blurbs that are used throughout the website. This is where you should go to update (most of) the text on the website.
- [albums.ts](/utils/albums.ts): This file contains the Spotify album IDs for the music page. You can update this file to include new albums as they're released.
- [alumni.ts](/utils/alumni.ts): This file contains the names for the alumni section on the members page. You can update this file to include new alumni as they graduate.
- [constants.ts](/utils/constants.ts): This file contains a lot of the important constants and hyperlinks that are used throughout the website. You can update this file to change some text on the website, some routes in the navigation bar, and important links in the layout. 
- [members.ts](/utils/members.ts): This file contains the names, roles, and bios for the members section on the members page. You can update this file to include new members as they join the group.
- [pageBlurbs.ts](/utils/pageBlurbs.ts): This file contains the blurbs that are used on the home, auditions page, and music page. You can update this file to change the text on those pages.
- [showcaseEmbedLinks.ts](/utils/showcaseEmbedLinks.ts): This file contains the YouTube video IDs for the videos that are embedded on the concerts page. You can update this file to include new videos as they're released, or if you want to rotate out videos.

There will be some content that you'll have to directly change in the `page.tsx` files itself, but most of the text on the website can be updated by changing the constants in the `utils` directory. That said, if you DO have to make some changes in the `page.tsx` files, the text should be relatively easy to find and update.

## Misc. Website Features
The website has a notification banner that pops up on landing. The content of this can be updated by changing the `currentBannerNotification` constant in the [constants.ts](/utils/constants.ts) file. If you want to see how it's used, check out the `showBannerNotification` function in the [AppWrapper](/components/AppWrapper/AppWrapper.tsx) component.

## Deployment
This website is deployed to [sympvibes.org](https://www.sympvibes.org). We own the domain through GoDaddy, and the website is hosted on [Vercel](https://vercel.com). The website is deployed automatically when changes are pushed to the `master` branch. 

You should work on development branches and open pull requests to safely test changes and ensure that the website is working as expected before merging to `master`.

The code, domain, and deployment are all associated with the SympVibes email, not an individual member, to ensure continuity over the years. All group members should have access to these resources. 

## Template Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## `npm run` scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- `start` – start production server

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs linting (prettier) and typechecking scripts

### Other scripts

- `prettier:write` – formats all files with Prettier
