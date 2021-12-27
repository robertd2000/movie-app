export interface movieType {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface movieDetailsType {
    Title: string
    Year: string
    Rated: string
    Realeased: string
    Runtime: string
    Genre: string
    Director: string
    Actors: string
    Plot: string
    Country: string
    Awards: string
    Poster: string
    Metascore: string
    imdbRating: string
    BoxOffice: string
    Ratings: RatingType[]
}


interface RatingType {
    Source: string
    Value: string
}