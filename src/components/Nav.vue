<template>
  <div class="wrapper">
    <div id="navigation">
        <div class="md-layout">
          <div class="md-layout-item">
            <md-toolbar class="md-white">
              <div class="md-toolbar-row">
                <div class="md-toolbar-section-start">
                  <h3 class="md-title">
                    Navbar with profile
                  </h3>
                </div>
                <div class="md-toolbar-section-end">
                  <md-button
                    class="md-just-icon md-simple md-white md-toolbar-toggle"
                  >
                    <span class="icon-bar" />
                    <span class="icon-bar" />
                    <span class="icon-bar" />
                  </md-button>

                  <div class="md-collapse">
                    <md-list>
                      <md-list-item href="javascript:void(0)">
                        <p>Discover</p>
                      </md-list-item>

                      <md-list-item href="javascript:void(0)">
                        <p>Whishlist</p>
                      </md-list-item>

                      <li class="md-list-item">
                        <a
                          href="javascript:void(0)"
                          class="md-list-item-router md-list-item-container md-button-clean"
                        >
                          <div class="md-list-item-content">
                            <md-button
                              class="md-rose md-round"
                            >Register</md-button>
                          </div>
                        </a>
                      </li>
                    </md-list>
                  </div>
                </div>
              </div>
            </md-toolbar>
          
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: "",
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },
  props: {
    image: {
      type: String,
      default: require("@/assets/img/bg.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    }
  },
  computed: {
    bgImage() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>

<style lang="css"></style>