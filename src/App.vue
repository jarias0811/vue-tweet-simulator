<template>
  <Menu :toggleForm="toggleForm" :showForm="showForm"/>
  <TweetForm :showForm="showForm" :reloadTweets="reloadTweets" :toggleForm="toggleForm"></TweetForm>
  <TweetList :tweets="tweets" :reloadTweets="reloadTweets"/>
</template>

<script lang="ts">
import { ref } from 'vue';
import Menu from '@/components/Menu.vue';
import TweetForm from '@/components/TweetForm.vue';
import useFormTweet from '@/hooks/useFormTweet.hook';
import TweetList from '@/components/TweetList.vue';
import { getTweets } from '@/services/tweet.service';

export default {
  components: {
    TweetForm,
    Menu,
    TweetList,
  },
  setup() {
    const tweets = ref(getTweets());

    const reloadTweets = () => {
      tweets.value = getTweets();
    };

    return {
      ...useFormTweet(),
      tweets,
      reloadTweets,
    };
  },
};
</script>

<style lang="scss">
</style>
