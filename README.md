# Elements Tab Activity

Briefly look at **ucsd.edu** and try to find a `div` element with class name **blurb**.  
Give a one sentence summary of the contents within that div.

---

# Sources Tab Activity

Look for **img-hero-......jpg** in both the current version of **ucsd.edu** and this version on the web archive:  
[https://web.archive.org/web/20240101055845/https://ucsd.edu/](https://web.archive.org/web/20240101055845/https://ucsd.edu/)

Both images in theory serve the same purpose.  
What do you notice about the image size of one compared to the other?

---

# Console Tab Activity

On **google.com** search the keywords **text adventure**.  
Make sure you aren’t using an extension like DuckDuckGo that suppresses certain console outputs.  
What happens?

Note: For this activity specifically it may not work on Chrome. Feel free to try another browser.

---

# Network Tab Activity

Open **toyota.com** with **Disable cache** enabled and the network speed set to **3G**  
(you can switch the network speed back to **No throttling** afterwards).

Let the page load for about 1 minute, then try to sort the network requests by size.  
You should notice that, aside from the very obvious, there are two scripts  
(that aren’t `v1.js` or some indecipherable `series of numbers.js`)  
that take a long time to fully load.

What are they and what do you think they are for?

---

# Local Storage Activity

Look for a **visit list** entry within the `Application -> Storage -> Local Storage`  
of your browser on **toyota.com**.

Is the time correct?  
Use an Epoch Unix Timestamp converter like [https://www.unixtimestamp.com/](https://www.unixtimestamp.com/) to verify.

---

# Lighthouse Report Activity

### A

Lighthouse supports three modes in recent versions of Chrome: **Navigation**, **Timespan**, and **Snapshot**.  
Discuss and be able to articulate the differences between the three.

### B

Generate a lighthouse report on **eBay.com** in **Navigation** mode with **Desktop** as the device and all categories enabled.  
You should notice a pretty high score.  
What were some of the issues it raised that seem concerning?

### C

Now do a lighthouse report on  
[https://us.louisvuitton.com/eng-us/homepage](https://us.louisvuitton.com/eng-us/homepage)  
(also in **Navigation** mode).

Go to the **SEO** section and you should notice some serious issues with crawling and indexing.  
What is the issue and why do you think a brand like **LV** might NOT want to fix this?

---

# My Repo – Pt 1

Pull a copy of the **discussion 1** repo and figure out how to open up the page in your development environment  
(for VSCode users, **Live Server by Ritwick Dey** is a must).

If you look at **Dev Tools -> Network**, one request seems to fail.  
What is the problem? How can we fix it?

---

# My Repo – Pt 2

Now click on the **increment** button several times until you get an alert with the text **your program stinks**.

The script given increments a counter by a certain amount until it exceeds a certain value,  
after which it will only print that message (not the counter) and refuse to increment the counter.

What is the value of the counter at that point?  
You should set a breakpoint at `index.js` to determine this  
(also check **Scope -> Module**).
