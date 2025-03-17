const reflectionImages = [
    "https://dl.dropboxusercontent.com/scl/fi/54sozz61eir41jhk1m2uw/8.png?rlkey=vfgqf2kmebwwg0k4nq7842w37&st=4a9vkt6y",
    "https://dl.dropboxusercontent.com/scl/fi/8qohn678ww97wmrkwhw4u/9.png?rlkey=vfgqf2kmebwwg0k4nq7842w37&st=uumeb5wu",
    "https://dl.dropboxusercontent.com/scl/fi/jkwr27dzwxd84wdefq84t/10.png?rlkey=k5jsk6hsp06dsgkx76zqomb6v&st=sch02kq4",
    "https://dl.dropboxusercontent.com/scl/fi/9vbczo58hu5ta2ka9aurl/11.png?rlkey=4py3r2yy6n2d8km2ogtdgq181&st=bjp7zs74",
    "https://dl.dropboxusercontent.com/scl/fi/h96hdsro6i5dw1fks7jls/12.png?rlkey=dzgnjr3nrmd8l37n4cfvip94d&st=gvh3yry3",
    "https://dl.dropboxusercontent.com/scl/fi/ikzz8gwkjia6s0b0b31h7/13.png?rlkey=8miukij6dwzq8sgi79ortlns2&st=2svkrroj",
    "https://dl.dropboxusercontent.com/scl/fi/eor19k1euylryl7hclbz0/14.png?rlkey=3yeihti7wfecqwujxj521mtxz&st=0nqmhsye",
    "https://dl.dropboxusercontent.com/scl/fi/v0felba930km3ooctlu34/15.png?rlkey=t7mapkbcyfbrvhpfrkulsvagr&st=av287p1b",
    "https://dl.dropboxusercontent.com/scl/fi/zircxgkryvrcvqtn41rho/16.png?rlkey=q862nmyuh5antjn3pcagn8f60&st=f5l24vye",
    "https://dl.dropboxusercontent.com/scl/fi/zzrkliksqd6rc4qqb7oqu/17.png?rlkey=wd8eae1e1uqu83v7dd0vrrif6&st=js5qfg14",
    "https://dl.dropboxusercontent.com/scl/fi/09v8i6en0prw5acdeq010/18.png?rlkey=yi9veeqjq3rxo4jk5xlpjzguw&st=xwxx6qtn",
    "https://dl.dropboxusercontent.com/scl/fi/gpsibuubv9tbia8gl1skk/19.png?rlkey=m8cwygp4fugsuuyalnajsjkn5&st=828t55ig",
    "https://dl.dropboxusercontent.com/scl/fi/bnaq0ki6ithz37u2wyw2l/20.png?rlkey=rzchipw2o88fhfe1742vxt9bq&st=0g13hnhm",
    "https://dl.dropboxusercontent.com/scl/fi/k8mga6ner9nmek8y9o2ps/21.png?rlkey=o9xf8h6c3uxqiu3fxevx5ehnj&st=ab4ju5ex",
    "https://dl.dropboxusercontent.com/scl/fi/b2tdw4s1pnax5wyf997yd/22.png?rlkey=mgvs3c7nn2teitrrwd96n5mpx&st=cwbchhke",
    "https://dl.dropboxusercontent.com/scl/fi/41ssyp2uxi6fy9hpne4cq/23.png?rlkey=pkt72sfjvo664dv8bo1fk38fu&st=feat2qqm",
    "https://dl.dropboxusercontent.com/scl/fi/q79rfiy0jpsxud8uk37de/24.png?rlkey=3d56zcvlkto78oyi48kpdfpsn&st=pkmreof7",
    "https://dl.dropboxusercontent.com/scl/fi/ae9p5mn8onea77y76p9x0/25.png?rlkey=5vv8mtil73ybwkqz838e6phfe&st=yso9f8so",
    "https://dl.dropboxusercontent.com/scl/fi/vixevv4hrvm60y985omyg/26.png?rlkey=8ygwqxjqfqvbv4tldivjk1d6e&st=7sjf5hda",
    "https://dl.dropboxusercontent.com/scl/fi/amide8m8z1yl5a40wx0fe/27.png?rlkey=jawo8ny61ae99okj2qll1pqv0&st=sa16wt5z",
    "https://dl.dropboxusercontent.com/scl/fi/ilei4nyld7k19evkbbhc2/28.png?rlkey=0o29xinl0tymgvedn87dyz3ln&st=7m0pjdhy",
    "https://dl.dropboxusercontent.com/scl/fi/j5ukcex85v3xxka5kyb91/29.png?rlkey=5x4j7o7mya2sbahqmj2kl84uk&st=6ci6mwrf",
    "https://dl.dropboxusercontent.com/scl/fi/godwm3zrij4q312dda88e/30.png?rlkey=53eyoa1wfqeein3f68gbt4wb0&st=h58laaa1",
    "https://dl.dropboxusercontent.com/scl/fi/fko7cwkox3ht9prnpuhhk/31.png?rlkey=kcu6t9pwezmya0s36mfce4rf3&st=9lbt0p3s",
    "https://dl.dropboxusercontent.com/scl/fi/tbk450uo1aa9d8hcmeen6/32.png?rlkey=hzl7hb18z7aykmfqnueapuqe7&st=h1wujks8",
    "https://dl.dropboxusercontent.com/scl/fi/c32s7wlw9t76e5bo414wo/33.png?rlkey=p6mlkl8y4k9z6kuq4f3r4n7ms&st=ckd076ek",
    "https://dl.dropboxusercontent.com/scl/fi/gza7rtgbwql481ewwhrft/34.png?rlkey=aqm3jabkmvzgxioo0b7uhsqg5&st=aynmqf45",
    "https://dl.dropboxusercontent.com/scl/fi/4owzsdap4181bote29sdb/35.png?rlkey=g62prpurmlt05s7ihpbjk5glr&st=qurorn46",
    "https://dl.dropboxusercontent.com/scl/fi/bbdnpa2dbhocfglizgkrg/36.png?rlkey=vf9wn9qbqafx46c9pawbj1xaj&st=rxe2tbkt",
    "https://dl.dropboxusercontent.com/scl/fi/t5ueztuu1hdkt12uujqcz/37.png?rlkey=buccumlgjo54acmlgbowbg82g&st=c2m53yki"
];

const catalystImages = [
    "https://dl.dropboxusercontent.com/scl/fi/vq8r7t88vku5fholcgdoq/39.png?rlkey=dpq79xmqmb4x6u0xdhak0ekau&st=86ma1rnk",
    "https://dl.dropboxusercontent.com/scl/fi/96yq9vd0cyil7r4cr39b6/40.png?rlkey=aiopfgha97vda9k3u1v0ynrau&st=pgu91oyw",
    "https://dl.dropboxusercontent.com/scl/fi/exsig8gt1p2lz7mog58o8/41.png?rlkey=cvy0b664rczk7h7uxbofxqng8&st=najw9uj5",
    "https://dl.dropboxusercontent.com/scl/fi/17e7c5mxq834oo16vk0c1/42.png?rlkey=3d5ooy1qrwxwhv7ob8se0rtb6&st=mb22k0nh",
    "https://dl.dropboxusercontent.com/scl/fi/5l2ebzpkv88dpl0hgs0m8/43.png?rlkey=3ys3mpjw8zo4lzid899y9be9m&st=xgg3ohxl",
    "https://dl.dropboxusercontent.com/scl/fi/25oxt116ds3yldo46scbq/44.png?rlkey=k1rgzsmxg4jm8p3i9y7ho09e0&st=hi1mu3gp",
    "https://dl.dropboxusercontent.com/scl/fi/ffbry3k27h0cspcclir92/45.png?rlkey=xayn5vk2mapqqrtum540jk4ko&st=v0vte7sv",
    "https://dl.dropboxusercontent.com/scl/fi/2bdt5956fswnyp6ulg37c/46.png?rlkey=i70vvzskjzrbikum6x74sx3v0&st=5zukzmz7",
    "https://dl.dropboxusercontent.com/scl/fi/qa4x3jowoeeb520zd48oz/47.png?rlkey=u3l5s9n2b3wb3ag14o81rkfvj&st=8bckrxvq",
    "https://dl.dropboxusercontent.com/scl/fi/bdtxz7k6b1dr8amxlly35/48.png?rlkey=2flrfqmjs6kdwthhvsnrhzt95&st=9wwqu1vb",
    "https://dl.dropboxusercontent.com/scl/fi/lnkw2ark63a2ocr9jznj4/49.png?rlkey=phq1yhtokft3lzbmi2rpdi8uh&st=ik9qiswm",
    "https://dl.dropboxusercontent.com/scl/fi/57a20j6x0zxf9kx1bqp1x/50.png?rlkey=gxvmwgbhojhmdxjvp1fcfulxv&st=jlmo04x9",
    "https://dl.dropboxusercontent.com/scl/fi/57kjwl3cjst3xy4hzq5xm/51.png?rlkey=jb6cxxbluf1n5krxbyb3ltofj&st=yehnc9c1",
    "https://dl.dropboxusercontent.com/scl/fi/bi4afejbdmg8fgzognlun/52.png?rlkey=8j7d3bfrv1skmd0rsn31wumvs&st=eoz757zk",
    "https://dl.dropboxusercontent.com/scl/fi/1c2irurf3io8bpuueaz7w/53.png?rlkey=grk5rht96k6le0jcvs3ujw7pc&st=cy43ae9m",
    "https://dl.dropboxusercontent.com/scl/fi/5ct2734g3w8nh9ka64519/54.png?rlkey=2t09ph4pkej6ica1han41wbsf&st=pi0ho01k",
    "https://dl.dropboxusercontent.com/scl/fi/l2isv1dtnks5eh3vvir9s/55.png?rlkey=iwtqa2tghb22ov2nd9ic68htq&st=n9mxwxlw",
    "https://dl.dropboxusercontent.com/scl/fi/1qpau76nixzglcue2g7rk/56.png?rlkey=56o8tf0qtbkyunzi6i7bzsx2x&st=8o0mkcp4",
    "https://dl.dropboxusercontent.com/scl/fi/vhfo2jtkj1mdelvxrpkjo/57.png?rlkey=38j20u9kn3jdoyctiqb00c8vr&st=qy8ynbop",
    "https://dl.dropboxusercontent.com/scl/fi/anxdt2s0ojjk3lwqyxf3k/58.png?rlkey=i0aqzho9w0rghhhbky3f6c1ch&st=v4985jah",
    "https://dl.dropboxusercontent.com/scl/fi/rr200czklt4b60ry2y773/59.png?rlkey=w8xmr0j2b3vwgtme1ro95cby9&st=31qnhbga",
    "https://dl.dropboxusercontent.com/scl/fi/y79xfu8hc6icufdfn7opo/60.png?rlkey=98yswmk8272b2y1a6gx7jb1tm&st=4uhuwvxb",
    "https://dl.dropboxusercontent.com/scl/fi/0wjd94p7v5b2smx1zgu8s/61.png?rlkey=z68t32qt6k4xozspph0hpqp0u&st=2cbyx7c4",
    "https://dl.dropboxusercontent.com/scl/fi/4bccz708niz8tw96da1gd/62.png?rlkey=k22mez92237w225fb0ca4up4i&st=xueocpwe",
    "https://dl.dropboxusercontent.com/scl/fi/ndi0rx86x3cenprz0vcn8/63.png?rlkey=eth6muorc1wfmjch60jxy9khk&st=syyrikrk",
    "https://dl.dropboxusercontent.com/scl/fi/v3zawak8k14rtclp1vim7/64.png?rlkey=7kn73x35188y0rip9kgikdbbb&st=bc555nqb",
    "https://dl.dropboxusercontent.com/scl/fi/d2l6z0lmu49em9pnkpf4x/65.png?rlkey=9pccz47jbfugjrdls5swckeil&st=rp9bnlne",
    "https://dl.dropboxusercontent.com/scl/fi/qturswcj5qgbqhk7w1brv/66.png?rlkey=xu3gbwia3gkju53vauctruxm5&st=ajk6dzic",
    "https://dl.dropboxusercontent.com/scl/fi/dvd5nckkwn2nus75ea9cz/67.png?rlkey=iexxxsbvahtscnfrpozs2fvgi&st=2x7a9miv",
    "https://dl.dropboxusercontent.com/scl/fi/8l1i958h5iadr4mcfrjza/68.png?rlkey=fs22xwnbrg6ph5feggytjybfu&st=vihifry8"
];

const shuffleSound = document.getElementById("shuffle-sound");
const flipSound = document.getElementById("flip-sound");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const shuffleButtons = document.querySelectorAll(".shuffle-btn");
const flipButtons = document.querySelectorAll(".flip-btn");
const resetButtons = document.querySelectorAll(".reset-btn");
const journalInput = document.getElementById("journal-insights");
const logButton = document.getElementById("log-btn");
const journalStatus = document.getElementById("journal-status");
const calendarLog = document.getElementById("calendar-log");
const yearFilter = document.getElementById("year-filter");
const monthFilter = document.getElementById("month-filter");
const dateFilter = document.getElementById("date-filter");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const speechBtn = document.getElementById("speech-btn");

let reflectionCardFlipped = false;
let catalystCardFlipped = false;
let currentReflectionImage = null;
let currentCatalystImage = null;

shuffleSound.onerror = () => console.error("Failed to load shuffle sound");
flipSound.onerror = () => console.error("Failed to load flip sound");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));
        button.classList.add("active");
        document.getElementById(`${button.dataset.tab}-tab`).classList.add("active");
    });
});

shuffleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const deck = button.dataset.deck;
        const card = document.getElementById(`${deck}-card`);
        const flipBtn = document.querySelector(`.flip-btn[data-deck="${deck}"]`);
        const resetBtn = document.querySelector(`.reset-btn[data-deck="${deck}"]`);
        
        card.classList.remove("flipped");
        card.querySelector(".front").style.backgroundImage = "";
        shuffleSound.play();
        card.classList.add("shuffling");
        button.style.display = "none";
        flipBtn.style.display = "block";
        resetBtn.style.display = "none";
        flipBtn.classList.add("breathing");
        
        if (deck === "reflection") {
            reflectionCardFlipped = false;
            currentReflectionImage = null;
        } else {
            catalystCardFlipped = false;
            currentCatalystImage = null;
        }
        checkJournalEligibility();
    });
});

flipButtons.forEach(button => {
    button.addEventListener("click", () => {
        const deck = button.dataset.deck;
        const card = document.getElementById(`${deck}-card`);
        const shuffleBtn = document.querySelector(`.shuffle-btn[data-deck="${deck}"]`);
        const resetBtn = document.querySelector(`.reset-btn[data-deck="${deck}"]`);
        const images = deck === "reflection" ? reflectionImages : catalystImages;
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        shuffleSound.pause();
        shuffleSound.currentTime = 0;
        flipSound.currentTime = 0; // Reset to start
        flipSound.play(); // Play once for flip
        card.classList.remove("shuffling");
        card.querySelector(".front").style.backgroundImage = `url(${randomImage})`;
        card.classList.add("flipped");
        button.classList.remove("breathing");
        button.style.display = "none";
        shuffleBtn.style.display = "none";
        resetBtn.style.display = "block";
        
        if (deck === "reflection") {
            reflectionCardFlipped = true;
            currentReflectionImage = randomImage;
        } else {
            catalystCardFlipped = true;
            currentCatalystImage = randomImage;
        }
        checkJournalEligibility();
    });
});

resetButtons.forEach(button => {
    button.addEventListener("click", () => {
        const deck = button.dataset.deck;
        const card = document.getElementById(`${deck}-card`);
        const shuffleBtn = document.querySelector(`.shuffle-btn[data-deck="${deck}"]`);
        const flipBtn = document.querySelector(`.flip-btn[data-deck="${deck}"]`);
        
        flipSound.currentTime = 0; // Reset to start
        flipSound.play(); // Play once for reset
        card.classList.remove("flipped");
        card.querySelector(".front").style.backgroundImage = "";
        button.style.display = "none";
        shuffleBtn.style.display = "block";
        flipBtn.style.display = "none";
        
        if (deck === "reflection") {
            reflectionCardFlipped = false;
            currentReflectionImage = null;
        } else {
            catalystCardFlipped = false;
            currentCatalystImage = null;
        }
        checkJournalEligibility();
    });
});

function checkJournalEligibility() {
    if (reflectionCardFlipped && catalystCardFlipped) {
        journalInput.disabled = false;
        logButton.disabled = false;
    } else {
        journalInput.disabled = true;
        logButton.disabled = true;
    }
}

logButton.addEventListener("click", () => {
    const insight = journalInput.value.trim();
    if (insight) {
        const date = new Date();
        const entry = {
            date: date.toISOString(),
            insight: insight,
            reflectionCard: currentReflectionImage,
            catalystCard: currentCatalystImage
        };
        
        try {
            let logs = JSON.parse(localStorage.getItem("journalLogs") || "[]");
            logs.push(entry);
            localStorage.setItem("journalLogs", JSON.stringify(logs));
            
            journalInput.value = "";
            journalStatus.textContent = "Insight logged successfully!";
            setTimeout(() => journalStatus.textContent = "", 3000);
            
            loadCalendar();
        } catch (e) {
            journalStatus.textContent = "Error saving log: Storage limit reached";
            console.error("LocalStorage error:", e);
        }
    }
});

function loadCalendar() {
    const logs = JSON.parse(localStorage.getItem("journalLogs") || "[]");
    calendarLog.innerHTML = "";
    
    const years = new Set();
    const months = new Set();
    const dates = new Set();
    
    logs.forEach(log => {
        const date = new Date(log.date);
        years.add(date.getFullYear());
        months.add(date.getMonth());
        dates.add(date.getDate());
    });
    
    yearFilter.innerHTML = '<option value="">All Years</option>' + Array.from(years).map(year => `<option value="${year}">${year}</option>`).join("");
    monthFilter.innerHTML = '<option value="">All Months</option>' + Array.from(months).map(m => `<option value="${m}">${new Date(0, m).toLocaleString('default', { month: 'long' })}</option>`).join("");
    dateFilter.innerHTML = '<option value="">All Dates</option>' + Array.from(dates).map(date => `<option value="${date}">${date}</option>`).join("");
    
    filterLogs(logs);
}

function filterLogs(logs) {
    const year = yearFilter.value;
    const month = monthFilter.value;
    const date = dateFilter.value;
    const search = searchInput.value.toLowerCase();
    
    const filteredLogs = logs.filter(log => {
        const logDate = new Date(log.date);
        return (
            (!year || logDate.getFullYear() == year) &&
            (!month || logDate.getMonth() == month) &&
            (!date || logDate.getDate() == date) &&
            (!search || log.insight.toLowerCase().includes(search))
        );
    });
    
    calendarLog.innerHTML = filteredLogs.map(log => `
        <div class="entry" data-reflection="${log.reflectionCard}" data-catalyst="${log.catalystCard}">
            <img src="${log.reflectionCard}" alt="Reflection Card">
            <img src="${log.catalystCard}" alt="Catalyst Card">
            <div>
                <strong>${new Date(log.date).toLocaleString()}</strong><br>
                ${log.insight}
            </div>
        </div>
    `).join("");

    document.querySelectorAll("#calendar-log .entry").forEach(entry => {
        entry.addEventListener("click", () => {
            document.querySelectorAll("#calendar-log .entry").forEach(e => e.classList.remove("selected"));
            entry.classList.add("selected");
        });
    });
}

yearFilter.addEventListener("change", () => filterLogs(JSON.parse(localStorage.getItem("journalLogs") || "[]")));
monthFilter.addEventListener("change", () => filterLogs(JSON.parse(localStorage.getItem("journalLogs") || "[]")));
dateFilter.addEventListener("change", () => filterLogs(JSON.parse(localStorage.getItem("journalLogs") || "[]")));
searchButton.addEventListener("click", () => filterLogs(JSON.parse(localStorage.getItem("journalLogs") || "[]")));
searchInput.addEventListener("input", () => filterLogs(JSON.parse(localStorage.getItem("journalLogs") || "[]")));

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    speechBtn.addEventListener("click", () => {
        if (journalInput.disabled) return;
        recognition.start();
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        journalInput.value += (journalInput.value ? " " : "") + transcript;
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        journalInput.value += " (Speech recognition failed)";
    };
} else {
    speechBtn.disabled = true;
}

checkJournalEligibility();
loadCalendar();