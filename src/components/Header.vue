<template>
  <nav
    class="fixed top-0 z-50 w-full border-b"
    :class="{
      'bg-[#222E3C] text-white': navbar.userNav,
      'bg-white text-black': !navbar.userNav,
    }"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button>
            <i
              @click="sidebar.sidebar = !sidebar.sidebar"
              class="bx bx-menu text-2xl sm:hidden block"
            ></i>
          </button>
          <div class="header__logo">
            
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <ul class="flex sm:gap-5 text-2xl">
              <li>
                <div class="relative" @click="navbar.setMode()">
                  <b
                    class="flex mr-5 w-[4.1rem] items-center justify-between h-9 cursor-pointer border-2 rounded-full"
                    ><span class="rounded-full"
                      ><i
                        class="bx bxs-moon pl-1 text-yellow-300 rounded-full"
                      ></i></span
                    ><span class="rounded-full"
                      ><i
                        class="bx bxs-sun px-1 rounded-full text-yellow-300"
                      ></i></span
                  ></b>
                  <p
                    class="w-8 h-8 rounded-full absolute top-[2px] -z-10 duration-1000"
                    :class="{
                      'translate-x-full bg-black': !navbar.userNav,
                      'bg-white': navbar.userNav,
                    }"
                  ></p>
                </div>
              </li>
              <li>
                <img
                  @click="navbar.userInfo = !navbar.userInfo"
                  class="w-8 h-8 rounded-full bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user"
                />
              </li>
            </ul>
            <div
              v-show="navbar.userInfo"
              @click="navbar.userInfo = false"
              class="absolute z-50 top-14 right-2 border-2 shadow-black text-base rounded-lg list-none divide-y divide-gray-100 shadow-md overflow-hidden"
              :class="
                navbar.userNav
                  ? 'bg-[#203843] border-white shadow-white'
                  : 'bg-white'
              "
            >
              <div class="px-4 py-3 text-center">
                <p class="text-lg font-bold">Admin</p>
              </div>
              <ul class="py-1 font-medium">
                <li class="block px-4 py-2 text-sm">
                  <router-link to="/settings"
                    ><i class="bx bxs-user-circle"></i> Profil</router-link
                  >
                </li>
                <li @click="Logout" class="block px-4 py-2 text-sm hover:cursor-pointer">
                  <i class="bx bx-log-out"></i> Log out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useNavStore } from "../stores/toggle.js";
import { useSidebarStore } from "../stores/sidebar.js";
import { useRouter } from "vue-router";
import { onBeforeMount, reactive } from "vue";
import axios from "../services/axios";
const router = useRouter();
const sidebar = useSidebarStore();
const navbar = useNavStore();

// const store = reactive({
//   guard: "Admin",
// });

const Logout = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
  router.push("/login");
};

// const getGuard = () => {
//   const id = localStorage.getItem("userId");
//   axios
//     .get(`/staff/${id}`, {
//       // headers: {
//       //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//       // },
//     })
//     .then((res) => {
//       store.guard = res.data.role[0].toUpperCase() + res.data.role.slice(1);
//     })
//     .catch((error) => {
//       console.log(error);
//       if (error.response.data.message == "Admin huquqi sizda yo'q!") {
//         store.guard = "o'qituvchi"; 
//       }
//     });
// };

// onBeforeMount(() => {
//   getGuard();
// });
</script>

<style lang="scss" scoped>
@media (max-width: 400px) {
  .icon {
    display: none;
  }
}
.header__logo{
  width: 200px;
  height: 40px;
  background-image: url('../../src/assets/img/DEVOSOFT\ 2-01-01.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}
</style>
