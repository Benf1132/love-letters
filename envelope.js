// File: envelope.js

const dayNames = {
  1: 'Sunday',
  2: 'Monday',
  3: 'Tuesday',
  4: 'Wednesday',
  5: 'Thursday',
  6: 'Friday',
  7: 'Saturday'
};

const letters = {
  1: `
<p>Idk if this is allowed or not but this is how you’re getting letters. You are not allowed to respond (unless you need/want me and then I’ll answer) but every morning I will send your good morning txt.</p>
<p>There are exactly seven days, 13 hours and 651,600 seconds from now until we are in the hotel room and you’re safe in my arms.</p>
<p>Good morning Shulamis “WIFEY” Friedman. Even if your legal name hasn’t changed, in my heart, you’re and you’re mine. You’re not my LOML anymore, you’re my partner, my spouse and the reason I want to get out of bed in the morning (and the reason I want to stay in bed 😘).</p>
<p>I can’t give you my heart because you already have it but I can share some of my butterflies with you. Every time I think they run out, you keep planting some more so it’s only fair if I share some of them 🦋🦋🦋🦋.</p>
<p>I’m not always so “smiley” in the morning 🙄. But that will definitely change once I start waking up next to you.</p>
<p>I love you so much more!</p>
<p>Forever yours,<br>Binyomin “Hubby” Friedman.</p>`,

  2: `
<p>Good morning, my “purdy” wife.</p>
<p>I don't know if I ever told you this, but when we were dating, R. Rosenbaum asked me whether I knew you were the right girl for me—and if so, why I thought that.</p>
<p>I didn’t even have to think when I told him I hadn’t been as happy as I was with you for such a long, continuous period. From the moment I met you until the long-awaited moment we finally 🙄 got engaged, I lived in a state of pure happiness—like I was finally home.</p>
<p>And yet, from the moment we got engaged until now, it’s been torture—because you are so close, yet still just out of reach. Every glance, every laugh, every touch keeps my butterflies alive, and it takes everything in me not to pull you in my arms and never let you go.</p>
<p>My heart races whenever I’m near you and I know you’ve noticed how it slows whenever you are in my arms. That’s because my heart beats in sync with yours—beat for beat, like we were always meant to be one. And yet, I still have to wait just a little longer to truly call you mine.</p>
<p>But in exactly 1 week, the wait will finally be over. You will wake up in my arms and when you open those beautiful eyes you’ll see just how happy I am again—how calm my heart is—because I’ll finally be where I belong, with the woman I love beyond words.</p>
<p>I love you more than I could ever say.</p>
<p>Forever yours,<br>Your hot guy,<br>Ben</p>
<p>P.S. Thank you for the picture—it’s the only thing keeping me sane right now. But trust me, no picture could ever capture how breathtakingly beautiful you are in real life. I can’t wait to remind you of that every single day. And yes, you will get those hugs 🙄.</p>`,

  3: `
<p>Hey gorgeous,</p>
<p>You’re getting this letter a little early to help you sleep tonight.</p>
<p>Tomorrow is a big day for you. You’ve worked so hard, woken up way too early, and fueled yourself with WAY too much coffee. And now, you’re just one step away.</p>
<p>I know how much this moment means to you, how much you’ve sacrificed, how many late nights and early mornings you’ve powered through, and how much you’ve doubted yourself when you never should have. But wifey, since you keep forgetting, let me remind you—you are brilliant. You are capable. You are unstoppable. All bottled up into one tiny, 5‑foot force to be reckoned with.</p>
<p>This exam is just a formality because you already have what it takes to be a nurse. You’re compassionate, caring, and somehow make scrubs look sexy.</p>
<p>I wish I could take away every ounce of stress and worry you’re feeling right now. But even though I can’t be there physically, know that I’m with you in spirit, cheering you on with every beat of my heart—which, as you should know by now, already belongs to you.</p>
<p>And in just a few days, I finally get to call you my wife. I get to spend forever by your side, loving you, supporting you, and being the luckiest man alive. You are the love of my life. No matter what happens tomorrow—whether you feel confident or uncertain, whether the test feels easy or impossible—please remember this: you’ve already won.</p>
<p>You won my heart. You won the admiration of everyone who knows you. And soon, you’ll win this, too—because you are amazing.</p>
<p>So go in there tomorrow with confidence. Take a deep breath, say a little prayer, and trust in yourself. And when it’s all over, know that I’ll be right here waiting, arms wide open, ready to hold the incredible woman I am so lucky to call my own.</p>
<p>I love you more than words can ever say, and I always will. Hopefully, now you won’t forget it.</p>
<p>Forever yours,<br>Your (almost) husband,<br>Ben</p>
<p>P.S. No matter what, you are already the most amazing nurse in my eyes. But I cannot wait to officially call you my nurse (even if I still don’t listen to your advice about antibiotics 😘).</p>`,

  4: `
<p>Good morning, Nurse (soon‑to‑be) Friedman,</p>
<p>Can you believe it? In just a few days, at 4:30 PM, I’ll be standing at the end of the aisle, watching the most breathtaking woman in the world walk toward me. And while I’ll “try” to keep it together, let’s be honest… I’m absolutely going to lose it. Tears? Check. Shaky hands? Check. A stupidly big grin because I can’t believe I actually get to marry you? Absolutely. Because in that moment, it’ll hit me all over again just how insanely lucky I am to be marrying you.</p>
<p>It still doesn’t feel real. How did I end up with someone so beautiful, so brilliant, so perfectly made for me? Did I mention beautiful? One day, we were just two people talking, laughing, making fun of each other, and then after date #2, somehow, I convinced you to spend forever with me. (Still not sure how I pulled that off, but I’m running with it.)</p>
<p>It’s crazy to think how close we are to the best day of our lives. Every little moment has led us here—the late-night talks, the early morning texts, the midday calls… and the other midday calls (lol). And now, we’re just days away from forever. And after that? You’re stuck with me—no backsies.</p>
<p>So take a deep breath, babe. We’re almost there. In just a few days, I finally get to call you my wife, and you get to deal with my antics forever. (Good luck with that.) And I have to deal with your sass and hormones (yes, you do get hormonal) and I can’t wait.</p>
<p>By the way, when you check your grades, let me know immediately—I want to be the first to celebrate how amazing you are. (And if for some absolutely ridiculous reason the results don’t reflect how brilliant I know you are, I’ll remind you that one test doesn’t define the incredible nurse—and wife—you’ve already proven yourself to be.)</p>
<p>Forever yours (literally, no escape now),<br>Your 5’7” husband,<br>Ben</p>
<p>P.S. I hope you’re ready for constant cuddling, me sneaking kisses when you least expect it, and PDA so intense we could make Meir uncomfortable. Oh, and me reminding you every five minutes that you’re my wife. Because that’s happening.</p>
<p>P.P.S. I love you. Like, a lot. And I promise to keep saying it—probably to an annoying degree—for the rest of our lives.</p>`,

  5: `
<p>Good morning, Nurse Friedman,</p>
<p>First off, don’t think I didn’t notice what bag you gave me yesterday’s letter in. “The cleaning lady threw out my perfume.” Uh‑huh, quite believable, except… that you still have the bag.</p>
<p>Secondly, I wanted to write a more serious letter today.</p>
<p>In just a few days, we’ll be standing together, surrounded by family and friends, committing ourselves to a lifetime of love, loyalty, and partnership. And while everyone will see a beautiful wedding, what truly matters is the marriage that begins the moment we walk away hand in hand as husband and wife. Because marriage isn’t just about the best days, the easy days, or the picture-perfect moments. It’s about the hard days, too. And make no mistake—there will be hard days.</p>
<p>Let’s not kid ourselves—we’re both stubborn, we both have strong opinions, and we both like to be right. That means there will be fights—big ones, small ones, stupid ones, and ones that actually matter. There will be days when we frustrate each other, when life gets overwhelming, when we don’t see eye to eye. We will have disagreements. We will get on each other’s nerves. We will argue. We will say things we don’t mean, let emotions get the best of us, and have days where we need to walk away just to cool off. Honestly, if we didn’t, it would mean we weren’t being real with each other.</p>
<p>Disagreements, frustrations, and even full‑blown fights are normal. In fact, they’re necessary. They mean we care, that we have strong opinions, that we are invested in this relationship. A healthy marriage isn’t one without fights—it’s one where we learn how to fight the right way. We’re human—we make mistakes. It’s how we handle them, both in the moment and especially after, that will define the kind of husband and wife we are. Ones that grow together through challenges rather than apart.</p>
<p>Because it’s never going to be me against you. It’s going to be us against whatever issue we’re facing. I will never walk away from a fight thinking it’s me against you—because it never will be. It’s us against the problem, us figuring out how to be better for each other, us choosing to love each other even when we’re mad, frustrated, or exhausted.</p>
<p>One of the biggest pitfalls in marriage is forgetting that we are on the same team. When life gets stressful, it will be easy to take things out on each other, to assume the worst, or to get caught up in pride instead of coming back to each other with humility and understanding. I want you to know now—I will try my best to be patient, to listen, to communicate with you, and to work through our struggles with you rather than against you.</p>
<p>But I’m not perfect, and I know I’ll make mistakes. I may say the wrong thing, I may react poorly at times, and there will be days where I don’t handle things the way I should. But what I won’t do is stop trying. I will keep learning how to be a better husband to you, how to love you in the way you need, how to communicate better, and how to be the partner you deserve. I will apologize when I’m wrong (which, let’s be honest, won’t be that often 😉). I will never stop choosing you. And when I fall short, I ask for your patience and your forgiveness, just like I will always be patient and forgiving with you. Because a strong marriage isn’t about never making mistakes—it’s about learning from them and growing together. So please know I will try not to hold a grudge and instead I will hold you.</p>
<p>I promise you now—when we fight, I will still love you. I will still respect you. I will still be your partner, even in the moments we don’t understand each other. I won’t walk away, and I won’t shut down. I will try to listen, even when it’s hard. I will work through the messy moments with you, not against you. No matter how mad we get, no matter how stubborn we are, I promise I will always choose to come back to you. And I hope you’ll do the same for me. Because loving you isn’t just about the easy days—it’s about the hard ones, too. And I wouldn’t want to face them with anyone else.</p>
<p>And, babe, we’re about to be tested in ways most newlyweds don’t have to face ever in their lives. Your surgery at the end of April is going to be hard—on you, on me, and on us as newlyweds. You’re going to be in pain, and I know that will be frustrating for you. It’s going to be really hard for me too—because watching you struggle, knowing there’s nothing I can do to take away the pain, is going to be brutal. There will be moments when you feel weak, moments when you just want it to be over, and moments when I know you’re going to hate asking for help—but that’s why I’m here. Not just for the good times, but for the hardest times, too.</p>
<p>I will be there, every step of the way. I will hold you when you need comfort, give you space when you need to breathe, and remind you that you don’t have to go through it alone. We are partners, in every sense of the word.</p>
<p>So when we stand together at 4:30 PM on Sunday, I won’t just be marrying the love of my life—I’ll be making a commitment. A commitment to love you through every fight, to support you through every challenge, to always choose us over pride or stubbornness. A commitment to never go to bed angry, to never let a fight make me forget how much I love you, and to always, always make up properly (and yes, that means exactly what you think it means).</p>
<p>I will love you at your best, and I will love you at your worst. I will love you when it’s easy, and I will love you when it’s hard. I will fight for us, and when we fight, I will fight with you, not against you.</p>
<p>This marriage won’t always be easy, but it will always be worth it. And no matter what life throws at us, we will always find our way back to each other.</p>
<p>Forever yours,<br>Your almost-husband,<br>Ben</p>
<p>P.S. Even when you’re mad at me, I’m still going to kiss you. A lot. So just accept it now.</p>`,

  6: `
<p>Good morning baby maker,</p>
<p>I really can’t last this long without texting you. It hurts too much. I love you so much you can’t even imagine. Walking around the apartment without you is torture. Everywhere I go holds a memory—where I held you, kissed you, and fell more and more in love with you. Even walking into our closet hurts because it smells like you. It’s not fair. I need to hold my wife. I need to kiss her. At the very least, let me talk to her.</p>
<p>Gedarim sucks. I’m sorry but it does. I can’t even work on my assignment because I just keep thinking about you. I’m addicted. I need you. I need to be around you.</p>
<p>They say distance makes the heart grow fonder, but at this rate, chas v’shalom, I might have a heart attack from loving you this much. Are you sure I can’t see you before the wedding? Is Vegas still an option?</p>
<p>I miss everything about you.<br>
I miss how fast my heart beats whenever I’m around you.<br>
I miss your laugh, your smile, your frown.<br>
I miss your beautiful eyes, your bony feet, your awkwardly shaped knees.<br>
I miss your larger-than-mine hands and your not-button nose.<br>
I miss your soft lips—and especially your tongue (😘).<br>
I miss your ribs that stick out (but not as much as mine).<br>
I miss not finding your hairs in the most awkward places.<br>
I miss giving you massages and chills.<br>
I miss making you feel safe.<br>
I miss watching you work like a she-man.<br>
I miss your arm resting on my chest.<br>
I miss your singing—don’t let Malya put you down, I love it so much.<br>
I miss the way you drive like a weirdo and speed like a maniac.<br>
I miss how perfectly you fit in my arms.<br>
I miss how beautiful you look in the morning, at night, and—don’t get me started—throughout the day.<br>
I miss your excessive coffee-drinking habit.<br>
I miss your OCD.<br>
I miss hearing the way you say my name.<br>
I miss your texts that always make me smile.<br>
I miss your smell.<br>
I miss your voicemail.<br>
I miss flying with you—especially when you fall asleep in my lap and your fingers have a mind of their own… can’t wait for the next flight. “We don’t do that here,” hehe.<br>
I miss the way you jump onto the couch.<br>
I miss hearing your deep breathing when we lay next to each other.<br>
I miss watching you stretch like a cat.<br>
I miss the way you always notice when something is off with me.<br>
I miss the way you moan in your sleep (I mean, I really can’t wait for that).<br>
I miss the quick kisses and the camel kisses.<br>
I miss seeing you get so excited when you love something or think it’s cute.<br>
I miss being your personal heater.<br>
I miss walking around with you on my arm—you’re my eye candy.<br>
I even miss the way you multitask and never pay attention to what I’m saying.<br>
I miss you telling me to shut up.<br>
I miss the way you comb your hair with your hands late at night to work out your knots.<br>
I miss the way you concentrate so hard when you’re painting your nails.<br>
I miss feeling your breath on my neck when you’re in my arms.<br>
I miss the way you hug me tight when you don’t want me to go (koala).</p>
<p>I miss you…. I miss my wife.</p>
<p>Your desperate hubby,<br>HGB.</p>`,

  7: `
<p>Have an amazing Shabbos!!<br>Enjoy Shabbos kallah—it’ll be your last as a single Pringle 🥳😘.</p>
<p>I’m sorry Malya won’t be there with you but she loves you and is only looking out for you.</p>
<p>Please please please try to make the best of the situation without letting the stress get to you. I know it’s not ideal. I know it sucks. But just know on Sunday when you’re safe in my arms we can either laugh about it or talk or whatever you want to do. I’ll be there for you. Whatever you need.</p>
<p>Chas veshalom anything that goes wrong will be something we laugh about with our 11 kids. Honestly might need to change that to 12 ’cause I love you so much.</p>
<p>By the way, when I was making the website I accidentally threw in some… let’s call them “good pics.” Almost sent it to your mom and then I realized what I put in there lol.</p>
<p>I love you. You’re not my almost‑wife. You’re my wife.</p>`
};

const envelopes = document.querySelectorAll('.envelope');
const modal    = document.getElementById('modal');
const titleEl  = document.getElementById('modal-title');
const bodyEl   = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');
const hearts   = document.querySelector('.heart-container');
const confetti = document.querySelector('.confetti-container');

envelopes.forEach(env => {
  env.addEventListener('click', () => {
    env.classList.add('open');

    const day = Number(env.dataset.day);
    titleEl.textContent = dayNames[day];
    bodyEl.innerHTML   = letters[day];
    modal.classList.add('open');

    // full‑screen hearts
    for (let i = 0; i < 25; i++) {
      const h = document.createElement('div');
      h.className            = 'heart';
      h.textContent          = '❤️';
      h.style.left           = `${Math.random() * 100}%`;
      h.style.top            = `${Math.random() * 100}%`;
      h.style.animationDelay = `${Math.random()}s`;
      hearts.appendChild(h);
      h.addEventListener('animationend', () => h.remove());
    }

    // full‑screen confetti
    const colors = ['#D63447', '#F9C846', '#4ABDAC', '#FC4A1A'];
    for (let i = 0; i < 50; i++) {
      const c = document.createElement('div');
      c.className            = 'confetti';
      c.textContent          = '🎉';
      c.style.left           = `${Math.random() * 100}%`;
      c.style.top            = `${Math.random() * 100}%`;
      c.style.color          = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDelay = `${Math.random()}s`;
      confetti.appendChild(c);
      c.addEventListener('animationend', () => c.remove());
    }
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
  envelopes.forEach(e => e.classList.remove('open'));
});
