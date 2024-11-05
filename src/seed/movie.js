import Movie from "../models/Movie.js";
import seed from "../utils/seed.js";

const movies = [
    {
        name: "Pushpa: The Rule - Part 2",
        description: "The clash is on as Pushpa and Bhanwar Singh continue their rivalry in this epic conclusion to the two-parted action drama."
    },
    {
        name: "Kanguva",
        description: "A story that travels 500 years from the 1700's to 2023 about a Hero who has to fulfil a mission left unfinished."
    },
    {
        name: "Hrashwo Deergha",
        description: "Hrashwo Deergha is an action-comedy directed by Chandra Pant, starring Neeta Dhungana, Harihar Adhikari, Bipana Thapa, Brahmanandam, Pradeep Singh Rawat, and Mohammad Ali."
    },
    {
        name: "Missing: Keti Harayeko Suchana",
        description: "When a Madhesi young man accidentally kidnaps a Pahadi woman and takes her to his home village in Janakpur, they get to know each other in ways they would never have otherwise. The film explores an unlikely Pahadi-Madhesi match-up, set against the backdrop of tenuous Pahadi-Madhesi relations and the beauty and culture of the Terai region."
    },
    {
        name: "Tel Visa",
        description: "In Tel Visa Radha, a mother from Nepal, travels to America to help her son Gaurab and pregnant daughter-in-law Bandana. While adjusting to a new culture, Radha’s traditional Nepali parenting style leads to unexpected legal trouble. With the help of Bandana’s lawyer sister, the cultural misunderstandings are resolved. Directed by Shankar Ghimire, Tel Visa highlights family, culture, and the immigrant experience."
    },
];
seed(Movie, movies);