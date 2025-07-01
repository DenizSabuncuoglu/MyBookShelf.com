// Book data array containing details of each book
const bookData = [
    // Each book has name, image path, genre, description, writer, and year
    { name: "Ask The Dust", image: "World Literature/ask the dust.jpg", genre: "world-lit", description: "Arturo Bandini is a writer who moves from Colorado to Los Angeles with aspirations of completing a great novel. There he meets bold Mexican waitress Camilla. She wants to live a better life and thinks marrying for money may be her answer. Arturo, who tries to project a confidence that he is inwardly lacking, initially acts coldly toward Camilla. Despite not seeming like a viable match, a romance gradually develops between the two.", writer: "John Fante", year: "1939" },
    { name: "Fight Club", image: "World Literature/fight club.jpg", genre: "world-lit", description: "Fight Club is a 1996 novel by Chuck Palahniuk. It was Palahniuk's first published novel, and follows the experiences of an unnamed protagonist struggling with insomnia. The protagonist finds relief by impersonating a seriously ill person in several support groups, after his doctor remarks that insomnia is not 'real suffering'.", writer: "Chuck Palahniuk", year: "1996" },
    { name: "The Kite Runner", image: "World Literature/kite runner.jpg", genre: "world-lit", description: "The Kite Runner is the debut novel of Afghan-American author Khaled Hosseini.[1] Published in 2003 by Riverhead Books, it tells the story of Amir, a young Afghan boy from Wazir Akbar Khan, Kabul. The story is set against a backdrop of tumultuous events, beginning with the collapse of Afghanistan's monarchy and the Afghan conflict that sparked shortly thereafter, with a particular focus on the Soviet / Afghan War and the mass exodus of Afghan refugees, as well as the rise of the Taliban regime.", writer: "Khaled Hosseini", year: "2003" },
    { name: "Normal People", image: "World Literature/normal people.jpg", genre: "world-lit", description: "Normal People is a 2018 novel by the Irish author Sally Rooney. Normal People is Rooney's second novel, published after Conversations with Friends (2017). It was first published by Faber & Faber on 30 August 2018. The book became a best-seller in the US, selling almost 64,000 copies in hardcover in its first four months of release. A critically acclaimed and Emmy nominated television adaptation of the same name aired from April 2020 on BBC Three and Hulu. A number of publications ranked it one of the best books of the 2010s.", writer: "Sally Rooney", year: "2018" },
    { name: "Sputnik Sweetheart", image: "World Literature/sputnik sweetheart.jpg", genre: "world-lit", description: "Sumire is an aspiring writer who survives on a family stipend and the creative input of her only friend, the novel's male narrator and protagonist, known in the text only as 'K'. K is an elementary school teacher, 25 years old, and in love with Sumire, though she does not quite share his feelings. At a wedding, Sumire meets an ethnic Korean woman, Miu, who is 17 years her senior. The two strike up a conversation and Sumire finds herself attracted to the older woman. This is the first time she has ever been sexually drawn to anybody. Miu soon asks Sumire to come work for her. This meeting and the ensuing relationship between the women leads to Sumire changing: she starts wearing nicer clothes, gets a better apartment, and quits smoking; however, she also develops a writer's block.", writer: "Haruki Murakami", year: "1999" },

    { name: "Kafka On The Shore", image: "World Literature/kafka on the shore.jpeg", genre: "world-lit", description: "Kafka on the Shore (海辺のカフカ, Umibe no Kafuka) is a 2002 novel by Japanese author Haruki Murakami. Its 2005 English translation was among 'The 10 Best Books of 2005' from The New York Times and received the World Fantasy Award for 2006. The book tells the stories of the young Kafka Tamura, a bookish 15-year-old boy who runs away from his Oedipal curse, and Satoru Nakata, an old, disabled man with the uncanny ability to talk to cats. The book incorporates themes of music as a communicative conduit, metaphysics, dreams, fate, and the subconscious.", writer: "Haruki Murakami", year: "2002" },
    { name: "The Alchemist", image: "World Literature/the alchemist.jpeg", genre: "world-lit", description: "The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. The story follows the shepherd boy Santiago in his journey across North Africa to the Egyptian pyramids after he dreams of finding treasure there.", writer: "Paulo Coelho", year: "1988" },
    { name: "Of Mice And Men", image: "World Literature/of mice and men.jpeg", genre: "world-lit", description: "Of Mice and Men is a 1937 novella written by American author John Steinbeck.[1][2] It describes the experiences of George Milton and Lennie Small, two displaced migrant ranch workers, as they move from place to place in California, searching for jobs during the Great Depression.", writer: "John Steinbeck", year: "1937" },
    { name: "The Great Gatsby", image: "World Literature/the great gatsby.jpeg", genre: "world-lit", description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with Jay Gatsby, a mysterious millionaire with an obsession to reunite with his former lover, Daisy Buchanan.", writer: "F. Scott Fitzgerald", year: "1925" },
    { name: "Pride And Prejudice", image: "World Literature/pride and prejudice.jpeg", genre: "world-lit", description: "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.", writer: "Jane Austen", year: "1813" },
    
    { name: "American Gods", image: "Fantasy/american gods.jpg", genre: "fantasy", description: "American Gods (2001) is a fantasy novel by British author Neil Gaiman. The novel is a blend of Americana, fantasy, and various strands of ancient and modern mythology, all centering on the mysterious and taciturn Shadow. The book was published in 2001 by Headline in the United Kingdom and by William Morrow in the United States. It gained a positive critical response and won the 2002 Hugo and Nebula awards.", writer: "Neil Gaiman", year: "2001" },
    { name: "Game of Thrones", image: "Fantasy/game of thrones.jpg", genre: "fantasy", description: "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996. The novel won the 1997 Locus Award[1] and was nominated for both the 1997 Nebula Award and the 1997 World Fantasy Award The novella Blood of the Dragon, comprising the Daenerys Targaryen chapters from the novel, won the 1997 Hugo Award for Best Novella. In January 2011, the novel became a New York Times Bestseller and reached No. 1 on the list in July 2011.", writer: "George R.R. Martin", year: "1996" },
    { name: "Harry Potter", image: "Fantasy/harry potter.jpg", genre: "fantasy", description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. It is the first novel in the Harry Potter series and was Rowling's debut novel. It follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school. With the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents but failed to kill Harry when he was just 15 months old.", writer: "J.K. Rowling", year: "1997" },
    { name: "The Lord Of The Rings", image: "Fantasy/the lord of the rings.jpg", genre: "fantasy", description: "The Fellowship of the Ring is the first of three volumes of the epic novel The Lord of the Rings by the English author J. R. R. Tolkien; it is followed by The Two Towers and The Return of the King. The action takes place in the fictional universe of Middle-earth. The first edition was published on 29 July 1954 in the United Kingdom, and consists of a foreword in which the author discusses the writing of The Lord of the Rings, a prologue titled 'Concerning Hobbits, and other matters', and the main narrative divided into two 'books'.", writer: "J.R.R Tolkien", year: "1954" },
    { name: "The Witcher", image: "Fantasy/the witcher.jpg", genre: "fantasy", description: "The Witcher (Polish: Wiedźmin) is a series of 9 fantasy novels and 15 short stories by Polish author Andrzej Sapkowski. The series revolves around the eponymous witcher, Geralt of Rivia. Witchers are monster hunters given superhuman abilities for the purpose of killing dangerous creatures. ", writer: "Andrew Sapkowski", year: "1993" },

    { name: "Circe", image: "Fantasy/circe.jpeg", genre: "fantasy", description: "Circe is a 2018 mythic fantasy novel by American writer Madeline Miller. Set during the Greek Heroic Age, it is an adaptation of various Greek myths, most notably the Odyssey, as told from the perspective of the witch Circe. The novel explores Circe's origin story and narrates Circe's encounters with mythological figures such as Hermes, the Minotaur, Jason, and Medea and ultimately, her romance with Odysseus and his son Telemachus.", writer: "Madeline Miller", year: "2018" },
    { name: "The Chronicles Of Narnia", image: "Fantasy/narnia.jpeg", genre: "fantasy", description: "The Chronicles of Narnia is a series of seven portal fantasy novels by British author C. S. Lewis. Illustrated by Pauline Baynes and originally published between 1950 and 1956, the series is set in the fictional realm of Narnia, a fantasy world of magic, mythical beasts, and talking animals. It narrates the adventures of various children who play central roles in the unfolding history of the Narnian world. Except in The Horse and His Boy, the protagonists are all children from the real world who are magically transported to Narnia, where they are sometimes called upon by the lion Aslan to protect Narnia from evil. The books span the entire history of Narnia, from its creation in The Magician's Nephew to its eventual destruction in The Last Battle.", writer: "Clive Staples Lewis", year: "1950" },
    { name: "The Hobbit", image: "Fantasy/the hobbit.jpeg", genre: "fantasy", description: "The Hobbit, or There and Back Again is a children's fantasy novel by the English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book is recognized as a classic in children's literature and is one of the best-selling books of all time, with over 100 million copies sold. The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, the titular hobbit who joins the wizard Gandalf and the thirteen dwarves of Thorin's Company on a quest to reclaim the dwarves' home and treasure from the dragon Smaug. Bilbo's journey takes him from his peaceful rural surroundings into more sinister territory.", writer: "J.R.R Tolkien", year: "1937" },
    { name: "Percy Jackson And The Olympians", image: "Fantasy/percy jackson.jpeg", genre: "fantasy", description: "Percy Jackson & the Olympians is a fantasy novel series by American author Rick Riordan. The first book series in his Camp Half-Blood Chronicles, the novels are set in a world with the Greek gods in the 21st century. The series follows the protagonist, Percy Jackson, a young demigod who must prevent the Titans, led by Kronos, from destroying the world.", writer: "Rick Riordan", year: "2005" },
    { name: "Alice's Adventures In The Wonderland", image: "Fantasy/alice.jpeg", genre: "fantasy", description: "Alice's Adventures in Wonderland (also known as Alice in Wonderland) is an 1865 English children's novel by Lewis Carroll, a mathematics don at the University of Oxford. It details the story of a girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures. It is seen as an example of the literary nonsense genre. The artist Sir John Tenniel provided 42 wood-engraved illustrations for the book.", writer: "Lewis Carroll", year: "1865" },

    { name: "1984", image: "Science Fiction/1984.png", genre: "scifi", description: "Nineteen Eighty-Four (also published as 1984) is a dystopian novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final completed book. Thematically, it centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of people and behaviours within society. Orwell, a staunch believer in democratic socialism and member of the anti-Stalinist Left, modelled Britain under authoritarian socialism in the novel on the Soviet Union in the era of Stalinism and on the very similar practices of both censorship and propaganda in Nazi Germany. More broadly, the novel examines the role of truth and facts within societies and the ways in which they can be manipulated.", writer: "George Orwell", year: "1949" },
    { name: "Altered Carbon", image: "Science Fiction/altered carbon.jpg", genre: "scifi", description: "Altered Carbon is a 2002 British cyberpunk novel by the English writer Richard K. Morgan. Set in a future in which interstellar travel and relative immortality is facilitated by transferring consciousnesses between bodies ('sleeves'), it follows the attempt of Takeshi Kovacs, a former U.N. elite soldier turned private investigator, to investigate a rich man's death. It is followed by the sequels Broken Angels and Woken Furies.", writer: "Richard K. Morgan", year: "2002" },
    { name: "Dune", image: "Science Fiction/dune.jpg", genre: "scifi", description: "Dune is set in the distant future in a feudal interstellar society, descended from terrestrial humans, in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family reluctantly accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange or 'spice', an enormously valuable drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides. As melange can only be produced on Arrakis, control of the planet is a coveted and dangerous undertaking. The story explores the multilayered interactions of politics, religion, ecology, technology, and human emotion as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice.", writer: "Frank Herbert", year: "1965" },
    { name: "Do Androids Dream of Electric Sheep?", image: "Science Fiction/electric sheep.jpg", genre: "scifi", description: "Do Androids Dream of Electric Sheep? (retrospectively titled Blade Runner: Do Androids Dream of Electric Sheep? in some later printings) is a 1968 dystopian science fiction novel by American writer Philip K. Dick. It is set in a post-apocalyptic San Francisco, where Earth's life has been greatly damaged by a nuclear global war. The main plot follows Rick Deckard, a bounty hunter who has to 'retire' (i.e. kill) six escaped Nexus-6 model androids, while a secondary plot follows John Isidore, a man of sub-par IQ who aids the fugitive androids.", writer: "Philip K. Dick", year: "1968" },
    { name: "Neuromancer", image: "Science Fiction/neuromancer.jpg", genre: "scifi", description: "Neuromancer is a 1984 science fiction novel by Canadian-American author William Gibson. Set in a near-future dystopia, the narrative follows Case, a computer hacker enlisted into a crew by a powerful artificial intelligence and a traumatised former soldier to complete a high-stakes heist. It was Gibson's debut novel and, following its success, served as the first entry in the Sprawl trilogy, followed by Count Zero (1986) and Mona Lisa Overdrive (1988).", writer: "William Gibson", year: "1984" },

    { name: "The City & The City", image: "Science Fiction/the city.jpeg", genre: "scifi", description: "The City & the City is a novel by British author China Miéville that follows a wide-reaching murder investigation in two cities that exist side by side, each of whose citizens are forbidden to go into or acknowledge the other city, combining weird fiction with the police procedural. It was written as a gift for Miéville's terminally ill mother, who was a fan of the latter genre. The novel was published by Macmillan on 15 May 2009.", writer: "Chine Mieville", year: "2009" },
    { name: "The Hitchhiker's Guide To The Galaxy", image: "Science Fiction/hitchiker.jpeg", genre: "scifi", description: "The broad narrative of The Hitchhiker's Guide to the Galaxy follows the misadventures of the last surviving Earth man, Arthur Dent, following the demolition of the Earth to make way for a hyperspace bypass. Dent is rescued from Earth's destruction by Ford Prefect—a human-like alien writer for the electronic travel guide The Hitchhiker's Guide to the Galaxy—by hitchhiking onto a passing Vogon spacecraft. Following his rescue, Dent explores the galaxy with Prefect and encounters Trillian, another human who was taken from Earth (before its destruction) by the President of the Galaxy, Zaphod Beeblebrox, and Marvin the Paranoid Android. Certain narrative details were changed among the various adaptations.", writer: "Douglas Adams", year: "1981" },
    { name: "The Time Machine", image: "Science Fiction/time machine.jpeg", genre: "scifi", description: "The Time Machine is an 1895 dystopian post-apocalyptic science fiction novella by H. G. Wells about a Victorian scientist known as the Time Traveller who travels to the year 802,701. The work is generally credited with the popularization of the concept of time travel by using a vehicle or device to travel purposely and selectively forward or backward through time. The term 'time machine', coined by Wells, is now almost universally used to refer to such a vehicle or device.", writer: "H.G. Wells", year: "1895" },
    { name: "Frankenstein", image: "Science Fiction/frankenstein.jpeg", genre: "scifi", description: "Frankenstein; or, The Modern Prometheus is an 1818 Gothic novel written by English author Mary Shelley. Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. Shelley started writing the story when she was 18, and the first edition was published anonymously in London on 1 January 1818, when she was 20. Her name first appeared in the second edition, which was published in Paris in 1821.", writer: "Mary Shelley", year: "1818" },
    { name: "I Am Legend", image: "Science Fiction/legend.jpeg", genre: "scifi", description: "I Am Legend is a 1954 post-apocalyptic horror novel by American writer Richard Matheson that was influential in the modern development of zombie and vampire literature and in popularizing the concept of a worldwide apocalypse due to disease. The novel was a success and was adapted into the films The Last Man on Earth (1964), The Omega Man (1971), and I Am Legend (2007). It was also an inspiration for George A. Romero's Night of the Living Dead (1968). Set on Cimarron Street in 1976 Gardena, California, after an apocalyptic war that ravages the land with weekly dust storms, the novel details the life of Robert Neville in the months and eventually years after the outbreak of a pandemic that has killed the rest of the human population and turned infected survivors into 'vampires'.", writer: "Richard Matheson", year: "1954" }
];

// Counter for how many books are in the "Plan to Read" section
let planToReadCount = 0;

// Get references to genre containers on the page
const genres = {
    "world-lit": document.getElementById("world-lit"),
    "fantasy": document.getElementById("fantasy"),
    "scifi": document.getElementById("scifi")
};


const about = [
    {
        title: 'My BookShelf',
       about: "Welcome to my Virtual Bookshelf website project—a dynamic, user-friendly platform designed to help readers organize, explore, and share their personal libraries online. This digital bookshelf allows users to catalog their favorite books, track their reading progress, write reviews, and discover new reads through curated recommendations. Built with a focus on simplicity and visual appeal, the site offers an intuitive interface where users can categorize books by genre, author, or status (e.g., 'Plan To Read,' 'Reading,' or 'On Hold'). Whether you're a casual reader or a literary enthusiast, this project aims to bring the joy of book collecting and discovery into the digital age."
    }
];

const contact = [
    {
        title: 'Contact Me',

    }
]

const aboutModal = document.getElementById('aboutModal');
const aboutDescription = document.getElementById('aboutDescription');
const aboutButton = document.getElementById('aboutBtn');
const aboutTitle = document.getElementById('aboutTitle');
const aboutCloseBtn = document.querySelector(".aboutClose-btn");

aboutButton.addEventListener('click', function(){
    aboutTitle.textContent = about[0].title;
    aboutDescription.textContent = about[0].about;
    aboutModal.style.display = 'block';
    const aboutCloseBtn = document.querySelector(".aboutClose-btn");
    console.log('About Me');
});


const contactModal = document.getElementById('contactModal');
const contactButton = document.getElementById('contactBtn');
const contactTitle = document.getElementById('contactTitle');
const contactCloseBtn = document.querySelector(".contactClose-btn");

contactButton.addEventListener('click', function(){
    contactTitle.textContent = contact[0].title;
    contactModal.style.display = 'block';
    const contactCloseBtn = document.querySelector(".contactClose-btn");
});


// Get references to modal elements
const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalWriter = document.getElementById("modalWriter");
const modalYear = document.getElementById("modalYear");
const modalDescription = document.getElementById("modalDescription");
const infoCloseBtn = document.querySelector(".infoClose-btn");

// Loop through each book in the data array
bookData.forEach(book => {
    const bookDiv = document.createElement("div"); // Create a container div for each book
    bookDiv.classList.add('book'); // Add a class for styling

    // Set the inner HTML of the book card
    bookDiv.innerHTML = `
        <img src="${book.image}" class="book-image">
        <div class="book-name">${book.name}</div>
        <button class="addBtn">Add</button>
        <button class="infoBtn">Info</button>
    `;

    // Add the book card to the correct genre section
    genres[book.genre].appendChild(bookDiv);

    // Get buttons from the created card
    const addButton = bookDiv.querySelector(".addBtn");
    const infoButton = bookDiv.querySelector(".infoBtn");

    // When "Add" button is clicked
    addButton.addEventListener("click", function () {
        // Create a unique ID for drag-and-drop
        const uniqueId = `${book.name.replace(/\s+/g, "-").toLowerCase()}-${Math.random().toString(36).substr(2, 5)}`;

        // Create container for the draggable book item
        const planToReadItem = document.createElement("div");
        planToReadItem.classList.add("planToReadItem");

        // Set the inner content for the draggable item
        planToReadItem.innerHTML = `
            <div class="planToReadItemContent" id="${uniqueId}" draggable="true">
                <img src="${book.image}" class="planToReadItemImage">
                <div>
                    <h4>${book.name}</h4>
                </div>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const draggableItem = planToReadItem.querySelector(".planToReadItemContent");

        // Make it draggable by setting dataTransfer ID
        draggableItem.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("text/plain", draggableItem.id);
        });

        // Append item to "Plan to Read" section
        document.getElementById("planToRead").appendChild(planToReadItem);

        // Disable the Add button and change its look/text
        planToReadCount++;
        addButton.disabled = true;
        addButton.classList.add("added-btn");
        addButton.textContent = "Added!";

        // Set up delete button to remove book from section
        const deleteButton = planToReadItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function () {
            if(confirm('Are you sure you want to remove this book?')){
                planToReadItem.remove(); // Remove from DOM
                planToReadCount--;
                addButton.disabled = false; // Re-enable Add button
                addButton.classList.remove("added-btn");
                addButton.textContent = "Add";
            }
        });
        saveData();
    });


    // When "Info" button is clicked, show modal with book details
    infoButton.addEventListener("click", function () {
        modalTitle.textContent = book.name;
        modalWriter.textContent = `By ${book.writer}`;
        modalYear.textContent = `Published: ${book.year}`;
        modalDescription.textContent = book.description || "No description available.";
        modal.style.display = "block"; // Show the modal
    });
});

// Close the modal when the close button is clicked
infoCloseBtn.onclick = () => modal.style.display = "none";

aboutCloseBtn.addEventListener('click', function () {
    aboutModal.style.display = 'none';
});

contactCloseBtn.addEventListener('click', function () {
    contactModal.style.display = 'none';
});



// Allow drop by preventing default behavior
function dragoverHandler(event) {
    event.preventDefault();
    saveData();
}

// Handle dropping the book into a section (e.g., Reading, On Hold)
function dropHandler(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain"); // Get dragged element's ID
    const draggable = document.getElementById(id); // Find the element by ID

    if (draggable) {
        event.currentTarget.appendChild(draggable.parentElement); // Move the whole book container
    }
    saveData();
}


function search(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchBox");
    filter = input.value.toUpperCase(); // <-- This is needed
    ul = document.getElementById("searchList");
    li = ul.getElementsByTagName("li");

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';
        } else {
            li[i].style.display = "none";
        }
    }
    
}

const searchList = document.getElementById("searchList");

bookData.forEach(book => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");

    anchor.href = `#${book.genre}`;
    anchor.textContent = book.name;

    li.appendChild(anchor);
    searchList.appendChild(li);
});


const searchBox = document.getElementById('searchBox');


// Show/hide list based on input
searchBox.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();
    if (query === "") {
        searchList.style.display = "none";
        return;
    }

    // Filter list items
    let hasVisibleItems = false;
    const items = searchList.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase();
        if (itemText.includes(query)) {
            items[i].style.display = "block";
            hasVisibleItems = true;
        } else {
            items[i].style.display = "none";
        }
    }

    searchList.style.display = hasVisibleItems ? "block" : "none";
});

// Hide list when clicking outside
document.addEventListener('click', function (event) {
    if (!searchBox.contains(event.target) && !searchList.contains(event.target)) {
        searchList.style.display = "none";
    }
});

// Optional: Show list again when focusing the box with input
searchBox.addEventListener('focus', function () {
    if (this.value.trim() !== "") {
        searchList.style.display = "block";
    }
});


// Scroll left function
function scrollContainerLeft(containerId) {
    console.log('Scrolling Left');
    var container = document.getElementById(containerId);
    if (container) {
        container.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    }
}

// Scroll right function
function scrollContainerRight(containerId) {
    console.log('Scrolling Right');
    var container = document.getElementById(containerId);
    if (container) {
        container.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    }
}


window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === aboutModal) {
        aboutModal.style.display = "none";
    } else if (event.target === contactModal) {
        contactModal.style.display = "none";
    }
};

let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let volume = document.getElementById('volume-slider');

song.loop = true;


function playPause(){
    if(ctrlIcon.classList.contains('fa-volume-xmark')){
        song.play();
        ctrlIcon.classList.add('fa-volume-high');
        ctrlIcon.classList.remove('fa-volume-xmark');

    }
    else{
        song.pause();
        ctrlIcon.classList.remove('fa-volume-high');
        ctrlIcon.classList.add('fa-volume-xmark');
    }
}

volume.addEventListener('input', function(){
    song.volume = volume.value;
});