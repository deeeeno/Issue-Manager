
export const resolvers = {
    Query:{
        movies:(_,{limit,rate})=>getMovies(limit,rate),
        movie:(_,{id})=>getMovieById(id),
        suggestions:(_,{id})=>getSuggestionsById(id),
    },
}