/* =========================================================
   YOUR BLOG POSTS LIVE HERE
   ---------------------------------------------------------
   To add a new post:
   1. Copy one whole block from {  to  },  (including the comma)
   2. Paste it at the TOP of the list, right under the line that says: const POSTS = [
   3. Change the text:
        slug    - short name used in the web address, lowercase, words joined with - (no spaces)
        title   - the headline
        date    - year-month-day, e.g. "2026-12-01"
        topic   - one word or short phrase (e.g. Finance, Life, Data).
                  Once you have posts on two or more topics, filter buttons appear automatically.
        summary - one or two sentences shown in the list
        body    - the post itself. Wrap each paragraph in <p> ... </p>
                  Use <h2> ... </h2> for a subheading, <blockquote> ... </blockquote> for a quote.
   4. Save, upload the file, done.
   Keep the backtick characters at the start and end of body.
   ========================================================= */

const POSTS = [
  {
    slug: "sveiki-vasali-hello",
    title: "Sveiki, Vasali, Hello",
    date: "2026-11-25",
    topic: "Life",
    summary: "A longer introduction: where I'm from, how I ended up studying finance in Idaho, and what I'll write about here.",
    body: `
      <p>Sveiki is how we say hello in Latvian. Vasali is the same greeting in Latgalian (though literally it means "healthy"), the language of Latgale,
      the eastern region of Latvia where I grew up and now spend my summers. And hello is the word I use most days now, here in
      Caldwell, Idaho. Three greetings is probably the shortest way to describe who I am today, living between different worlds and languages.</p>

      <h2>From Latvia to Germany to Idaho</h2>
      <p>I grew up in a small village in the middle of Latgale, the eastern region of Latvia. After spending a few more years in a small town not too far away, I felt
      that I wanted more – I wanted to see what was out there beyond my home. Driven purely by deep curiosity and an adventurous mindset, I got accepted to study at the Robert
      Bosch United World College in Freiburg, Germany. There I got to spend 2 beautiful years with peers from over 90 countries, travel all across Europe and
      North Africa, and discover myself even more deeply. It's still hard to process how much this big step has meant to me.</p>
      <p>Today I'm a Davis UWC Scholar at the College of Idaho, studying finance with a minor in data analytics, because why not keep discovering even further?</p>

      <h2>Why finance and data</h2>
      <p>A big part of my life in Latvia began with seeing the beauty in people's dreams coming true. I felt fulfilled when I was able to connect people to the right
      resources, secure funding for their dreams and good causes, and make sure that resources went where they were needed most and that the most value was made
      of them at the right time. I also remember enjoying 3 areas at the same time: maths, literature and creativity (music). Maths brought pattern
      recognition and a quantitative viewpoint, literature let me understand context and put it into words, and creativity let me develop out-of-the-box
      thinking and an element of play. The great feeling of seeing people's dreams come true and resources (including financial ones) end up where they matter most,
      together with the combination of those 3 areas, led me to pursue finance. Now I get to see where it all comes together.</p>
      <p>+maybe a bit of curiosity... I enjoy diving into something that I had very little clue about before starting.</p>

      <h2>Outside the spreadsheets</h2>
      <p>I work as a campus safety officer, which has taught me to stay calm and make decisions when things don't go to plan.
      In the evenings you'll often find me playing my white accordion or the guitar. It's a truly good switch from the uniform to Latvian linen clothes in the
      evening. I'm also all in on the stuff that takes my breath away: skydiving from 18,000 feet, driving down the dirtiest roads I can find, and breathtaking
      trips, from the Moroccan desert to hitchhiking along the Portuguese coastline to snowshoeing all the way up in the Swiss Alps. When taking a break, you'll find me fishing in the Latgalian
      countryside, swimming in the Baltic Sea and enjoying a good (acoustic) concert.</p>

      <figure>
        <img src="skydive.jpg" alt="Ieva in tandem freefall just after jumping from a red and white plane, against a clear blue sky">
        <figcaption>Freefall above Latvia.</figcaption>
      </figure>

      <h2>What you'll find here</h2>
      <p>This is where I'll share what I'm thinking about: finance and data, things I'm learning, life between Latvia and
      the US, and whatever else catches my attention. If something here interests you, I'd love to hear from you.</p>
    `
  }
];
