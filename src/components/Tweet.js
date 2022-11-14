import ProfileImage from "./ProfileImage";

function Tweet({tweet}) {

 console.log(tweet)


  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name"></span>
            <span className="handle">@</span>
          </span>

          <span className="timestamp"></span>
        </div>

        <p className="message">
          
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
