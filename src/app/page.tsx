import { Metadata } from "next";
import MovieSearch from "./components/MovieSearch/MovieSearch";

export const metadata: Metadata = {
	title: "Next Movies",
	description: "Relembre filmes ou séries que marcaram sua vida!"
}

export default function Home() {
	return (
		<div className="min-h-screen bg-[url('/img/cinema.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center text-white px-4 sm:px-8 py-10">
			<div className="max-w-5xl w-800">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
					🎬 Next Movies 🍿
				</h1>

				<p className=" text-center text-gray-300 mb-10 text-lg">Relembre filmes ou séries que marcaram sua vida!</p>
				<MovieSearch />
			</div>
		</div>

	);
}
