<template>
  <section class="projects-section">
    <h1>Latest Projects</h1>
    <div class="projects-container">
      <div class="projects-left">
        <h2>Take a look at my latest work</h2>
        <p>
          Check out some of my work by going to my projects page or by clicking
          one of the images here! Feedback and construsctive criticism is always
          welcome.
        </p>
        <p>
          This portfolio was created using the Vue JavaScript library with Vue
          Router. The projects showcased in my portfolio are a mix of Vue and
          React projects and are my latest personal projects.
        </p>
        <button>Projects</button>
      </div>
      <div class="projects-right">
        <img
          class="project-1"
          src="data:image/jpeg;base64,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"
          alt="project"
        />
        <img
          class="project-2"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDQ0NDQ0PDQ0NDQ4NDQ0ODg8NDQ0NFxIYFxYSFhYZHykhGRsmHxYWIjIiJiosLy8vGCA1OjUtOSkuLywBCgoKDg0OGBAPGy4gHh40Li4sLiwuLy4vLi4vMDkuLC4uLC4uLC4uLCwsLi4sLC4uLC4uLi4sLC4sLC4uLiwuLv/AABEIAKcBLgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQHAgUGAwj/xABOEAABAgMBBwwQBAQGAwAAAAAAAQIDBBEFBhIhMVGS0RMVFiJBUlNUYXGRsQcUMjM0YnJzdIGToaKy0uEjJLPTQkOUwTVVY8LD8GSCo//EABoBAAIDAQEAAAAAAAAAAAAAAAECAwQFAAb/xAA7EQACAQIBBgwDCAIDAAAAAAAAAQIDEQQSFDFRodETFSEyM2FxgZGx4fAFQVI0QlNigpLB0iPxJHKi/9oADAMBAAIRAxEAPwDj0EMEPQlYDIxGMIAwA4VsBjEMKZAAwitiGAwiggxAEVjGADIUYAMIjEMACADIACIwGADCjAQwigZCGEUSGQhhsIAAMYVgMQzhQGIyGAAAgBENQNAQDKR6ZmQgGEQAAyCLcRkYmQRQAYDC3AYAEUYEW0JhYcO+RKqqo1K4k/7Q1a2rG3zc1CKdeEHZjQoymrxN+M5/XaLvm5qBrtG3zc1BM8p9fvvHzSp7vuOgA5/XaNvm5qBrvG3zehA55T6/feLmdX3fcdCBz+u8bfNzUDXiNvm5qBz2l1++87Mqurz3HRAc7rxG37M1pt5aav2NdVMKYefdOz6ktezeLmNX3/omDI+rLlQNWXKh2f0uvZvBmNXq99xIAj6qvIGrLyBz+l17N4vF9bq27iUIj6svIGrLyB4wo9ezeDi6t1bdxKAi6uvIGrryB4wo9ezeLxdW6tu4lDPOBEVyLXcPQuU5qcVKOhlGrBwk4y0oYABIRDGADCsBiGEU1BkIDKPSgMAOFbBBjEMKZAAwitiGAwiggxAEVkG2u9N8tOpTZXHNRZeNVEX80/GicFDNZbXem+WnUptLjPBo3pTv0oZFD7T3Ff4h9j/VvO3lblJyLDZFhwGKyI1HNVXwkq1cS0qeuw2f4uz2kHSd7YsBXScitXpew4T0vHXqO2uJ2VMOImtk6OY6+et4j0wuVUdfL/FlpuZChP4nWjNxsrK+vf7sNH4NQcE7yu7at3eVslxk/wAXZnwtI9hk/wAWZnwtJabKolKe8dV3vvQXjOrqW3ePxLh9ctm4qvYZP8WZnwtI9hs/xZmfC0lp1XJ7wqu996A4zq6lt3h4kw2uWzcVbsNn+Lsz4WklStyk61FR0u3HVNvC0lkVXe+9Aqu996AfxGq1ay27wx+DYdO6ctm4r7YvN8A3OhaQ2MTfANzoWksKq5PeFVye8TPqmpbd4/FVDW9m4r3YxN8A3OhaR7GJvgG50LSWDVcnvCq5PeDPqmpbd53FNDW9m4r7YxN8A3OhaQ2MTfANzoWksGq5PeFVye87Pampbd53FNDW9m4r5bm5pMcu3Bh7qHpOXula3tWIqIndQ8NE35csVFVFwbi7vIUxdIv5N/PC+dCalWlUhLK+XqVKuEhh69HIvytaeprVbWctKYneolEaSxO50JJs4PoI9/myPG9PLu8kIyMTItlS4AABFGgANAitmpEAzKPSgAGQRbiMjEyCKADAYW4DAAijARkEQ11t96b5xOpTaXGeDRvSnfpQzV233pvnU6lNpcb4NG9Kd+lDIYfae4hx/wBj/VvPoK53wKT9Hh/KhszWXO+BSnmIfUbMwK3SS7WbdPmLsXkAAecXuXeSpGOegHJau/fuznGXbD9+7pcTcC9Zn8YR1e/A6sDlNXfv3dKi1d+/d0uO4F6zuMI6vfgdYBy0KYfvl6VOilFrChquHaJh9Qk4ZJYoYlVb2R7gACFgAADjjF/crzL1FJ3R+Bu54Xzl2P7leZeopK6TwN/PC+cu4XmT96zLx3T4ft/mJzEjidzoSSLIYnc6Es38Gv8ABH382UMb08u7yQDEMtlRgNBDCIAwGEW5pxgBknpWxgMQwpkADCK2IYDCKAxAEVjGADIU11t96b51OpTaXG+DRvSnfpQzW233pvnU6lNncX4NG9Ld+lDIIfae4gx7/wCH+refQNz3gUp5iH1IbM1lzvgUp5iH1IbMwK3SS7WblPmLsQCUZi7EuLFu4vWRjnlSDkZ8IUg5GfCRbzxJfp+wXniS/T9h8lFfhOrzJVIWRnwhSDkZ8JFvPEl+n7BeeJL9P2OyUdwj1eZK/C8T4T1bSiUxblMRChwmV27JdEpuUVa+tCYylEvaUpgpioK0SQbekbnomNUTnUV+3fJ0oai2u+N8lOtSASRp3V7lapi3CTjbR1nUIozxle4Z5Leo9iIuJ3VzF/crzL1FI3SeBP54Xzl3P7leZeopC6XwJ/lw/nLuF5k+7+TMx/T4ft/mJzFnYnc6E0hWbidzoTT0GD6CPv5sz8b08u7yQACAWimNAAYRbjAAGQpqAAyMk9K2IyMTIIoAMBhbgMRGnZlWI29S+c9161OUEpKKuzknJ2RJqOpE7XtHiyfB9Q+1rQ4snwfULwn5X4Mjy6f4kf3R3kuoVIva1o8WT4PqDtW0uLJ8H1HcL+V+DFyqf4kP3R3njba/hN86nUptLjV/LRvSnfpQzzSxJmPCbfwHNWtVRFh40qmUnWdZM5AYsOHAVUV6xFv1aq1VETLyEHC2rZdna1tAMTCFXD8HGcb3vzlYvW52L+RlPR4fyobDVSpJO6e2oMKHBZKwVbCY1rVc2rqIlMO3PbZfbnFYGYv7hlzozcm0tLNGGIoqKTnHkS+8t5a6PGq4FxYlx4vWVM+7S2mNVzpWXRrUVzlvVwImPFEO7uWtvt6ThzN4jHPv2PZWrUe1VRaLkXH6yGVOUdKJoVIT5jT7Hc2F6m8lun7Be+JLdP2GkvE4KXzXaB9rxOCl81dA1+sr5D1bPQxvfElun7Be+JLdP2Mu14nBS+augO14nBS+aug6/WdkPVs9BQ2Mrt2y9KblFWvrQmspRL2lKYKYqchGhS6128KDSm43DX1oSkaiIiIlETAiJgRBJMmppr5bzW2lLOe9FRUTaImFURcakXtF+VmchnbXfG+SnWprlcTRTsuUz67jwkrradPLtoxiZGomDFiPUjSrvw2eSnUe18QM1I6EN+JeZSkLpvAn+XD+cu567VeZeopG6XwJ/lw/nLmF5k/esy8f0+H7f5icxZeJ/OhNINl4n86E49Bgugj3+bM/HdPPu8kAxDLZTAYDCLcAAYRTTjGIyj0pkADCK2IYDCKJSBPd3LeeZ1oT1NfO93L+eZ1oRV+YxqfO8S7LjbGgR5R0SJBhxHpHiMvn3yreo1FREoqbqnRw7mZKm3lYar4quROsg9jnwF/pMTqadUZeMqzjXnaT062HA0KUsPSbitC+S2mn2NSHFWdLtIbGpDirel2kk2hP6i5qXl9fIq46UwkXXz/R+P7EClWaupPxJJvCwk4ySuvyrcZtufkkxSzU/wDZ2ky1hk+Lt6XaTy17/wBL4vsbKUj6oxH0pVVwVriUEpVVytvx9RqebVHaKX7fQhaxSfF06XaQ1ik+LpnO0m0AThJ634veTcBS+leC3Ff3fyMKDAXUoaQ0fLzNaVw0Zg6w7GUSlls5IsdfiJPZO7w30ea+RDiLlbp40tKJAZCY5t9EW+dfX22XkUtKnOtCKXK/UpRqU6FSs3yK8dC/KWbCtuJvG+89NeYm8b0qV/DukjcFD+LSeuyWPwUP4tJPmE9S8ShxhL6n4eh3evMTeN6VDXmJvG9KnC7JY/BQ/i0hskj8FD+LSDMZal4ncYS+p+Hod1rzE3jelTby8S+hscuBXNRVpiKt2SRuCh/FpNjCu5mWta1JeEqNRESqv3PWJPA1PupeJPQ+JQTfCSfh6HX2rAV70VHNbRqJRVvVxqVZdPd9ElJ+NJQ5eHEbAcxsSK+IuFXNa5VaibiI5PebmbusjRnoroUNu1vcF/lVcvKSrjrnbOn2Ts1OSMCYjOnnNv4jEeqNbBhIjUruaRJUpUYpzJ6NSjiKsslXNVB7Jc0jWp2pBojURF1R2GiAvZSmkxycH2j1O/2H2T/l0v7NobD7K/y6X9m0gc6ep+JpK6MLlbd7fkkmVh6k5ViMexFvkRzd1FyYirLpV/IRPLh/OdXAth0jGnJOXgQ2wWTUW8bttqjkatERFxHJ3T4JJ/lQvnQt0abjCT+Ttb33mNjK0J4mjGOmMuXxRzdk4n86E419kYn86GwN3BdBDv8ANlPHdPPu8kMAGWincBgAyFYDAYRWacyMTIyT0oAMBhbgMACKYqQJ7u5fz7OtCepAnu7lvPs60Ia/MY9PnH0D2O/AXekxOpp1RyvY68Bd6TE6mnVGPjenn2k3w/7LS/6ryI8Z9KbVHYN1HL1Iphqy7xOh/wBIptUqlaYt29/up4YMqdMPSQJIedRptXJGqrwadET6D3bWmFERcOBFqnUQMGVOmHpJzEo3ub3AuDAoJJIenJyfL72ECHatVRNTxqid1l9RtDnYOpXzKK7um02rcvOdENUSWgTDVJTTync4fsn94T0ea+RCiY9pzEJ15CfetREWl4x2FedC9uyh3hPRpv5EKZll2pfwsHNRSduR+ZUk4qpWyoqXLHTb6etM1qW7O8Mvs4X0jS3p7cjO9UKF9Ju2nX3EQKNjR1/iVIbF5Ewu99OguVKE4Ryst++8jhKhKWTwMfCP9Sttfp/hXexh/SGvs/wr/Yw/pLy1VcoaquUq3n9TJ+Dw/wCHH9sdxRuvs/wrvYw/pBbfnt2M5OeFCT/aXlqq5TQXZwL+AyKmOE/D5DsC++g9NTnJRcmr+9Yk40IxbVKLt1R/qVVr/O8N/wDOF9Jc/YotJ6WU+K5NUdEn41VWjf5cPInIVs4tPsSvVtmxqJffn42Vf4IeRFBjaDpwTcsrl9/NnYarCV1TioO2lJbkdOy2XL/LTOXQZa7rwaZy6CYkw7ee6J9I9VcuC8T1o9E+UzLx1bSylP8AE/8AJQl29qTEK1p9sJ6sbq99S9YuFWN3VQ0Uza8zFYsOLEVzFoqtvGJWi1TEh1F2P+KT/pLvlaatptUMC6lOMsu10vl6lGtiqdOo/wDEm09PJft5v8kOyGKjXKqURVSld0niGatGmqcFBfIzK1V1ZubVrgMBkxBcAAYwowADhDUgAzKPTNiGAwiggAARWzFSBPd3LefZ1oT8aoiYVXAiJhVV5Cc+4u2I7YcWBIxFRrr5FiKyDXdTA9UWhBiZJQdyWkrysi4ex9FY2Sciuai9sRForkRcTTp+2Ie/ZnIUJEsi6Ku2kIFfOQ1/5THWm6HiED2kP90oVqdGrNzy3y9XqJh5YmlSjT4NPJSXP9C7rQtRITmo1WORUVVq5MGHnIuv7skPO+5TiWTdDxGB7Rn7oa1XQ8RgZ7P3RVQoJcsn4eoJyxrd0rdWUtxcev7skPO+5sZOdbEhX7nMaq3yURyLulG613Q8Rl89n7oa13Q8Ql/aM/dA6FF6JNd3qGnPGRd5RT/UtxbcBYN8z8dF2zf4eXnOh1Zm/bnIUbAkLfvaOkoCKnjsxe1M+0be4lA9oz90WdKm/vPw9Q0XXpp/41y/m/2dv2TojVgbVyLSWmq0VF/gKpsiypqOxHQYD3tqqXyURtedToHWVdBFY+EklA27XQ1pFho6ipRaVikdllW7Z8FGuhTEGEiq78JUiMbVcKqrFWnrLOHkoyUYNcienkFyJvhJ1FbKceRcuhWJlnXFTb1TVr2CzdoqPeqZERMHvOylrH1NjYbEvWtSiIV1DuktDcnI2eeqXS2jxyLnlypQrz50lt3EUatGGhPZvLF1uePW5/KV1sltLjkXPHsltLjkXPEzKr9S27hs6p6ns3lh63PMY1lq5rmuS+a5Fa5FTAqLuFfbJbR45FzgW6S0OORc8OZVvqW3cDOqWp7N5sLTuMmGOVYCpEZuNct69vJkU6zsaSzoUhMQorUa9loRkc1b1aLqcJd2qbpX77op/jcXOO77HVpRUs+NFcuqRIlox75zqqq0hw9BDjo1lTSqNPl79DGw86N5ON1ydvzR2GDk6Ieg9GXqqmBq8m0w+4ga9Rd43odpM0teJTuW9DtJl5EtROq9LW/AqC6//FLQ9KX5GmsabO65a2pPr/5Lvkaaxp6fB9DDsXkZGL6afazNAAZbKlxgADIUDIQwisAAAimpAYGUelAaAARRHX3P2FZb4bI01OI9XIirBbEZAvF3WuVdt0UOSMVQSpFyVk2uw6MktKuXHZc9Y0qn5ZkrCWlFekWEsRed61cvSTol08i7A6LCVMnbDETrKMVor0pvARbvlO5PnLtayLw1/s3fQf6hmkWv9m76D/UM0lIXg7wGYL6n77wZz1IumJbsgq7WNAamTVmO/wBwte5Lh5f2kP6ilrwd4NmK+pi5x1F0a9SXDwPaQ/qDXuS4eB7SH9RS94PUw5ivqYM56i64Nu2elb+JAdkpGY2nxHpr/Zm+g/1DNJSN4PUzswX1MGdvUi79f7Mywf6hmk94d1Uk1KJFh09IYvWpRV4NGA4ui9Mn77wZ7JfJFv2pFsSaqseHLq9f5rI0OFFzmqir6zibo7HkILNUlJu/q5ESA5WRX+pzdxOVDmEaeiIW6GGdK1pu2r5bbletXU07xV9fzM0ASDLxTYDAAiXMHENLq7Rk1iS0vH1OCsXVkYsKE7bqxqK5FcldwnKhg5ldwrYmhwsUr2tyljD1lTk21dPk96SMl3tqbs5RfR4C/wBj1lrvLUVVTttHYKp+BBT+xlqaZE6BthpkToKrwF+S68H/AGLOeUvw1s/qZMm4swr5iO6/ixYjnvdRG3y4q0TBuHq0wah6IaVGnwcFHUZtaplzctYxgMmILgADGFGAAcICDEZBAacYAZR6UYwAIrAKAARQoOgAFCsVB0AA2FuOgUGARWwoFBgNYW4Xo6AAbC3Cg6AARbmVARAAZCDGMBhQMgA4QVBUGAQCoNEAA2FbGiGQAMIMYAMhWBkABEYAABFMgAAis//Z"
          alt="project"
        />
        <img
          class="project-3"
          src="data:image/jpeg;base64,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"
          alt="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
};
</script>

<style scoped lang="scss">
.projects-section {
  width: 75vw;
  margin: 0 auto;
  color: $primary-dark;
  margin-bottom: 15rem;
  @include sm {
    margin-bottom: 10rem;
  }
  h1 {
    font-size: 4.4rem;
  }
  .projects-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 4rem;
    @include mdh {
      flex-direction: column;
    }
    @include sm {
      padding-bottom: 0;
    }
    .projects-left {
      text-align: left;
      width: 40%;
      padding: 0 2%;
      @include xxl {
        width: 50%;
      }
      @include mdh {
        width: 100%;
        button {
          background-color: $primary;
          border-color: $primary;
          color: $white;
        }
      }
      @include sm {
        text-align: center;
        margin-bottom: 1.5rem;
        button {
          display: block;
          width: 100%;
        }
      }
      h2 {
        margin-bottom: 10px;
        font-size: 2.4rem;
      }
      p {
        margin-bottom: 20px;
      }
    }
    .projects-right {
      width: 50%;
      position: relative;
      padding-bottom: 4rem;
      @include mdh {
        width: 100%;
      }
      @include sm {
        width: 100%;
        padding-bottom: 0;
      }
      img {
        position: absolute;
        width: 40%;
        outline: 10px solid transparent;
        transition: all 0.2s;
        z-index: 4;
        @include xxl {
          width: 50%;
        }
        @include mdh {
          width: 30%;
          outline: none !important;
        }
        @include tab {
          width: 35%;
        }
        @include sm {
          position: static;
          width: 100%;
          margin-top: 15px;
          transform: none !important;
        }
        &:hover {
          transform: scale(1.05);
          outline-offset: 20px;
          outline: 15px solid $primary;
          z-index: 5;
        }
      }
      .project-1 {
        top: -10rem;
        left: 5rem;
        @include xxl {
          top: -12rem;
          left: 7rem;
        }
        @include mdh {
          top: 2.5rem;
          left: 19%;
          bottom: 0;
        }
        @include tab {
          top: 5rem;
          left: 15%;
        }
      }
      .project-2 {
        top: -7rem;
        left: 27rem;
        @include xxl {
          top: -9rem;
          left: 24rem;
        }
        @include mdh {
          top: 2.5rem;
          left: 55%;
          bottom: 0;
        }
        @include tab {
          top: 5rem;
        }
      }
      .project-3 {
        top: 0rem;
        left: 16rem;
        @include xxl {
          top: -2rem;
          left: 14rem;
        }
        @include mdh {
          top: 1.2rem;
          left: 35%;
          bottom: 0;
        }
        @include tab {
          top: 3.5rem;
        }
      }
    }
  }
}
</style>
