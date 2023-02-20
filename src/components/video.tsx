import { useEffect, useState } from "react";
import { IMovie } from "../interface/apidata.interface";

const Video = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState<IMovie | null>(null);
  const [popularMovie, setPopularMovie] = useState<IMovie | null>(null);
  const [upcomingMovie, setUpcomingMovie] = useState<IMovie | null>(null);

  const apiGet = async (param: string) => {
    const apiUrl: string = `${process.env.REACT_APP_API_URL}${param}?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1`;
    return await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp: Response) => resp.json());
  };

  const getNowPlayMovies = () => {
    apiGet("/now_playing").then((res: IMovie) => {
      const typedResp: IMovie = { ...res };
      console.log("now_playing :: ", typedResp);
    });
  };

  const getPopularMovies = () => {
    apiGet("/popular").then((res: IMovie) => {
      const typedResp: IMovie = { ...res };
      console.log("popular :: ", typedResp);
    });
  };
  const getUpcomingMovies = () => {
    apiGet("/upcoming").then((res: IMovie) => {
      const typedResp: IMovie = { ...res };
      console.log("upcoming :: ", typedResp);
    });
  };

  useEffect(() => {
    getNowPlayMovies();
    getPopularMovies();
    getUpcomingMovies();
  }, []);

  return (
    <div className="listArea">
      <ul className="listView"></ul>
    </div>
  );
};

export default Video;
