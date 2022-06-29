export interface APIResponse<T> {
  results: Array<T>;
}


export interface Movie {
  result: Movie | undefined;
  image: string;
  title: string;
  description: string;
  year: number;
  genres: Array<Genre>;
  _id: string;
  release: string;
  rating:string;
}

  
interface Genre {
  name: string;
}