import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './photos.module.scss';

export const metadata: Metadata = {
 title:'Website screenshots for LinkedIn',
 description:'Preview and download four screenshots of Sunil Singh Chaisir’s portfolio website for LinkedIn.',
 alternates:{canonical:'/linkedin-photos/'},
 robots:{index:false,follow:false},
};
const screenshots=[
 {file:'01-homepage.jpg',title:'Homepage',description:'The opening introduction to The Human Variable.',alt:'Screenshot of Sunil Singh Chaisir’s portfolio homepage'},
 {file:'02-about.jpg',title:'About & story',description:'The website section introducing Sunil’s background and story.',alt:'Screenshot of the about and story section of Sunil Singh Chaisir’s portfolio'},
 {file:'03-selected-work.jpg',title:'Selected work',description:'The portfolio’s selected projects and case studies.',alt:'Screenshot of the selected work section of Sunil Singh Chaisir’s portfolio'},
 {file:'04-contact.jpg',title:'Contact',description:'The closing invitation to connect and collaborate.',alt:'Screenshot of the contact section of Sunil Singh Chaisir’s portfolio'},
];
export default function LinkedInPhotos(){return <main className={styles.page}>
 <Link className={styles.back} href="/">Sunil Singh Chaisir’s portfolio</Link>
 <p className={styles.label}>LinkedIn website screenshots</p>
 <h1>Your website,<br/>ready to share.</h1>
 <p className={styles.intro}>These four actual screenshots show your website’s homepage, about and story, selected work, and contact sections. Download the JPG files together or save each screenshot below, ready to upload to LinkedIn.</p>
 <a className={styles.downloadAll} href="/downloads/website-screenshots.zip" download="sunil-portfolio-screenshots.zip">Download all four screenshots (.zip)</a>
 <p className={styles.help}>If you opened this page from a chat app, use its menu to open it in Chrome or Safari. After downloading the ZIP, double-click it to see the four screenshots.</p>
 <div className={styles.grid}>{screenshots.map(screenshot=><article className={styles.card} key={screenshot.file}>
  <div className={styles.preview}><Image src={`/downloads/website-screenshots/${screenshot.file}`} alt={screenshot.alt} width={1440} height={1000} loading="eager"/></div>
  <h2>{screenshot.title}</h2><p>{screenshot.description}</p>
  <div className={styles.actions}><a href={`/downloads/website-screenshots/${screenshot.file}`} download={screenshot.file}>Save JPG</a><a href={`/downloads/website-screenshots/${screenshot.file}`} target="_blank" rel="noopener noreferrer">Open full size</a></div>
 </article>)}</div>
 <p className={styles.note}>To use them: open LinkedIn, start a post, choose Photo, and select the downloaded JPG files.</p>
 </main>}
