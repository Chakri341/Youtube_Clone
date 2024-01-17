
export const YOUR_API_KEY =process.env.REACT_APP_YOUR_API_KEY;

// "YouTube Data API v3 has not been used in project 1022037951907 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=1022037951907 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."

export const youtube_search_api="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const offset_livechat=10;



export const youtube_video_api="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ YOUR_API_KEY;