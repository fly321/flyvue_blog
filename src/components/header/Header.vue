<template>
  <div class="header">
    <div class="header__logo__text">
      {{ LogoText}}
    </div>
    <div class="header__nav">
      <ul>
        <li v-for="_menu in MenuList"><a :href="_menu.path">{{_menu.name}}</a></li>
      </ul>
      <div class="burger" @click="openMenu">
        <div class="top-line"></div>
        <div class="middle-line"></div>
        <div class="boot-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
  data() {
    return {
      LogoText: "Fly`Blog",
      MenuList: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "分类1",
          path: "/about",
        },
        {
          name: "分类2",
          path: "/contact",
        },
      ],
      menuExisted: false,
    };
  },
  methods: {
    openMenu(){
      this.menuExisted = !this.menuExisted;
      if (this.menuExisted) {
        document.querySelector(".burger div:nth-child(1)").style.transform = "translate(4px, 6px) rotate(45deg)";
        document.querySelector(".burger div:nth-child(2)").style.opacity = "0";
        document.querySelector(".burger div:nth-child(2)").style.transform = "translateX(10px)";
        document.querySelector(".burger div:nth-child(3)").style.transform = "translate(4px, -6px) rotate(-45deg)";
        document.querySelector(".header__nav ul").style.animation = "slideIn 0.5s ease-in-out forwards";
      } else {
        document.querySelector(".burger div:nth-child(1)").style.transform = "translate(0, 0) rotate(0)";
        document.querySelector(".burger div:nth-child(2)").style.opacity = "1";
        document.querySelector(".burger div:nth-child(2)").style.transform = "translateX(0)";
        document.querySelector(".burger div:nth-child(3)").style.transform = "translate(0, 0) rotate(0)";
        document.querySelector(".header__nav ul").style.transform = "translateX(-50vw)";
        document.querySelector(".header__nav ul").style.animation = "";
        document.querySelector(".header__nav ul").style.animation = "slideOut 0.5s ease-in-out forwards";
      }
    }
  },
}
</script>
<style>
@import "../../assets/animation/slide.scss";
</style>
<style scoped lang="scss">
@import "../../assets/header/main.scss";
</style>