import * as S from './styles'

const BestOfTheWeek = ({ posts }) => {
  const chunkedPosts = []
  let index = 0

  while (index < posts.length) {
    chunkedPosts.push(posts.slice(index, 2 + index))
    index += 2
  }

  const mostLikedPosts = []

  chunkedPosts.forEach((post) => {
    const obj = post.map(
      ({
        node: {
          edge_media_preview_like,
          edge_media_to_comment,
          taken_at_timestamp,
          thumbnail_src,
          shortcode,
          id
        }
      }) => {
        return {
          likes: edge_media_preview_like.count,
          comments: edge_media_to_comment.count,
          timestamp: taken_at_timestamp,
          thumbnail: thumbnail_src,
          shortcode,
          id
        }
      }
    )

    if (obj[0].id && obj[1].id) {
      if (obj[0].likes === obj[1].likes) {
        if (obj[0].comments === obj[1].comments) {
          mostLikedPosts.push(obj[0])
        } else {
          if (obj[0].comments > obj[1].comments) {
            mostLikedPosts.push(obj[0])
          } else {
            mostLikedPosts.push(obj[1])
          }
        }
      } else {
        if (obj[0].likes > obj[1].likes) {
          mostLikedPosts.push(obj[0])
        } else {
          mostLikedPosts.push(obj[1])
        }
      }
    }
  })

  console.log(mostLikedPosts)
  const getWeekDayPost = (index) => {
    const mostLikedPostsReversed = mostLikedPosts.reverse()

    return (
      mostLikedPostsReversed[index] || {
        likes: null,
        thumbnail: 'https://via.placeholder.com/150',
        shortcode: ''
      }
    )
  }

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return (
    <S.Wrapper>
      <h1>Best of the week</h1>

      {posts && (
        <S.Ul>
          {weekdays.map((day, index) => {
            const { shortcode, thumbnail, likes } = getWeekDayPost(index)

            console.log(getWeekDayPost(index))

            return (
              <S.Li key={index}>
                <small>{day}</small>
                {likes ? <p>{likes}</p> : <p>Coming soon</p>}

                <a
                  href={`https://www.instagram.com/p/${shortcode}`}
                  target="blank"
                  aria-label={`Open ${day}'s tattoo on Instagram`}
                >
                  <S.Img src={thumbnail} alt={`Image of ${day}'s tattoo`} />
                </a>
              </S.Li>
            )
          })}
        </S.Ul>
      )}
    </S.Wrapper>
  )
}

export default BestOfTheWeek
