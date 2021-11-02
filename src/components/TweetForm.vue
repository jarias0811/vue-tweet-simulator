<template>
  <div class="tweet-form container" :class="{ open: showForm }">
    <form @submit.prevent="sendTweet">
      <input class="form-control" placeholder="Your name" v-model="username"/>
      <textarea class="form-control"
                rows="3"
                placeholder="Write your tweet"
                v-model="tweet"></textarea>
      <button type="submit" class="btn btn-primary">Send Tweet</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { sendTweet as sendTweetApi } from '@/services/tweet.service';

export default {
  name: 'TweetForm',
  props: {
    showForm: Boolean,
    reloadTweets: Function,
    toggleForm: Function,
  },
  setup(props) {
    const username = ref('');
    const tweet = ref('');

    const resetForm = () => {
      username.value = '';
      tweet.value = '';
    };

    const sendTweet = () => {
      if (!tweet.value || !username.value) return;

      sendTweetApi(tweet.value, username.value);
      resetForm();
      props.toggleForm();
      props.reloadTweets();
    };

    return {
      sendTweet,
      tweet,
      username,
    };
  },
};
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
