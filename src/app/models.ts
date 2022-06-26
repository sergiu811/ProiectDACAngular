export interface APIResponse<T> {
    results: Array<T>;
}

  export interface Movie {
    image: string;
    title: string;
    description: string;
    year: number;
    genres: Array<Genre>;
  }

    
  interface Genre {
    name: string;
  }