<template>
  <div class="my-page-home-welcome">
    <el-row :gutter="20" style="margin-top: -10rem">
      <el-col :span="24">
        <h1>WELCOME</h1>
      </el-col>
      <el-col :span="24">
        <h1>SHAKIN' COCKTAILS</h1>
      </el-col>
    </el-row>

    <div class="my-page-home-welcome-slide-down" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.my-page-home-welcome {
  align-items: center;
  background: url("~/assets/images/background-white.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 90vh;
  position: relative;

  // cover mask
  &::before {
    background-color: rgba($main-color-1, 0.7);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  h1 {
    color: #fff;
    font-family: "Gill Sans";
    font-size: 3rem;
    margin: 0;
    text-align: center;

    @media only screen and (min-width: 1600px) {
      font-size: 5rem;
    }
  }

  &-slide-down {
    position: absolute;
    bottom: 4vh;
    left: 50%;
    transform: translate(-50%);
    border-left: 3rem solid transparent;
    border-right: 3rem solid transparent;
    border-top: 1.5rem solid rgba($main-color-2, 0.6);
    animation: slide-down-animation 5s infinite;
  }

  @keyframes slide-down-animation {
    0% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 50%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
}
</style>
