import { remove } from 'lodash';
import { v4 as uuidV4 } from 'uuid';
import { TWEETS } from '@/utils/constants';
import { Tweet } from '@/models/tweet.model';

export function getTweets(): Tweet[] {
  const tweets = localStorage.getItem(TWEETS);
  return tweets ? JSON.parse(tweets) : [];
}

export function sendTweet(tweetText: string, username: string): void {
  const tweets = getTweets();

  const tweet: Tweet = {
    id: uuidV4(),
    username,
    tweet: tweetText,
    createdAt: new Date().toString(),
  };

  tweets.unshift(tweet);

  localStorage.setItem(TWEETS, JSON.stringify(tweets));
}

export function deleteTweet(tweedId: string): void {
  const tweets = getTweets();

  remove(tweets, (tweet) => tweet.id === tweedId);

  localStorage.setItem(TWEETS, JSON.stringify(tweets));
}
