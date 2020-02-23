import { IPuzzle } from "../../interfaces/puzzle";
// import { IPuzzle } from "./techgames-landing-api/src/interfaces/puzzle";

export const samplePuzzles: IPuzzle[] = [
    {
        title: "10",
        description: "What character is always looking for directions?",
        answer: "Ugandan Knuckles",
        next: []
    },
    {
        title: "9",
        description: "Name the WOW player who will ruin your raid by running in too early",
        answer: "Leeroy Jenkins",
        next: []
    },
    {
        title: "8",
        description: "Here in my _",
        answer: "Garage",
        next: []
    },
    {
        title: "7",
        description: "What is Lightning McQueen",
        answer: "Speed",
        next: []
    },

    {
        title: "6",
        description: "It’s not much",
        answer: "But it’s honest work",
        next: ["10"]
    },
    {
        title: "5",
        description: "¿ɯoɹɟ ǝɯoɔ uoᴉʇsǝnb sᴉɥʇ pᴉp ʎɹʇunoɔ ʇɐɥM",
        answer: "Australia",
        next: ["9"]
    },
    {
        title: "4",
        description: "Ok",
        answer: "Boomer",
        next: ["8"]
    },
    {
        title: "3",
        description: "What almost got stormed in 2019?",
        answer: "Area 51",
        next: ["6", "7"]
    },
    {
        title: "2",
        description: "wHaT ShOw iS tHiS fRoM?",
        answer: "Spongebob",
        next: ["4", "5"]
    },
    {
        title: "1",
        description: "Pay your respects",
        answer: "F",
        next: ["2", "3"]
    },
    {
        title: "20",
        description: "What substance is banned on McGill campus?",
        answer: "Samosas",
        next: []
    },
    {
        title: "19",
        description: "What place did McGill come in globally during the 2019 IEEE extreme challenge?",
        answer: "18th",
        next: []
    },
    {
        title: "18",
        description: "What architectural style does McGill’s McLennan library exemplify?",
        answer: "Brutalist",
        next: []
    },
    {
        title: "17",
        description: "Which sport was invented by a McGill alumni?",
        answer: "Basketball",
        next: []
    },
    {
        title: "16",
        description: "Which controversial CIA experiment was conducted on McGill campus?",
        answer: "MKULTRA",
        next: ["20"]
    },
    {
        title: "15",
        description: "Which McGill professor contributed to the discovery of quantum teleportation?",
        answer: "Claude Crepeau",
        next: ["19"]
    },
    {
        title: "14",
        description: "Which steve carell movie was filmed in part on McGill campus?",
        answer: "Get smart",
        next: ["18"]
    },
    {
        title: "13",
        description: "What is the largest skeleton on display in the redpath museum?",
        answer: "T-rex",
        next: ["16", "17"]
    },
    {
        title: "12",
        description: "What McGill building is named after the largest donation to a university in Canadian history?",
        answer: "The McCall MacBain Arts Building",
        next: ["14", "15"]
    },
    {
        title: "11",
        description: "What is the largest lecture room at McGill?",
        answer: "Leacock 132",
        next: ["12", "13"]
    },
    {
        title: "29",
        description: "I am who you see when you are offline. I have one life and I jump and duck to preserve it. What animal am I?",
        answer: "Dinosaur",
        next: []
    },
    {
        title: "28",
        description: "I was your cubic friend but you betrayed me and tossed me in a fire. Who am I?",
        answer: "Companion cube",
        next: []
    },
    {
        title: "27",
        description: "In rocket league, how many small booster pads does it take to have full boost?",
        answer: "9",
        next: []
    },
    {
        title: "26",
        description: "In Dota 2, what food item accompanies immortality after it’s second dop?",
        answer: "Cheese",
        next: []
    },
    {
        title: "25",
        description: "What type of animal is Sonics red companion?",
        answer: "Echidna",
        next: ["29"]
    },
    {
        title: "24",
        description: "Name the iconic video game character that can inhale his enemies.",
        answer: "Kirby",
        next: ["28"]
    },
    {
        title: "23",
        description: "What does Isaac use to initially defend himself from enemies?",
        answer: "Tears",
        next: ["26", "27"]
    },
    {
        title: "22",
        description: "In which game is a vertical line often the most coveted item?",
        answer: "Tetris",
        next: ["24", "25"]
    },
    {
        title: "21",
        description: "What is the most notorious wall in terraria made of?",
        answer: "Flesh",
        next: ["22", "23"]
    },
    {
        title: "39",
        description: "When was the dawn of time? Format: DD/MM/YYYY",
        answer: "01/01/1970",
        next: []
    },
    {
        title: "38",
        description: "Name the challenge that no AI has been able to beat (officially)?",
        answer: "Turing test",
        next: []
    },
    {
        title: "37",
        description: "Which system of mathematical logic acted as the foundation for functional programming?",
        answer: "Lambda Calculus",
        next: []
    },
    {
        title: "36",
        description: "What was the first full length computer generated feature film?",
        answer: "Toy story",
        next: []
    },
    {
        title: "35",
        description: "Which OS to most modern supercomputers use?",
        answer: "Linux",
        next: ["39"]
    },
    {
        title: "34",
        description: "What popular programming language was named after a British comedy group?",
        answer: "Python",
        next: ["38"]
    },
    {
        title: "33",
        description: "What’s the most used phrase by beginners in computer science?",
        answer: "Hello World",
        next: ["37"]
    },
    {
        title: "32",
        description: "Name the project that acted as the precursor to the Internet.",
        answer: "NSFNET",
        next: ["35", "36"]
    },
    {
        title: "31",
        description: "What basic components were first generation computers using?",
        answer: "Vacuum tubes",
        next: ["33", "34"]
    },
    {
        title: "30",
        description: "What french mathematician is credited with creating the first computer?",
        answer: "Blaise Pascal",
        next: ["31", "32"]
    },
    {
        title: "47",
        description: "What is the running time of the traveling salesman problem?",
        answer: "O(n!)",
        next: []
    },
    {
        title: "46",
        description: "What is the running time of a recursive fibonacci program?",
        answer: "O(2^n)",
        next: []
    },
    {
        title: "45",
        description: "Which of these is the worst case time complexity for finding the largest element in a max-heap?",
        answer: "O(n)",
        next: []
    },
    {
        title: "44",
        description: "If a binary search tree is not balanced, how long might it take (worst case) to find an element in it?",
        answer: "O(n)",
        next: []
    },
    {
        title: "43",
        description: "What is the cost of rebalancing a AVL tree?",
        answer: "O(log(n))",
        next: ["47"]
    },
    {
        title: "42",
        description: "What is the worst case time complexity of merge sort?",
        answer: "O(nlog(n))",
        next: ["45", "46"]
    },
    {
        title: "41",
        description: "What is the time complexity of inserting a node at the end of a linked list?",
        answer: "O(n)",
        next: ["43", "44"]
    },
    {
        title: "40",
        description: "Which of these is the worst case time complexity of the Binary Search algorithm on a sorted array?",
        answer: "O(n)",
        next: ["41", "42"]
    },
    {
        title: "57",
        description: "Name the villain would make a great gymnast?",
        answer: "Thanos",
        next: []
    },
    {
        title: "56",
        description: "Which country’s revolution uses an umbrella as a symbol?",
        answer: "Hong Kong",
        next: []
    },
    {
        title: "55",
        description: "Which artist references his mom’s pasta dishes the most in his music?",
        answer: "Eminem",
        next: []
    },
    {
        title: "54",
        description: "If the internet was a newspaper, what website considers itself to be the front page?",
        answer: "Reddit",
        next: []
    },
    {
        title: "53",
        description: "Which tech mogul is often compared to a robot?",
        answer: "Mark Zuckerberg",
        next: ["57"]
    },
    {
        title: "52",
        description: "What basketball player can be attributed with carrying a Canadian team to their most recent and only NBA title?",
        answer: "Kawhi Leonard",
        next: ["56"]
    },
    {
        title: "51",
        description: "Name award does Michael Scott give his employees every year?",
        answer: "Dundie",
        next: ["55"]
    },
    {
        title: "50",
        description: "I’M ______ RIIIICK!!",
        answer: "Pickle",
        next: ["53", "54"]
    },
    {
        title: "49",
        description: "Name the show with the worst ending in recent history.",
        answer: "Game of Thrones",
        next: ["51", "52"]
    },
    {
        title: "48",
        description: "Which country did the most decorated film of the 2020 Oscars come from?",
        answer: "South Korea",
        next: ["49", "50"]
    },
    {
        title: "67",
        description: "Which university has won the ICPC the most times since 2000?",
        answer: "Saint Petersburg State University of Information Technologies, Mechanics and Optics",
        next: []
    },
    {
        title: "66",
        description: "How many teams competed in 2019 ACM ICPC regional competition hosted at McGill University?",
        answer: "4",
        next: []
    },
    {
        title: "65",
        description: "What was the name of problem C in the 2011 ICPC finals?",
        answer: "Ancient Messages",
        next: []
    },
    {
        title: "64",
        description: "Which university hosted the 2019 ICPC?",
        answer: "University of Porto",
        next: []
    },
    {
        title: "63",
        description: "2020 is the year of the _th annual ICPC",
        answer: "44",
        next: ["67"]
    },
    {
        title: "62",
        description: "What is the minimum and maximum number of problems given per contest? Format: (xxx,yyy)",
        answer: "(8,15)",
        next: ["66"]
    },
    {
        title: "61",
        description: "Until 2017, who was the primary sponsor of ICPC?",
        answer: "IBM",
        next: ["65"]
    },
    {
        title: "60",
        description: "What is the name of the computer science society attributed with founding the ICPC?",
        answer: "Upsilon Pi Epsilon",
        next: ["63", "64"]
    },
    {
        title: "59",
        description: "How many students can participate on any given team in the ICPC?",
        answer: "3",
        next: ["61", "62"]
    },
    {
        title: "58",
        description: "Where is the ICPC headquartered?",
        answer: "Baylor University",
        next: ["59", "60"]
    },
    {
        title: "0",
        description: "Submit 'Heck Yeah!' if you're excited to get started!",
        answer: "Heck Yeah!",
        next: ["1", "11", "21", "30", "40", "48", "58"]
    },

]
