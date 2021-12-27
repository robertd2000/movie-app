export class Api {
    static url = 'https://www.omdbapi.com/'
    static apiKey = '4a3b711b'
    static async getMovieList(title: string, page: number = 1) {
        const response = await fetch(`${this.url}?s=${title}&apikey=${this.apiKey}&page=${page}`)
        return response.json()
    }

    static async getMovie(id: string) {
        const response = await fetch(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`)
        return response.json()
    }
}