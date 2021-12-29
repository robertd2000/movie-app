export class Api {
    static url = 'https://www.omdbapi.com/'
    static apiKey = '4a3b711b'
    static async getMovieList(title: string, page: number = 1) {
        try {
            const response = await fetch(`${this.url}?s=${title}&apikey=${this.apiKey}&page=${page}`)
            return response.json()
        } catch (error) {
            throw new Error('Somethin went wrong!')
        }
    }

    static async getMovie(id: string) {
        try {
            const response = await fetch(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`)
            return response.json()
        } catch (error) {
            throw new Error('Somethin went wrong!')
        }
    }
}