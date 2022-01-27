<template>
  <section style="background-color: rgba(0, 0, 0, 0)">
    <button @click="topAction" class="btn bg-black rounded-pill" id="gotop">
      go top
    </button>
    <div class="container">
      <section>
        <!-- space -->
        <div style="height: 80px" id="goWeb"></div>
      </section>
      <div class="mx-4 mt-2">
        <h1 class="text-center">Skills grid | Web development</h1>
      </div>

      <div class="row" style="background-color: rgba(255, 235, 205, 0)">
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div class="card-body d-flex justify-content-center zoom">
                <img class="w-50 mb-2" src="/img/sf.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://symfony.com/"
                    >Symfony</a
                  >, framework PHP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div
                class="card-body d-flex justify-content-center zoom"
                title="see more"
              >
                <img class="w-50 mb-2" src="/img/node.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://nodejs.org/en/"
                    >NODE JS</a
                  >, ambiente de execução back end JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="background-color: rgba(255, 235, 205, 0)">
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div class="card-body d-flex justify-content-center zoom">
                <img class="w-50 mb-2" src="/img/flask.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://flask.palletsprojects.com/en/2.0.x/"
                    >Flask</a
                  >, Micro framework web Python
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div class="card-body d-flex justify-content-center zoom">
                <img class="w-50 mb-2" src="/img/laravel.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://laravel.com/"
                    >Laravel</a
                  >
                  , Framework web PHP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div class="card-body d-flex justify-content-center zoom">
                <img class="w-50 mb-2" src="/img/django.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://www.djangoproject.com/"
                    >Django</a
                  >
                  , Framework web Python
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div class="card-body d-flex justify-content-center zoom">
                <img class="w-50 mb-2" src="/img/bootstrap.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://getbootstrap.com/"
                    >Bootstrap</a
                  >
                  , CSS library
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- part 2-->
      <section>
        <!-- space -->
        <div style="height: 80px" id="goGame"></div>
      </section>
      <div class="mx-4 mt-2">
        <h1 class="text-center">Skills grid | Game development</h1>
      </div>
      <div class="row" style="background-color: rgba(255, 235, 205, 0)">
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div class="card-body d-flex justify-content-center zoom">
                <img class="w-50 mb-2" src="/img/unity.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://unity.com/"
                    >Unity</a
                  >, Game engine
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div class="card-body d-flex justify-content-center zoom">
                <img class="w-50 mb-2" src="/img/godot.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://godotengine.org/"
                    >Godot </a
                  >, Game engine
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div class="card-body d-flex justify-content-center zoom">
                <img class="w-50 mb-2" src="/img/blender.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://www.blender.org/"
                    >Blender </a
                  >, 3D software
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- part 3-->
      <section>
        <!-- space -->
        <div style="height: 80px" id="goMusic"></div>
      </section>
      <div class="mx-4 mt-2">
        <h1 class="text-center">Skills grid | Music composition</h1>
      </div>
      <div class="row" style="background-color: rgba(255, 235, 205, 0)">
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-wrap"
            style="background-color: rgba(137, 43, 226, 0)"
          >
            <div class="card my-2">
              <div class="card-body d-flex justify-content-center zoom">
                <img class="w-50 mb-2" src="/img/lmms.png" alt="" />
              </div>
              <div class="card-footer d-flex justify-content-center my-2">
                <p>
                  <a
                    style="text-decoration: none"
                    target="_blank"
                    href="https://lmms.io/"
                    >LMMS</a
                  >, DAW - digital audio workstation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Body",
  data() {
    return {
      img: "public/img/laravel.png",
    };
  },
  methods: {
    //buttonTop = document.getElementById('gotop'),
    //window.onscroll = function(){ scrollTop() },
    scrollTop() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        buttonTop.style.display = "block";
      } else {
        buttonTop.style.display = "none";
      }
    },

    topAction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },


  },
};
</script>

<style>
.zoom {
  transition: transform 0.4s;
}

.zoom:hover {
  -ms-transform: scale(0.5);
  transform: scale(0.5);
  opacity: 0.4;
}

#gotop {
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  cursor: pointer;
  color: white;
}

.icon {
  color: white;
}
.icon:hover {
  color: rgb(224, 213, 64);
}
</style>