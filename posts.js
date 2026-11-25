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
      <p>Sveiki is how we say hello in Latvian. Vasali is the same greeting in Latgalian, the language of Latgale,
      the eastern region of Latvia where I spend my summers. And hello is the word I use most days now, here in
      Caldwell, Idaho. Three greetings is probably the shortest way to describe who I am.</p>

      <h2>From Latvia to Germany to Idaho</h2>
      <p>I grew up in Latvia, speaking Latvian and Latgalian. After school there, I spent two years at UWC Robert Bosch
      College in Germany, studying for the International Baccalaureate and living with students from all over the world.
      Sharing a home with people from so many places changes how you see things, and it's a big part of why I
      ended up studying abroad.</p>
      <p>Today I'm a Davis UWC Scholar at the College of Idaho, studying finance with a minor in data analytics.</p>

      <h2>Why finance and data</h2>
      <p>I like that finance gives a messy situation a structure. A good model turns a vague question, like
      "can we afford this?" or "what is this company worth?", into something you can actually reason about.
      So far I've built three-statement models, valued public companies in class,
      and this semester I'm co-authoring a regression research paper in R.</p>
      <p>I also manage budgets for several student organisations as treasurer. That's where theory meets real receipts.</p>

      <h2>Outside the spreadsheets</h2>
      <p>I work as a campus safety officer, which has taught me to stay calm and make decisions when things don't go to plan.
      In the evenings you'll often find me playing the accordion or the guitar.</p>

      <h2>What you'll find here</h2>
      <p>This is where I'll share what I'm thinking about: finance and data, things I'm learning, life between Latvia and
      the US, and whatever else catches my attention. If something here interests you, I'd love to hear from you.</p>
    `
  }
];
