<template>
  <div class="container">
    <h1 class="text-center mb-4">Tweet List</h1>
    <p v-if="!tweets.length">There are no tweets</p>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <p class="tweet__title">{{ tweet.username }}</p>
      <p class="tweet__text">{{ tweet.tweet }}</p>
      <span>{{ formatDate(tweet.createdAt) }}</span>
      <Close @click="deleteSelectedTweet(tweet.id)"/>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import Close from '@/assets/icons/close';
import { deleteTweet } from '@/services/tweet.service';

export default {
  name: 'TweetList',
  props: {
    tweets: Array,
    reloadTweets: Function,
  },
  components: {
    Close,
  },
  setup(props) {
    const formatDate = (date) => moment(date)
      .fromNow();

    const deleteSelectedTweet = (tweetId) => {
      deleteTweet(tweetId);
      props.reloadTweets();
    };

    return {
      formatDate,
      deleteSelectedTweet,
    };
  },
};
</script>

<style lang="scss">
.tweet {
  position: relative;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  span {
    position: absolute;
    right: 10px;
    font-size: 12px;
    color: grey;
    background-color: white;
    padding: 0 20px;
    bottom: -9px;
    border: 1px solid #ccc;
  }

  &__title {
    position: absolute;
    top: -12px;
    left: 10px;
    background-color: white;
    font-weight: bold;
  }

  &__text {
    color: grey;
  }

  svg {
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
      color: red;
    }
  }
}
</style>
