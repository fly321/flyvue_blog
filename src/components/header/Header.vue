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
  $fontWhiteColor: #ffffff90;
  .burger{
    display: none;
  }
  .burger div{
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 3px;
  }

  .header{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    .header__logo__text{
      font-size: 30px;
      font-weight: bold;
      color: $fontWhiteColor;
      flex: 1;
    }
    .header__nav{
      display: flex;
      width: 300px;
      flex: 2;
      ul{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        li{
          list-style: none;
          margin-left: 20px;
          a{
            color: $fontWhiteColor;
            text-decoration: none;
            &:hover{
              color: #fff;
            }
          }
        }
      }
    }
  }



  @media screen and (max-width: 1000px){
    .burger{
      display: block;
    }

    .header{
      .header__logo__text{
        position: relative;
        left: 1rem;
      }
      .header__nav{
        ul{
          display: block;
          opacity: 1;
          background: #00000090;
          height: calc(100vh - 60px);
          width: 50vw;
          position: absolute;
          top: 60px;
          left: -50vw;
          //left: 0vw;
          li{
            text-align: left;
            margin-top: 10px;
          }
        }
        .burger{
          position: absolute;
          top: 20px;
          right: 20px;
          width: 30px;
        }
      }
    }

    .burger.active div{
      transition: 0.3s ease-in-out 0.3s;
    }

    .burger.active div:nth-child(1){
      transform: translate(4px, 6px) rotate(45deg);
    }

    .burger.active div:nth-child(2){
      opacity: 0;
      transform: translateX(10px);
      transition: 0.3s esae-in-out;
    }

    .burger.active div:nth-child(3){
      transform: translate(4px, -6px) rotate(-45deg);
    }
  }

</style>