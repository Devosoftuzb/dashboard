<template>
    <div class="container mx-auto px-2">
      <!-- ----------------------------------------- MODAL -------------------------------------------------------- -->
  
      <!-- Main modal -->
      <div
        :class="
          modal
            ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
            : 'hidden'
        "
      >
        <div class="relative p-4 max-w-5xl min-w-[50%] h-auto">
          <!-- Modal content -->
          <div
            class="relative p-4 rounded-lg shadow sm:p-5"
            :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
          >
            <!-- Modal header -->
            <div
              class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5"
            >
              <h3
                class="text-lg"
                :class="navbar.userNav ? 'text-white' : 'text-black'"
              >
                Yangi xodim qo'shish
              </h3>
              <button
                @click="toggleModal"
                type="button"
                class="bg-transparent hover:bg-gray-200 hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                :class="navbar.userNav ? 'text-white' : 'text-black'"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <form
              :class="{ darkForm: navbar.userNav }"
            >
              <div class="grid font-medium gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label for="login" class="block mb-2 text-sm">Rasm</label>
                  <input
                    type="file"
                    name="login"
                    id="login"
                    class="  text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                    placeholder="Rasm"
                    required
                  />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm">Lavozim</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                    placeholder="Lavozim"
                    required
                  />
                </div>
                <div class="w-[205%]">
                  <label for="name" class="block mb-2 text-sm"
                    >To'liq ismi (I . F . O)</label
                  >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                    placeholder="To'liq ismini kiriting"
                    required
                  />
                </div>
                <div></div>
                <div>
                  <label for="phone" class="block mb-2 text-sm"
                    >Link</label
                  >
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                    placeholder="Link"
                    required
                  />
                </div>
                <!-- <div>
                  <label for="category" class="block mb-2 text-sm font-medium"
                    >Lavozimi</label
                  >
                  <select
                    v-model="form.role"
                    id="category"
                    class="bg-gray-50 border border-gray-300 text-md z-10 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    required
                  >
                    <option value="admin">admin</option>
                    <option value="o'qituvchi">o'qituvchi</option>
                  </select>
                </div> -->
              </div>
              <div
                class="w-full flex items-center justify-between border-t pt-5 mt-5"
              >
                <button
                  type="button"
                  class="border cursor-pointer inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  class="btnAdd cursor-pointer text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Qo'shish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <!-- ----------------------------------------- MODAL END ---------------------------------------------------- -->
  
      <!-- ----------------------------------------- Edit modal ---------------------------------------------------- -->
      <div
        :class="
          false
            ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
            : 'hidden'
        "
      >
        <div class="relative p-4 max-w-5xl min-w-[30%] h-auto">
          <!-- Modal content -->
          <div
            class="relative p-4 rounded-lg shadow sm:p-5"
            :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
          >
            <!-- Modal header -->
            <div
              class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5"
            >
              <h3
                class="text-lg"
                :class="navbar.userNav ? 'text-white' : 'text-black'"
              >
                Xodim ma'lumotlarini o'zgartirish
              </h3>
              <button
                type="button"
                class="bg-transparent hover:bg-gray-200 hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                :class="navbar.userNav ? 'text-white' : 'text-black'"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <form
              :class="{ darkForm: navbar.userNav }"
            >
              <div class="grid font-medium gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label for="login" class="block mb-2 text-sm">Login</label>
                  <input
                    type="text"
                    name="login"
                    id="login"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                    placeholder="login"
                    required
                  />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm">Parol</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="bg-gray-50 placeholder-black border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                    placeholder="*********"
                  />
                </div>
                <div class="w-[205%]">
                  <label for="name" class="block mb-2 text-sm"
                    >To'liq ismi (I . F . O)</label
                  >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                    placeholder="To'liq ismini kiriting"
                    required
                  />
                </div>
                <div></div>
                <div>
                  <label for="phone" class="block mb-2 text-sm"
                    >Telefon raqami</label
                  >
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                    placeholder="Telefon raqamini kiriting"
                    required
                  />
                </div>
                <div>
                  <label for="category" class="block mb-2 text-sm font-medium"
                    >Lavozimi</label
                  >
                  <select
                    id="category"
                    class="bg-gray-50 border border-gray-300 text-md z-10 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    required
                  >
                    <option value="admin">admin</option>
                    <option value="o'qituvchi">o'qituvchi</option>
                    <option value="talaba">talaba</option>
                  </select>
                </div>
              </div>
              <div
                class="w-full flex items-center justify-between border-t pt-5 mt-5"
              >
                <button
                  type="button"
                  class="border cursor-pointer inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  class="btnAdd cursor-pointer text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  O'zgartirish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <!-- ----------------------------------------- Edit END ---------------------------------------------------- -->
  
      <!-- ----------------------------------------- Delete modal ---------------------------------------------------- -->
      <div
        :class="
          false
            ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
            : 'hidden'
        "
      >
        <div class="relative p-4 max-w-5xl min-w-[30%] h-auto">
          <!-- Modal content -->
          <div
            class="relative p-4 rounded-lg shadow sm:p-5"
            :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
          >
            <!-- Modal header -->
            <div
              class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5"
            >
              <h3
                class="text-lg"
                :class="navbar.userNav ? 'text-white' : 'text-black'"
              >
                Xodimni o'chirib tashlash
              </h3>
              <button
                type="button"
                class="bg-transparent hover:bg-gray-200 hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                :class="navbar.userNav ? 'text-white' : 'text-black'"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <div :class="{ darkForm: navbar.userNav }">
              <div class="grid font-medium gap-4 mb-4 grid-cols-1">
                <div>
                  <div></div>
                  <h1
                    class="text-2xl"
                    :class="navbar.userNav ? 'text-white' : 'text-black'"
                  >
                    Siz xodimni o'chirishni xohlaysizmi?
                  </h1>
                </div>
                <div
                  class="w-full flex items-center justify-between border-t pt-5 mt-5"
                >
                  <button
                    type="button"
                    class="border cursor-pointer inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Bekor qilish
                  </button>
                  <button
                    class="btnAdd cursor-pointer text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    O'chirish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ----------------------------------------- delete modal end ---------------------------------------------------- -->
  
      <!-- ----------------------------------------- EMPLYE TABLE ------------------------------------------------- -->
  
      <section class="pt-4" :class="{ 'text-white': navbar.userNav }">

        <!------------------------------------------- Search ------------------------------------------->
  
        <div class="w-full max-w-screen">
          <!-- Start coding here -->
          <div
            class="shadow rounded-xl flex flex-col lg:flex-row items-center justify-between lg:space-x-4 p-4 mb-4"
            :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
          >
            <div
              class="w-full flex items-center lg:justify-start lg:pb-0 pb-4 justify-between gap-5"
            >
              <h1 class="text-blue-700 font-bold text-lg">Xodimlar</h1>
              <div
                class="lg:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3"
              >
                <button
                  @click="toggleModal"
                  id=""
                  type="button"
                  class="btnAdd flex items-center max-w-fit justify-center whitespace-nowrap border border-gray-200 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 sm:py-2"
                >
                  <span class="sm:block hidden">Xodim qo'shish</span>
                  <i class="sm:hidden block bx bxs-user-plus text-lg"></i>
                </button>
              </div>
            </div>
  
            <div class="w-full lg:w-80">
              <form class="flex items-center text-gray-900 font-medium">
                <label for="simple-search" class="sr-only">Qidiruv</label>
                <div class="relative w-full">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                    placeholder="Qidirish .."
                  />
                  <ul
                    class="absolute z-10 max-h-80 overflow-y-auto overflow-hidden py-1 text-gray-600 rounded bg-white w-full"
                    
                  >
                    <li
                      class="hover:bg-gray-100 cursor-pointer pl-2"
              
                      
                    >
                      <!-- {{ i.full_name }} -->
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <!------------------------------------------- Search ------------------------------------------->
  
          <div
            class="relative shadow-md rounded-lg overflow-hidden"
            :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
          >
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left">
                <thead
                  class="text-xs rounded-lg uppercase"
                  :class="navbar.userNav ? 'bg-gray-700' : 'bg-gray-50'"
                >
                <tr>
                    <th scope="col" class="text-center py-3">No</th>
                    <th scope="col" class="text-center py-3">Rasm</th>
                    <th scope="col" class="text-center py-3">F. I. O.</th>
                    <th scope="col" class="text-center py-3">Lavozim</th>
                    <th scope="col" class="text-center py-3">Linklar</th>
                    <th scope="col" class="text-center py-3">To'liq ma'lumot</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b"
                    :class="
                      navbar.userNav ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-50 text-black'
                    "
                  >
                    <th
                      scope="row"
                      class="text-center px-5 py-3 font-medium whitespace-nowrap"
                    >
                      1 
                    </th>
                    <td class="flex items-center justify-center py-2">
                      <img class="rounded-[50%] " width="60" height="60" src="https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg" alt="">
                    </td>
                    <td class="text-center font-medium  px-5 py-2">
                      John Doe
                    </td>
                    <td class="text-center font-medium px-5 py-2">
                      Front-end
                    </td>
                    <td class="text-center font-medium  px-5 py-2">
                      <div class="flex items-center justify-center gap-2">
                        <i class='bx bxl-telegram text-[24px]'></i>
                        <i class='bx bxl-linkedin-square text-[24px]' ></i>
                        <i class='bx bxl-instagram-alt text-[24px]' ></i>
                      </div>
                    </td>
                    <td class="text-center font-medium px-5 py-3">
                      <button
                        class="btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2"
                      >
                        Batafsil
                      </button>
                    </td>
                    <td
                      class="text-center whitespace-nowrap font-medium pr-5"
                    >
                      <i
                        class="bx bxs-pencil bg-blue-300 text-blue-600 rounded-lg p-2 mr-3 cursor-pointer focus:ring-2"
                      >
                      </i>
                      <i
                        class="bx bxs-trash bg-red-300 cursor-pointer text-red-600 rounded-lg p-2 focus:ring-2"
                      >
                      </i>
                    </td>
                  </tr>
                  <tr
                    class="border-b"
                    :class="
                      navbar.userNav ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-50 text-black'
                    "
                  >
                    <th
                      scope="row"
                      class="text-center px-5 py-3 font-medium whitespace-nowrap"
                    >
                      2
                    </th>
                    <td class="flex items-center justify-center py-2">
                      <img class="rounded-[50%] " width="60" height="60" src="https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg" alt="">
                    </td>
                    <td class="text-center font-medium  px-5 py-2">
                      John Doe
                    </td>
                    <td class="text-center font-medium px-5 py-2">
                      Front-end
                    </td>
                    <td class="text-center font-medium  px-5 py-2">
                      <div class="flex items-center justify-center gap-2">
                        <i class='bx bxl-telegram text-[24px]'></i>
                        <i class='bx bxl-linkedin-square text-[24px]' ></i>
                        <i class='bx bxl-instagram-alt text-[24px]' ></i>
                      </div>
                    </td>
                    <td class="text-center font-medium px-5 py-3">
                      <button
                        class="btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2"
                      >
                        Batafsil
                      </button>
                    </td>
                    <td
                      class="text-center whitespace-nowrap font-medium pr-5"
                    >
                      <i
                        class="bx bxs-pencil bg-blue-300 text-blue-600 rounded-lg p-2 mr-3 cursor-pointer focus:ring-2"
                      >
                      </i>
                      <i
                        class="bx bxs-trash bg-red-300 cursor-pointer text-red-600 rounded-lg p-2 focus:ring-2"
                      >
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <div
                class="w-full max-w-screen text-center p-20 text-2xl font-medium"
              >
                <h1>Xodimlar ro'yhati bo'sh</h1>
              </div> -->
            </div>
            <nav
              class="flex flex-row justify-between items-center md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <ul class="inline-flex items-stretch -space-x-px">
                <li
                  href="#"
                  class="flex font-bold text-black border-2 bg-white hover:bg-gray-300 items-center justify-center text-sm py-2 sm:mt-0 -mt-2 px-6 rounded-lg leading-tight"
                >
                  Oldingi
                </li>
              </ul>
              <span class="text-sm font-normal">
                Sahifa
                <span class="font-semibold"
                  ><span></span> -
                  <span></span
                  ><span></span></span
                >
                dan
                <span class="font-semibold"></span>
              </span>
              <ul class="inline-flex items-stretch -space-x-px">
                <li
                  href="#"
                  class="flex font-bold text-black border-2 bg-white hover:bg-gray-300 items-center justify-center text-sm py-2 sm:mt-0 -mt-2 px-6 rounded-lg leading-tight"
                >
                  Keyingi
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
  
      <!-- ----------------------------------------- EMPLYE TABLE END --------------------------------------------- -->
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, reactive } from "vue";
  import { useRouter } from "vue-router";
  import { useNavStore } from "../../stores/toggle";
  import { useNotificationStore } from "../../stores/notification";
  import axios from "@/services/axios";
  import { useInfoStore } from "../../stores/dashboard";
  
  const info = useInfoStore();
  const notification = useNotificationStore();
  const navbar = useNavStore();
  const router = useRouter();
  
  const modal = ref(false);
  const toggleModal = () => (modal.value = !modal.value);
  
  </script>
  
  <style lang="scss" scoped>
  .btnAdd {
    background-image: linear-gradient(
      to right,
      rgb(139, 255, 203) -250%,
      #136f4f
    );
  }
  
  .btnKirish {
    background-image: linear-gradient(
      to right,
      rgb(139, 255, 232) -250%,
      #046f80
    );
  }
  
  .btnOrqaga {
    background-image: linear-gradient(
      to right,
      rgb(138, 183, 254) -250%,
      #2f73f0
    );
  }
  </style>
  