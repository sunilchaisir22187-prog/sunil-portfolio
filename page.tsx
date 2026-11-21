import Link from 'next/link';
import Navigation from '@/components/Navigation';
import MotionSystem from '@/components/MotionSystem';
import ChromeOrb from '@/components/ChromeOrb';
import AssetImage, { hasAsset } from '@/components/AssetImage';
import { projects } from '@/lib/content';

const places = ['Uttarakhand', 'Maharashtra', 'Uttarakhand', 'Uttar Pradesh', 'Assam', 'Punjab', 'Delhi', 'Kolkata'];
const chapters = [['origin','Origin'],['about','Becoming'],['experiments','Experiments'],['archive','The archive'],['signal','The signal'],['human','Beyond the screen'],['contact','What’s next']];
const person = { '@context':'https://schema.org', '@type':'ProfilePage', name:'Sunil Singh Chaisir — The Human Variable', url:'https://sunil-human-variable.rarefern512.chatgpt.site', mainEntity:{'@type':'Person',name:'Sunil Singh Chaisir',image:'https://sunil-human-variable.rarefern512.chatgpt.site/images/portrait-seated.webp',description:'PGDM candidate at IMI Kolkata with interests in marketing, analytics, content strategy, consumer research, and visual storytelling.',sameAs:['https://www.linkedin.com/in/sunil1singh/'],alumniOf:{'@type':'CollegeOrUniversity',name:'Shaheed Bhagat Singh College (Evening), University of Delhi'}}};
function ChapterLabel({children}:{children:React.ReactNode}){return <p className="eyebrow chapterLabel"><span className="signalMark" aria-hidden="true"/>{children}</p>}
export default function Home(){
 const portrait = hasAsset('portrait-seated.webp');
 return <MotionSystem>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person)}}/>
  <a className="skipLink" href="#main">Skip to content</a>
  <Navigation/>
  <main id="main">
   <section className={`hero ${portrait?'hasPortrait':''}`} id="prologue" aria-labelledby="hero-title">
    <div className="heroTop"><span className="eyebrow">A personal portfolio · Sunil Singh Chaisir</span><span className="eyebrow heroCoordinates">Based in Kolkata, India</span></div>
    <div className="heroContent">
     <div className="heroCopy">
      <p className="heroIdentity" data-hero-reveal>I’m Sunil Singh Chaisir.</p>
      <h1 id="hero-title"><span className="lineMask"><span data-hero-reveal>Many worlds.</span></span><span className="lineMask"><span data-hero-reveal>One evolving</span></span><span className="lineMask"><em data-hero-reveal>story.</em></span></h1>
      <div className="heroIntro" data-hero-reveal><p>I’m Sunil Singh Chaisir. I explore how people think, how stories travel, and how ideas become brands.</p><div className="heroActions"><a href="#origin" className="button buttonRed">Enter my story</a><a href="#archive" className="textLink">Explore my work</a></div></div>
     </div>
     <div className="heroVisual" aria-label="An evolving form connecting the chapters of Sunil’s story">
      <div className="orbit orbitOne" aria-hidden="true"/><div className="orbit orbitTwo" aria-hidden="true"/><div className="orbitalCross crossTop" aria-hidden="true">+</div><div className="orbitalCross crossBottom" aria-hidden="true">+</div>
      <ChromeOrb/>
      {portrait&&<figure className="heroPortrait" data-parallax><AssetImage name="portrait-seated.webp" alt="Sunil Singh Chaisir seated at IMI Kolkata" priority sizes="(max-width: 700px) 70vw, 30vw"/><figcaption>Sunil Singh Chaisir / In the making</figcaption></figure>}
      <span className="visualLabel labelTop">An identity in motion</span><span className="visualLabel labelBottom">Shaped by people. Open to possibility.</span>
     </div>
    </div>
    <div className="heroBottom"><span className="eyebrow">PGDM · Marketing & Analytics · IMI Kolkata</span><a className="scrollCue" href="#origin"><span aria-hidden="true"/>Scroll to discover</a><span className="eyebrow">Always a work in progress</span></div>
   </section>
   <nav className="chapterNav" aria-label="Story chapters">{chapters.map(([id,label])=><a key={id} href={`#${id}`}>{label}</a>)}</nav>

   <section className="origin sectionPad lightSection" id="origin" aria-labelledby="origin-title">
    <ChapterLabel>Origin / Made of many places</ChapterLabel>
    <div className="originHeading" data-reveal><h2 id="origin-title">Before I understood brands,<br/>I learned to <em>understand people.</em></h2><p>Growing up in an Indian Army family meant learning new places, new classrooms, and new ways of seeing. Change became familiar. Curiosity became a habit.</p></div>
    <div className="journey" aria-label="Places I have lived, in order">{places.map((place,i)=><div key={`${place}-${i}`} className="journeyStop" data-journey-stop><span className="journeyPoint" aria-hidden="true"/><span>{place}</span>{i===0&&<small>Where the story begins</small>}{i===7&&<small>The current chapter</small>}</div>)}</div>
    <div className="originNotes"><p className="eyebrow">Different places. A wider perspective.</p><p>Each move taught me to listen first, adapt quickly, and find common ground. Those lessons still shape the way I approach a new audience—or a new idea.</p><span className="handNote">Many places,<br/>one point of view.</span></div>
   </section>

   <section className="becoming sectionPad" id="about" aria-labelledby="about-title">
    <ChapterLabel>Becoming / Curiosity into direction</ChapterLabel>
    <div className="becomingGrid">
     <div className="becomingIntro" data-reveal><h2 id="about-title">An observer.<br/>A maker.<br/><em>A marketer in motion.</em></h2><p>I’m building a career where creative thinking meets consumer understanding. Studying marketing gives my instincts a framework. Analytics helps me ask better questions.</p><p>The work outside the classroom matters just as much: growing a family food brand, listening to customers, making videos, and learning to follow an idea through.</p><a className="textLink" href="https://www.linkedin.com/in/sunil1singh/" target="_blank" rel="noreferrer">More about me on LinkedIn</a></div>
     <div className="educationStack" data-reveal>
      {hasAsset('presentation.webp')&&<figure className="aboutPortrait presentationFrame"><AssetImage name="presentation.webp" alt="Sunil speaking on stage beside a financial analysis presentation at IMI Kolkata" sizes="(max-width: 540px) 68vw, (max-width: 800px) 52vw, 24vw"/><figcaption>Communicating an idea / IMI Kolkata</figcaption></figure>}
      <article className="educationItem"><span className="eyebrow">2026 — 2028 / Kolkata</span><h3>International Management Institute</h3><p>PGDM · Marketing major · Analytics minor</p><span className="smallTag">Currently pursuing</span></article>
      <article className="educationItem"><span className="eyebrow">2022 — 2025 / Delhi</span><h3>Shaheed Bhagat Singh College (Evening)</h3><p>B.Com Programme · University of Delhi<br/>First Division</p></article>
      <article className="educationItem"><span className="eyebrow">2022 / Amritsar</span><h3>Army Public School</h3><p>95.4% in Class XII · Second in Commerce stream</p></article>
     </div>
    </div>
   </section>

   <section className="experiments sectionPad" id="experiments" aria-labelledby="experiments-title">
    <ChapterLabel>Experiments / Thinking, making, learning</ChapterLabel>
    <div className="sectionHeading" data-reveal><h2 id="experiments-title">Where curiosity<br/><em>gets practical.</em></h2><p>I like the space between a good question and a useful outcome. These are the ways I’m learning to work in it.</p></div>
    <div className="capabilityList">
     {[['Understand the audience','Consumer conversations, field research, competitor analysis, and the reasons behind a decision.','MUSO · Market research'],['Build the story','Content planning, platform strategy, SEO, editing, and turning a message into something people want to watch.','Nirmala Home Kitchen · SMART'],['Make it happen','Brand outreach, partnership coordination, vendor conversations, and the follow-through that ideas need.','SABERA · Brand partnerships']].map(([title,desc,tag])=><article className="capability" key={title} data-reveal><h3>{title}</h3><p>{desc}</p><span className="eyebrow">{tag}</span></article>)}
    </div>
    <div className="thinkingNote" data-reveal><span className="eyebrow">A working philosophy</span><p>Learn. Apply.<br/><em>Improve. Repeat.</em></p><span className="thinkingGlyph" aria-hidden="true">↻</span></div>
   </section>

   <section className="archive sectionPad lightSection" id="archive" aria-labelledby="archive-title">
    <ChapterLabel>The archive / Selected work</ChapterLabel>
    <div className="sectionHeading" data-reveal><h2 id="archive-title">Ideas are interesting.<br/><em>Here’s the work.</em></h2><p>A family brand. A product finding its audience. The conversations that make an event possible. Three different settings, one habit of getting involved.</p></div>
    <div className="projectGrid">{projects.map((p,i)=><article className={`project project-${p.slug} ${i===0?'projectFeatured':''}`} key={p.slug} data-reveal>
      <Link className="projectArt" href={`/work/${p.slug}/`} aria-label={`Read ${p.title} case study`}>
       {p.slug==='nirmala-home-kitchen'?<><span className="artMeta">Food, family & a growing audience</span><div className="kitchenArt"><span>Nirmala</span><em>Home Kitchen</em><div className="plateArt" aria-hidden="true"><i/><i/><i/></div></div><span className="artFooter">A family-led food-content brand</span></>:p.slug==='muso'?<><span className="artMeta">GAPPU Music / Local Business Accelerator</span><div className="musoArt"><span className="musicNote" aria-hidden="true">♪</span><span>Play.<br/>Listen.<br/><em>Discover.</em></span><div className="musicCard cardOne" aria-hidden="true">♩</div><div className="musicCard cardTwo" aria-hidden="true">♫</div></div><span className="artFooter">Consumer research meets creative production</span></>:<><span className="artMeta">Outreach / Coordination / Delivery</span><div className="saberaArt"><span>Good events<br/>start with good<br/><em>conversations.</em></span><div className="conversationLines" aria-hidden="true"><i/><i/><i/></div></div><span className="artFooter">SABERA / Project coordination</span></>}
       <span className="casePill">View case study <span aria-hidden="true">+</span></span>
      </Link>
      <div className="projectInfo"><div><span className="eyebrow">{p.category}</span><h3><Link href={`/work/${p.slug}/`}>{p.title}</Link></h3><p>{p.subtitle}</p></div><span className="projectPeriod">{p.period}</span></div>
     </article>)}</div>
    <p className="archiveFootnote">Each case study separates my contribution from the broader team or brand results.</p>
   </section>

   <section className="signalSection sectionPad" id="signal" aria-labelledby="signal-title">
    <ChapterLabel>The signal / Proof in context</ChapterLabel>
    <div className="signalHeading" data-reveal><h2 id="signal-title">Creative instinct.<br/><em>Measurable scale.</em></h2><p>Numbers give a story context. They mean more when you know what they describe.</p></div>
    <div className="signalMetrics"><article data-reveal><strong>100M<span>+</span></strong><h3>Cumulative video views</h3><p>Nirmala Home Kitchen · Brand-wide</p></article><article data-reveal><strong>300K<span>+</span></strong><h3>YouTube subscribers</h3><p>Nirmala Home Kitchen · Brand-wide</p></article><article data-reveal><strong>200<span>+</span></strong><h3>Consumer interactions</h3><p>MUSO · Student-team research</p></article></div>
    <div className="signalCaption"><span className="signalMark" aria-hidden="true"/><p>2026 profile-reported snapshots. Nirmala’s audience reflects collaborative brand work; MUSO’s research reflects the student team’s effort. These are not live counters.</p></div>
   </section>

   <section className="human sectionPad lightSection" id="human" aria-labelledby="human-title">
    <ChapterLabel>Beyond the screen / The human side</ChapterLabel>
    <div className="sectionHeading" data-reveal><h2 id="human-title">There’s more to the story<br/><em>than the work.</em></h2><p>Some lessons come from a camera. Some from a classroom. Others from simply showing up for people.</p></div>
    <div className="humanStories">
     <article className="humanStory communityStory" data-reveal>{hasAsset('community-teaching.webp')?<figure className="storyImage"><AssetImage name="community-teaching.webp" alt="Sunil supporting children with their learning during a community session" sizes="(max-width: 540px) 90vw, 45vw"/><figcaption>Learning together / Robin Hood Army</figcaption></figure>:<div className="humanTypeArt"><p>People<br/><em>come first.</em></p><span className="eyebrow">Showing up. Listening. Learning.</span></div>}<div className="humanText"><span className="eyebrow">Robin Hood Army / Volunteer since 2024</span><h3>A different kind of learning.</h3><p>Food distribution, educational support, and community outreach have taught me patience and empathy. They keep me connected to lives and circumstances beyond my own.</p></div></article>
     <article className="humanStory creativeStory" data-reveal>{hasAsset('smart-sunil.webp')?<figure className="storyImage posterImage"><AssetImage name="smart-sunil.webp" alt="SMART videography artwork featuring Sunil with a camera" sizes="(max-width: 540px) 90vw, 45vw"/><figcaption>Behind the camera / SMART, IMI Kolkata</figcaption></figure>:<div className="cameraArt" aria-hidden="true"><div className="viewfinder"><span/><i/><b>REC</b></div><p>Always looking<br/>for <em>the story.</em></p></div>}<div className="humanText"><span className="eyebrow">SMART / Creative production</span><h3>Behind the camera, by choice.</h3><p>Videography, editing, and campus event coverage give me another way to observe. I enjoy finding the small moments that make a bigger story feel real.</p></div></article>
    </div>
    {hasAsset('friends.webp')&&<div className="personalInterlude" data-reveal><figure><AssetImage name="friends.webp" alt="Sunil and three friends in traditional clothing" sizes="(max-width: 540px) 90vw, 55vw"/><figcaption>Good company. New memories.</figcaption></figure><div><span className="eyebrow">The moments in between</span><p>A story is also<br/>the people <em>you share it with.</em></p></div></div>}
    <div className="researchRow" data-reveal><span className="eyebrow">Also on my mind</span><h3>How finance, technology, and marketing shape the way people decide.</h3><a className="textLink" href="https://www.linkedin.com/in/sunil1singh/" target="_blank" rel="noreferrer">Read my thinking on LinkedIn</a></div>
   </section>

   <section className="contact sectionPad" id="contact" aria-labelledby="contact-title">
    <ChapterLabel>The next dimension / An unfinished story</ChapterLabel>
    <div className="contactGrid"><div data-reveal><h2 id="contact-title">The next chapter<br/>is still <em>being written.</em></h2><p>I want to build meaningful brands, understand consumers more deeply, and keep learning from people who care about their work.</p><p>Open to internships, live projects, and collaborations in marketing, content, brand strategy, and consumer research.</p><a className="button buttonRed contactButton" href="mailto:sunilchaisir22187@gmail.com">Let’s start a conversation</a><a className="emailLink" href="mailto:sunilchaisir22187@gmail.com">sunilchaisir22187@gmail.com</a></div><div className="futureNote" data-reveal><span className="eyebrow">Still curious about</span><p>People.<br/>Brands.<br/>Possibility.</p><div className="smallOrb" aria-hidden="true"/><span className="eyebrow">And what comes next.</span></div></div>
    <footer className="footer"><p>Sunil Singh Chaisir<span>Many worlds. One evolving story.</span></p><div><a href="https://www.linkedin.com/in/sunil1singh/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://youtube.com/@nirmala_home_kitchen" target="_blank" rel="noreferrer">Nirmala Home Kitchen</a><a href="#prologue">Back to beginning</a></div><span className="eyebrow">© 2026</span></footer>
   </section>
  </main>
 </MotionSystem>;
}
