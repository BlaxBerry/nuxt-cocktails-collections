<template>
  <div class="my-page-home-about">
    <el-main style="overflow-y: hidden">
      <!-- title -->
      <CommonTitle>About</CommonTitle>
    </el-main>
    <el-row
      :justify="'center'"
      :align="'middle'"
      style="min-height: 50vh; width: 100%"
      class="my-page-home-about-content"
    >
      <el-col :xs="24" :md="8" class="left">
        <h1>NONPROFIT WEBSITE</h1>
      </el-col>
      <el-col :xs="24" :md="16" class="right">
        <h1>
          Many developers have since contributed to the DB of this project,
          which was built in 2015 and originated on the Kodi forums, as a way to
          browse cocktail recipes on your TV.
        </h1>
        <h1>
          It's also used by universities to tech web design and programming.
        </h1>
        <h1>
          If you claim copyright on any images on the site please send us an
          email and valid requests will remove within 48hrs. Alternatively we
          are happy to credit and link images if prefered.
        </h1>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.my-page-home-about {
  $triangle-height: 20vh;

  min-height: 50vh;
  padding: $triangle-height 0 calc($triangle-height / 2);
  position: relative;

  // triangle
  &::before {
    border-left: 50vw solid $main-color-2;
    border-right: 50vw solid $main-color-2;
    border-top: $triangle-height solid transparent;
    content: "";
    display: block;
    left: 0;
    margin-top: 1px;
    position: absolute;
    right: 0;
    top: -$triangle-height;
    z-index: 2;
  }

  @media only screen and (max-width: 750px) {
    &::before {
      border-top: calc($triangle-height / 2) solid transparent;
      margin-top: 1px;
      top: -(calc($triangle-height / 2));
    }
  }

  @media only screen and (max-width: $screen-min-width) {
    &::before {
      display: none;
    }
  }
}

.my-page-home-about-content {
  background: url("~/assets/images/background-wave.svg") center top;
  background-size: cover;
  padding: 0 10%;

  .left {
    // font-size: 1.5rem;
    text-align: center;
  }
}

.theme-dark .my-page-home-about::before {
  border-left-color: $theme-color-1;
  border-right-color: $theme-color-1;
}

.theme-light .my-page-home-about::before {
  border-left-color: $theme-color-2;
  border-right-color: $theme-color-2;
}
</style>
