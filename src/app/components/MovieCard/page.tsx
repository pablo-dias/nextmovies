interface MovieCardProps {
	movie: {
		title: string;
		overview: string;
		poster_path: string | null;
		release_date: string;
		popularity: number;
		vote_average: number;
	};
}

export default function MovieCard({ movie }: MovieCardProps) {
	function formatDate(date: string) {
		return date?.slice(0, 4);
	}

	function formatValue(value: string | number) {
		const number = typeof value === "string" ? parseFloat(value) : value;
		return isNaN(number) ? "N/A" : number.toFixed(2);
	}

	const imageUrl = movie.poster_path
		? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
		: "./img/noContent.png";

	return (
		<div className="perspective-[3000px] w-[230px] sm:w-[250px] md:w-[270px] lg:w-[280px]">
			<div className="relative w-full h-[420px] transition-transform duration-[800ms] ease-in-out [transform-style:preserve-3d] cursor-pointer hover:[transform:rotateY(180deg)]">
				<div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden shadow-lg border border-gray-600">
					<img
						src={imageUrl}
						alt={movie.title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute bottom-4 w-full text-center text-white font-bold px-3 [text-shadow:2px_2px_6px_rgba(0,0,0,0.6)]">
						<h2 className="text-base sm:text-lg bg-gray-500/40 rounded">{movie.title}</h2>
						<p className="text-sm text-blue-700 font-medium">{formatDate(movie.release_date)}</p>
					</div>
				</div>
				<div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl bg-[#1e272e] text-white flex justify-center items-center shadow-md">
					<div className="text-center px-4 max-w-[90%]">
						<h3 className="text-xl font-bold mb-2">{movie.title}</h3>
							<p className="text-sm text-gray-300 leading-snug line-clamp-6 mb-2"> Descrição: {movie.overview}</p>
						<p className="text-sm text-gray-400"> Popularidade: ❤️ {formatValue(movie.popularity)}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
