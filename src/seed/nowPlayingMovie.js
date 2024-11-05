import NowPlayingMovie from "../models/NowPlayingMovie.js";
import seed from "../utils/seed.js";

const nowPlayingMovies = [
    {
        cinema: "6728d5f677857b5371984471",
        movie: "67297133cab55d3b5fdc3ec1",
        date: "6729f7dd2795f271ba90a90c",
        time: "672a39f7e6db80607cddbad6"
    },
    {
        cinema: "6728d5f677857b5371984472",
        movie: "67297133cab55d3b5fdc3ec1",
        date: "6729f7dd2795f271ba90a90c",
        time: "672a39f7e6db80607cddbad8"
    },
    {
        cinema: "6728d5f677857b5371984473",
        movie: "67297133cab55d3b5fdc3ec1",
        date: "6729f7dd2795f271ba90a90c",
        time: "672a39f7e6db80607cddbada"
    },
    {
        cinema: "6728d5f677857b5371984471",
        movie: "67297133cab55d3b5fdc3ec2",
        date: "6729f7dd2795f271ba90a90c",
        time: "672a39f7e6db80607cddbad6"
    },
    {
        cinema: "6728d5f677857b5371984472",
        movie: "67297133cab55d3b5fdc3ec2",
        date: "6729f7dd2795f271ba90a90c",
        time: "672a39f7e6db80607cddbad8"
    },
    {
        cinema: "6728d5f677857b5371984473",
        movie: "67297133cab55d3b5fdc3ec2",
        date: "6729f7dd2795f271ba90a90c",
        time: "672a39f7e6db80607cddbada"
    },
]

seed(NowPlayingMovie, nowPlayingMovies);