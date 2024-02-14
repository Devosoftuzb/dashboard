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
          :class="navbar.userNav ? 'bg-[#222E3C]' : 'bg-white'"
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
          <form @submit.prevent="createProduct">
            <div class="grid font-medium gap-4 mb-4">
              <div>
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="login" class="block mb-2 text-sm">Rasm</label>
                <input :class="navbar.userNav ? 'text-white' : 'text-black'"
                  accept="image/jpg, image/jpeg, image/png"
                  type="file"
                  name="login"
                  id="login"
                  class="text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Rasm"
                  @change="(e) => setImg(e)"
                  required
                  
                />
              </div>
              <div class="flex items-center gap-5">
                <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="name" class="block mb-2 text-sm"
                  >To'liq ismi (I . F . O)</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="To'liq ismini kiriting"
                  required
                />
              </div>
              <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="password" class="block mb-2 text-sm">Lavozim</label>
                <input 
                  v-model="form.position"
                  type="text"
                  name="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Lavozim"
                  required
                />
              </div>
            </div>
              <div class="flex items-center gap-5">
                <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="telegram" class="block mb-2 text-sm">Telegram Link</label>
                <input
                  v-model="form.telegram"
                  type="text"
                  name="telegram"
                  id="telegram"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Link"
                  required
                  
                />
              </div>
              <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="instagram" class="block mb-2 text-sm">Instagram Link</label>
                <input
                v-model="form.instagram"
                  type="text"
                  name="instagram"
                  id="instagram"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Link"
                  required
                  
                />
              </div>
              <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="linkedin" class="block mb-2 text-sm">LinkedIn Link</label>
                <input
                v-model="form.linkedin"
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Link"
                  required
                />
              </div>
              </div>
            </div>
            <div
              class="w-full flex items-center justify-between border-t pt-5 mt-5"
            >
              <button
              @click="cancelFunc"
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
        edit.toggle
          ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
          : 'hidden'
      "
    >
      <div class="relative p-4 max-w-5xl min-w-[30%] h-auto">
        <!-- Modal content -->
        <div
          class="relative p-4 rounded-lg shadow sm:p-5"
          :class="navbar.userNav ? 'bg-[#222E3C]' : 'bg-white'"
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
            @click="cancelFunc1"
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
          <form @submit.prevent="editProduct">
            <div class="grid font-medium gap-4 mb-4">
              <div>
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="login" class="block mb-2 text-sm">Rasm</label>
                <input :class="navbar.userNav ? 'text-white' : 'text-black'"
                  accept="image/jpg, image/jpeg, image/png"
                  type="file"
                  name="login"
                  id="login"
                  class="text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Rasm"
                  @change="(e) => setImg(e)"
                  
                  
                />
              </div>
              <div class="flex items-center gap-5">
                <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="name" class="block mb-2 text-sm"
                  >To'liq ismi (I . F . O)</label
                >
                <input
                  v-model="edit.name"
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="To'liq ismini kiriting"
                
                />
              </div>
              <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="password" class="block mb-2 text-sm">Lavozim</label>
                <input 
                  v-model="edit.position"
                  type="text"
                  name="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Lavozim"
                  
                />
              </div>
            </div>
              <div class="flex items-center gap-5">
                <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="telegram" class="block mb-2 text-sm">Telegram Link</label>
                <input
                  v-model="edit.telegram"
                  type="text"
                  name="telegram"
                  id="telegram"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Link"
                  
                  
                />
              </div>
              <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="instagram" class="block mb-2 text-sm">Instagram Link</label>
                <input
                v-model="edit.instagram"
                  type="text"
                  name="instagram"
                  id="instagram"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Link"
                  
                  
                />
              </div>
              <div class="w-full">
                <label :class="navbar.userNav ? 'text-white' : 'text-black'" for="linkedin" class="block mb-2 text-sm">LinkedIn Link</label>
                <input
                v-model="edit.linkidin"
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Link"
                  
                />
              </div>
              </div>
            </div>
            <div
              class="w-full flex items-center justify-between border-t pt-5 mt-5"
            >
              <button
              @click="cancelFunc1"
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
        remove.toggle
          ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
          : 'hidden'
      "
    >
      <div class="relative p-4 max-w-5xl min-w-[30%] h-auto">
        <!-- Modal content -->
        <div
          class="relative p-4 rounded-lg shadow sm:p-5"
          :class="navbar.userNav ? 'bg-[#222E3C]' : 'bg-white'"
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
            @click="remove.toggle = false"
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
                @click="remove.toggle = false"
                  type="button"
                  class="border cursor-pointer inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Bekor qilish
                </button>
                <button
                @click="deleteProduct"
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
          :class="navbar.userNav ? 'bg-[#222E3C]' : 'bg-white'"
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
                  v-model="store.filter"
                  @input="
                    store.filter_show = true;
                    searchFunc();
                  "
                  type="search"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                  placeholder="Qidirish .."
                />
                <ul
                  v-show="store.filter_show"
                  class="absolute z-10 max-h-80 overflow-y-auto overflow-hidden py-1 text-gray-600 rounded bg-white w-full"
                  :class="{ hidden: !store.searchList.length }"
                >
                  <li
                    class="hover:bg-gray-100 cursor-pointer pl-2"
                    v-for="(i, index) in store.searchList"
                    :key="index"
                    @click="
                      store.filter = i.name;
                      searchFunc();
                    "
                  >
                    {{ i.name }}
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <!------------------------------------------- Search ------------------------------------------->

        <div
          class="relative shadow-md rounded-lg overflow-hidden"
          :class="navbar.userNav ? 'bg-[#222E3C]' : 'bg-white'"
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b"
                  :class="
                    navbar.userNav
                      ? 'hover:bg-gray-700 text-white'
                      : 'hover:bg-gray-50 text-black'
                  "
                  v-show="!store.searchList.length"
                  v-for="i in store.PageProduct"
                  :key="i.id"
                >
                  <th
                    scope="row"
                    class="text-center px-5 py-3 font-medium whitespace-nowrap"
                  >
                    {{ i.id }}
                  </th>
                  <td class="flex items-center justify-center py-2">
                    <img class="w-16 h-16" :src="i.image" alt="" />
                  </td>
                  <td class="text-center font-medium px-5 py-2">
                    {{ i.name }}
                  </td>
                  <td class="text-center font-medium px-5 py-2">
                    {{ i.position }}
                  </td>
                  <td class="text-center font-medium px-5 py-2">
                    <div class="flex items-center justify-center gap-2">
                      <a :href="'https://t.me/' + i.telegram" target="_blank"><i class="bx bxl-telegram text-[24px]"></i></a>
                      <a :href="'https://www.linkedin.com/in/' + i.linkidin" target="_blank"><i class="bx bxl-linkedin-square text-[24px]"></i></a>
                      <a :href="'https://www.instagram.com/' + i.instagram" target="_blank"><i class="bx bxl-instagram-alt text-[24px]"></i></a>
                    </div>
                  </td>
                  <td class="text-center whitespace-nowrap font-medium pr-5">
                    <i
                    @click="getOneProduct(i.id)"
                      class="bx bxs-pencil bg-blue-300 text-blue-600 rounded-lg p-2 mr-3 cursor-pointer focus:ring-2"
                    >
                    </i>
                    <i
                    @click="deleteFunc(i.id)"
                      class="bx bxs-trash bg-red-300 cursor-pointer text-red-600 rounded-lg p-2 focus:ring-2"
                    >
                    </i>
                  </td>
                </tr>
                <tr
                  class="border-b"
                  :class="
                    navbar.userNav
                      ? 'hover:bg-gray-700 text-white'
                      : 'hover:bg-gray-50 text-black'
                  "
                  v-show="store.searchList.length"
                  v-for="i in store.searchList"
                  :key="i.id"
                >
                  <th
                    scope="row"
                    class="text-center px-5 py-3 font-medium whitespace-nowrap"
                  >
                    {{ i.id }}
                  </th>
                  <td class="flex items-center justify-center py-2">
                    <img class="w-16 h-16 rounded-full" :src="i.image" alt="" />
                  </td>
                  <td class="text-center font-medium px-5 py-2">
                    {{ i.name }}
                  </td>
                  <td class="text-center font-medium px-5 py-2">
                    {{ i.position }}
                  </td>
                  <td class="text-center font-medium px-5 py-2">
                    <div class="flex items-center justify-center gap-2">
                      <a :href="'https://t.me/' + i.telegram" target="_blank"><i class="bx bxl-telegram text-[24px]"></i></a>
                      <a :href="'https://www.linkedin.com/in/' + i.linkidin" target="_blank"><i class="bx bxl-linkedin-square text-[24px]"></i></a>
                      <a :href="'https://www.instagram.com/' + i.instagram" target="_blank"><i class="bx bxl-instagram-alt text-[24px]"></i></a>
                    </div>
                  </td>
                  <td class="text-center whitespace-nowrap font-medium pr-5">
                    <i
                    @click="getOneProduct(i.id)"
                      class="bx bxs-pencil bg-blue-300 text-blue-600 rounded-lg p-2 mr-3 cursor-pointer focus:ring-2"
                    >
                    </i>
                    <i
                    @click="deleteFunc(i.id)"
                      class="bx bxs-trash bg-red-300 cursor-pointer text-red-600 rounded-lg p-2 focus:ring-2"
                    >
                    </i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              v-show="!store.PageProduct && store.error"
              class="w-full max-w-screen text-center p-20 text-2xl font-medium"
            >
              <h1>Xodimlar ro'yhati bo'sh</h1>
            </div>
          </div>
          <nav
            v-if="!store.searchList.length"
            class="flex flex-row justify-between items-center md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <ul class="inline-flex items-stretch -space-x-px">
              <li
                :class="{
                  'pointer-events-none opacity-50': store.page[0] == 1,
                }"
                @click="
                  store.pagination -= 1;
                  getProduct(store.pagination);
                "
                href="#"
                class="flex font-bold cursor-pointer text-black border-2 bg-white hover:bg-gray-300 items-center justify-center text-sm py-2 sm:mt-0 -mt-2 px-6 rounded-lg leading-tight"
              >
                Oldingi
              </li>
            </ul>
            <span class="text-sm font-normal">
              Sahifa
              <span class="font-semibold"
                ><span>{{ store.page[0] }}</span> -
                <span>{{
                  store.page[1]
                }}</span
                ></span
              >
              dan
              <span class="font-semibold">{{ store.page[2] }}</span>
            </span>
            <ul class="inline-flex items-stretch -space-x-px">
              <li
                :class="{
                  'pointer-events-none opacity-50':
                    store.page[1] >= store.page[2],
                }"
                @click="
                  store.pagination += 1;
                  getProduct(store.pagination);
                "
                href="#"
                class="flex font-bold cursor-pointer text-black border-2 bg-white hover:bg-gray-300 items-center justify-center text-sm py-2 sm:mt-0 -mt-2 px-6 rounded-lg leading-tight"
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

const getImg = ref(null);
const setImg = (e) => {
  getImg.value = e.target.files[0];
  console.log(getImg.value.name);
};


const store = reactive({
  PageProduct: "",
  page: [],
  pagination: 1,
  allProducts: false,
  error: false,
  filter: "",
  filter_show: false,
  searchList: [],
});

function cancelFunc() {
  form.name = "";
  form.position = "";
  form.telegram = "";
  form.instagram = "";
  form.linkidin = "";
  modal.value = false;
}

function deleteFunc(id) {
  remove.id = id;
  remove.toggle = true;
}

function cancelFunc1() {
  edit.name = "";
  edit.position = "";
  edit.telegram = "";
  edit.instagram = "";
  edit.linkidin = "";
  edit.toggle = false;
}

const form = reactive({
  name: "",
  position: "",
  telegram: "",
  instagram: "",
  linkidin: "",
});

const edit = reactive({
  image: "",
  name: "",
  position: "",
  telegram: "",
  instagram: "",
  linkidin: "",
  id: "",
  toggle: false,
});

const remove = reactive({
  id: "",
  toggle: false,
});

const createProduct = () => {
  // const img = ref(String(getImg.value))
  const data = {
    image: getImg.value.name,
    name: form.name,
    position: form.position,
    telegram: form.telegram,
    instagram: form.instagram,
    linkidin: form.linkidin
  };
  axios
    .post("/teams", data, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((res) => {
      modal.value = false;
      location.reload()
      notification.success(res.data.message);
      getProduct(store.pagination);
      info.getStaff();
      form.name = "";
      form.position = ""; 
      form.telegram = "";
      form.instagram = "";
      form.linkidin = "";
    })
    .catch((error) => {
      if (error.response.data.statusCode == 400) {
        notification.warning(error.response.data.message);
      }
    });
};

const getOneProduct = (id) => {
  axios
    .get(`/teams/${id}`, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((res) => {
      edit.image = res.data.image;
      edit.name = res.data.name;
      edit.position = res.data.position
      edit.telegram = res.data.telegram
      edit.instagram = res.data.instagram
      edit.linkidin = res.data.linkidin
      edit.id = res.data.id;
      edit.toggle = true;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const editProduct = () => {
  let img = ''
  if(!getImg.value){
    img = edit.image
  }
  else {
    img = getImg.value.name
  }
  const data = {
    image: img,
    name: edit.name,
    position: edit.position,
    telegram: edit.telegram,
    instagram: edit.instagram,
    linkidin: edit.linkidin
  };
  axios
    .patch(`/teams/${edit.id}`, data, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((res) => {
      notification.success(res.data.message);
      getProduct(store.pagination);
      edit.name = "";
      edit.position = "";
      edit.telegram = "";
      edit.instagram = "";
      edit.linkidin = "";
      edit.toggle = false;
    })
    .catch((error) => {
      // notification.warning(error.response.data.message);
      console.log("error", error);
    });
};

// ---------------------------- search ------------------------------------

function searchFunc() {
  store.searchList = [];
  for (let i of store.allProducts) {
    if (i.name.toLowerCase().includes(store.filter.toLowerCase())) {
      store.searchList.push(i);
    }
  }

  if (!store.filter.length) {
    store.searchList = [];
  }
}
// ---------------------------- search end ------------------------------------

const getAllProduct = () => {
  axios
    .get("/teams", {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((res) => {
      console.log(res.data);
      store.allProducts = res.data?.data;
      store.error = false;
    })
    .catch((error) => {
      notification.warning(error.response.data.message);
      store.error = true;
      store.allProducts = error.response.data.message;
    });
};

const getProduct = (page) => {
  axios
    .get(`/teams?page=${page}`, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((res) => {
      console.log(res.data?.data);
      store.PageProduct = res.data?.data;
      store.page = [];
      store.page.push(res.data?.from, res.data?.to, res.data?.total);
      store.error = false;
    })
    .catch((error) => {
      store.PageProduct = error.response.data.message;
      store.error = true;
    });
};

// ---------------------------- delete start ------------------------------------

const deleteProduct = () => {
  axios
    .delete(`/teams/${remove.id}`, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((res) => {
      notification.success(res.data.message);
      getProduct(store.pagination);
      remove.toggle = false;
      info.getStaff();
    })
    .catch((error) => {
      notification.warning(error.response.data.message);
      console.log(error);
    });
};

// ---------------------------- delete end ------------------------------------

onMounted(() => {
  getAllProduct();
  getProduct(1);
});
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
