# JUNFLIX

### MOVIE API 
- 45bbe4d969c51afc4c44a7b6d95526dd


## DTO

### NOW_PLAYING (/movie/now_playing)
```
// https://api.themoviedb.org/3/movie/now_playing?api_key=45bbe4d969c51afc4c44a7b6d95526dd&language=ko&page=1

- id: number 키 값
- title: string 제목
- overview: string 설명
- poster_path: string 포스터주소
- release_date: string 개봉일자
- popularity: number 인기도
- vote_count: number 투표수
- vote_average: number 투표평균

```

### GET LATEST (/movie/latest)
```
https://api.themoviedb.org/3/movie/latest?api_key=45bbe4d969c51afc4c44a7b6d95526dd&language=ko

- id: number 키 값
- poster_path: string 포스터주소
- status: string 상태
- title: string 제목
- tagline: string 태그
- popularity: number 인기도
- vote_count: number투표수
- vote_average: number 투표평균
```

### GET UPCOMING (/movie/upcoming)
```
https://api.themoviedb.org/3/movie/upcoming?api_key=45bbe4d969c51afc4c44a7b6d95526dd&language=ko&page=1

- id: number 키 값
- title: string 제목
- overview: string 설명
- poster_path: string 포스터주소
- release_date: string 개봉일자
- popularity: number 인기도
- vote_count: number 투표수
- vote_average: number  투표평균

```

### GET DETAILS (/movie/{movie_id})
```
https://api.themoviedb.org/3/movie/505642?api_key=45bbe4d969c51afc4c44a7b6d95526dd&language=ko

- status: string 상태
- poster_path: string 포스터 주소
- title: string 제목
- runtime: number 러닝타임
- tagline: string 태그
- genres: [{id:string, name: string}] 장르
- popularity: number 인기도
- vote_count: number 투표수
- vote_average: number 투표평균
```

### Get Videos (/movie/{movie_id}/videos)
```
https://api.themoviedb.org/3/movie/505642/videos?api_key=45bbe4d969c51afc4c44a7b6d95526dd&language=ko

- name: string 제목
- key: string 키
- id: string ID
- published_at: string 개시 일자

```
### Rate Movie (/movie/{movie_id}/rating)
```
https://api.themoviedb.org/3/movie/505642/rating?api_key=45bbe4d969c51afc4c44a7b6d95526dd

Request Body application/json
{
  "value": 8.5
}

This is the value of the rating you want to submit. The value is expected to be between 0.5 and 10.0.

```