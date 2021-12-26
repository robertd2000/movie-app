export class Api {
    static async getMovieList(title: string, page: number = 1) {
        const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=4a3b711b&page=${page}`)
        return response.json()
    }
}