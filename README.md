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

 {
    "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
    "adult": false,
    "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    "release_date": "2016-08-03",
    "genre_ids": [
    14,
    28,
    80
    ],
    "id": 297761,
    "original_title": "Suicide Squad",
    "original_language": "en",
    "title": "Suicide Squad",
    "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
    "popularity": 48.261451,
    "vote_count": 1466,
    "video": false,
    "vote_average": 5.91
},

```

### GET POPULAR (/movie/popular)
```
https://api.themoviedb.org/3/movie/popular?api_key=45bbe4d969c51afc4c44a7b6d95526dd&language=ko&page=1

 {
      "adult": false,
      "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 505642,
      "original_language": "en",
      "original_title": "Black Panther: Wakanda Forever",
      "overview": "국왕이자 블랙 팬서인 티찰라의 죽음 이후 수많은 강대국으로부터 위협을 받게 된 와칸다. 라몬다, 슈리 그리고 나키아, 오코예, 음바쿠는 각자 사명감을 갖고 와칸다를 지키기 위해 외로운 싸움을 이어간다. 한편, 비브라늄의 패권을 둘러싼 미스터리한 음모와 함께 깊은 해저에서 모습을 드러낸 최강의 적 네이머와 탈로칸의 전사들은 와칸다를 향해 무차별 공격을 퍼붓기 시작하는데…",
      "popularity": 5334.97,
      "poster_path": "/3PCRWLeqp5y20k6XVzcamZR3BWF.jpg",
      "release_date": "2022-11-09",
      "title": "블랙 팬서: 와칸다 포에버",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 3298
    },
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