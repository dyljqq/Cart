
const prefix = 'https://api.douban.com/v2/'

// book_search: 'https://api.douban.com/v2/book/search',
// //图书详情
// book_search_id: 'https://api.douban.com/v2/book/',
// //音乐搜索
// music_search: 'https://api.douban.com/v2/music/search',
// //音乐详情
// music_search_id: 'https://api.douban.com/v2/music/',
// //电影搜索
// movie_search: 'https://api.douban.com/v2/movie/search',
// //电影详情
// movie_search_id: 'https://api.douban.com/v2/movie/subject/'
export default {
  book: {
    search: prefix + 'book/search',
    search_id: prefix + 'book'
  },
  music: {
    search: prefix + 'music/search',
    search_id: prefix + 'music/'
  },
  movie: {
    search: prefix + 'movie/search',
    search_id: prefix + 'movie/subject/'
  }
}
