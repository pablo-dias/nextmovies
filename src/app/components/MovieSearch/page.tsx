"use client";

import { useState } from "react";
import axiosConfig from "@/utils/axiosConfig";
import MovieCard from "../MovieCard/page";

export default function MovieSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query) return;

        setLoading(true);
        setHasSearched(true);
        try {
            const res = await axiosConfig.get("/search/multi", {
                params: { query, language: "pt-BR", page: 1 },
            });
            setResults(res.data.results || []);
        } catch (error) {
            console.error("TMDB fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 sm:gap-3 items-center justify-center mb-10">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Pesquisar por nome de filme ou série..."
                    className="w-full sm:w-[400px] px-4 py-3 bg-gray-500 rounded-lg text-white text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow-md transition-colors duration-200"
                >
                    Buscar
                </button>
            </form>

            {loading ? (
                <p className="text-center text-gray-300 text-lg">Carregando...</p>
            ) : hasSearched && results.length === 0 ? (
                <p className="text-center text-gray-400 text-sm mb-10">
                    No results found for <span className="font-semibold">"{query}"</span>
                </p>
            ) : !hasSearched ? (
                <div className="bg-gray-500/60 w-full h-[500px] rounded-lg flex items-center justify-center">
                    <p className="text-4xl font-extrabold">Pesquise por filme ou série! 🔎</p>
                </div>
            ) : (
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {results.map((movie: any) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </>
    );
}
