<template>
    <div class="container mx-auto px-2">
        <!-- ----------------------------------------- MODAL -------------------------------------------------------- -->

        <!-- Main modal -->
        <div :class="modal
                ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
                : 'hidden'
            ">
            <div class="relative p-4 max-w-5xl min-w-[50%] h-auto">
                <!-- Modal content -->
                <div class="relative p-4 rounded-lg shadow sm:p-5" :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'">
                    <!-- Modal header -->
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 class="text-lg" :class="navbar.userNav ? 'text-white' : 'text-black'">
                            Yangi kategoriya qo'shish
                        </h3>
                        <button @click="toggleModal" type="button"
                            class="bg-transparent hover:bg-gray-200 hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            :class="navbar.userNav ? 'text-white' : 'text-black'">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form :class="{ darkForm: navbar.userNav }">
                        <div class="grid font-medium gap-4 mb-4">

                            <div class="flex items-center justify-between gap-5">
                                <div class="w-full">
                                    <label for="name" class="block mb-2 text-sm">Name</label>
                                    <input type="text" name="name" id="name"
                                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                        placeholder="Name" required />

                                </div>
                                <div class="w-full">
                                    <label for="category" class="block mb-2 text-sm">Kategoriya</label>
                                    <input type="text" name="category" id="category"
                                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                        placeholder="Kategoriya" required />
                                </div>
                            </div>
                            <div>
                                <label for="info" class="block mb-2 text-sm">Info</label>
                                <textarea name="" id="info" cols="30" rows="10"
                                    class="w-full rounded-lg p-5 border border-gray-300" placeholder="Info.."></textarea>
                            </div>
                        </div>
                        <div class="w-full flex items-center justify-between border-t pt-5 mt-5">
                            <button type="button"
                                class="border cursor-pointer inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Bekor qilish
                            </button>
                            <button type="submit"
                                class="btnAdd cursor-pointer text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Qo'shish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- ----------------------------------------- MODAL END ---------------------------------------------------- -->

        <!-- ----------------------------------------- Edit modal ---------------------------------------------------- -->
        <div :class="false
                ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
                : 'hidden'
            ">
            <div class="relative p-4 max-w-5xl min-w-[30%] h-auto">
                <!-- Modal content -->
                <div class="relative p-4 rounded-lg shadow sm:p-5" :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'">
                    <!-- Modal header -->
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 class="text-lg" :class="navbar.userNav ? 'text-white' : 'text-black'">
                            Kategoriyani o'zgartirish
                        </h3>
                        <button type="button"
                            class="bg-transparent hover:bg-gray-200 hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            :class="navbar.userNav ? 'text-white' : 'text-black'">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form :class="{ darkForm: navbar.userNav }">
                        <div class="grid font-medium gap-4 mb-4">
                            <div class="flex items-center justify-between gap-5">
                                <div class="w-full">
                                    <label for="name" class="block mb-2 text-sm">Name</label>
                                    <input type="name" name="name" id="name"
                                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                        placeholder="Name" required />
                                </div>
                                <div class="w-full">
                                    <label for="category" class="block mb-2 text-sm">Kategoriya</label>
                                    <input type="text" name="category" id="category"
                                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                        placeholder="Kategoriya" />
                                </div>
                            </div>
                            <div>
                                <label for="info" class="block mb-2 text-sm">Info</label>
                                <textarea name="" id="info" cols="30" rows="10"
                                    class="w-full rounded-lg p-5 border border-gray-300" placeholder="Info.."></textarea>
                            </div>
                        </div>
                        <div class="w-full flex items-center justify-between border-t pt-5 mt-5">
                            <button type="button"
                                class="border cursor-pointer inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Bekor qilish
                            </button>
                            <button type="submit"
                                class="btnAdd cursor-pointer text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                O'zgartirish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- ----------------------------------------- Edit END ---------------------------------------------------- -->

        <!-- ----------------------------------------- Delete modal ---------------------------------------------------- -->
        <div :class="false
                ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
                : 'hidden'
            ">
            <div class="relative p-4 max-w-5xl min-w-[30%] h-auto">
                <!-- Modal content -->
                <div class="relative p-4 rounded-lg shadow sm:p-5" :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'">
                    <!-- Modal header -->
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 class="text-lg" :class="navbar.userNav ? 'text-white' : 'text-black'">
                            Kategoriyani o'chirib tashlash
                        </h3>
                        <button type="button"
                            class="bg-transparent hover:bg-gray-200 hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            :class="navbar.userNav ? 'text-white' : 'text-black'">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div :class="{ darkForm: navbar.userNav }">
                        <div class="grid font-medium gap-4 mb-4 grid-cols-1">
                            <div>
                                <div></div>
                                <h1 class="text-2xl" :class="navbar.userNav ? 'text-white' : 'text-black'">
                                    Siz kategoriyani o'chirishni xohlaysizmi?
                                </h1>
                            </div>
                            <div class="w-full flex items-center justify-between border-t pt-5 mt-5">
                                <button type="button"
                                    class="border cursor-pointer inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Bekor qilish
                                </button>
                                <button
                                    class="btnAdd cursor-pointer text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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
                <div class="shadow rounded-xl flex flex-col lg:flex-row items-center justify-between lg:space-x-4 p-4 mb-4"
                    :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'">
                    <div class="w-full flex items-center lg:justify-start lg:pb-0 pb-4 justify-between gap-5">
                        <h1 class="text-blue-700 font-bold text-lg">Kategoriyalar</h1>
                        <div
                            class="lg:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3">
                            <button @click="toggleModal" id="" type="button"
                                class="btnAdd flex items-center max-w-fit justify-center whitespace-nowrap border border-gray-200 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 sm:py-2">
                                <span class="sm:block hidden">Kategoriya qo'shish</span>
                                <i class="sm:hidden block bx bxs-user-plus text-lg"></i>
                            </button>
                        </div>
                    </div>

                    <div class="w-full lg:w-80">
                        <form class="flex items-center text-gray-900 font-medium">
                            <label for="simple-search" class="sr-only">Qidiruv</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input
                                v-model="store.filter"
                                @input="
                                    store.filter_show = true;
                                    searchFunc();
                                "
                                 type="search" id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                                    placeholder="Qidirish .." />
                                <ul
                                v-show="store.filter_show"
                                    class="absolute z-10 max-h-80 overflow-y-auto overflow-hidden py-1 text-gray-600 rounded bg-white w-full">
                                    <li class="hover:bg-gray-100 cursor-pointer pl-2"
                                    v-for="(i, index) in store.searchList"
                                    :key="index"
                                    @click="
                                    store.filter = i.name_uz;
                                    searchFunc();
                                    "   
                                    >
                                    {{ i.name_uz }}
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
                <!------------------------------------------- Search ------------------------------------------->

                <div class="relative shadow-md rounded-lg overflow-hidden"
                    :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left">
                            <thead class="text-xs rounded-lg uppercase"
                                :class="navbar.userNav ? 'bg-gray-700' : 'bg-gray-50'">
                                <tr>
                                    <th scope="col" class="text-center py-3">No</th>
                                    <th scope="col" class="text-center py-3">Name</th>
                                    <th scope="col" class="text-center py-3">Info</th>
                                    <th scope="col" class="text-center py-3">To'liq ma'lumot</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b" :class="navbar.userNav ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-50 text-black'
                                    "
                                   v-show="!store.searchList.length"
                                    v-for="i in store.PageProduct"
                                    :key="i.id"         
                                    >   
                                    <th scope="row" class="text-center px-5 py-3 font-medium whitespace-nowrap">
                                        {{ i.id }}
                                    </th>
                                    <td class="text-center font-medium  px-5 py-2">
                                        {{ i.name_uz }}
                                    </td>
                                    <td class="text-center font-medium  px-5 py-2 w-[500px]">
                                        {{ i.info_uz }}
                                    </td>
                                    <td class="text-center font-medium px-5 py-3">
                                        <button
                                            class="btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2">
                                            Batafsil
                                        </button>
                                    </td>
                                    <td class="text-center whitespace-nowrap font-medium pr-5">
                                        <i
                                            class="bx bxs-pencil bg-blue-300 text-blue-600 rounded-lg p-2 mr-3 cursor-pointer focus:ring-2">
                                        </i>
                                        <i
                                            class="bx bxs-trash bg-red-300 cursor-pointer text-red-600 rounded-lg p-2 focus:ring-2">
                                        </i>
                                    </td>
                                </tr>
                                <tr class="border-b" :class="navbar.userNav ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-50 text-black'

                                    "
                                    v-show="store.searchList.length"
                                    v-for="i in store.searchList"
                                    :key="i.id"
                                    >
                                    <th scope="row" class="text-center px-5 py-3 font-medium whitespace-nowrap">
                                        {{ i.id }}
                                    </th>
                                    <td class="text-center font-medium  px-5 py-2">
                                        {{ i.name_uz }}
                                    </td>
                                    <td class="text-center font-medium  px-5 py-2 w-[500px]">
                                        {{ i.info_uz }}
                                    </td>
                                    <td class="text-center font-medium px-5 py-3">
                                        <button
                                            class="btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2">
                                            Batafsil
                                        </button>
                                    </td>
                                    <td class="text-center whitespace-nowrap font-medium pr-5">
                                        <i
                                            class="bx bxs-pencil bg-blue-300 text-blue-600 rounded-lg p-2 mr-3 cursor-pointer focus:ring-2">
                                        </i>
                                        <i
                                            class="bx bxs-trash bg-red-300 cursor-pointer text-red-600 rounded-lg p-2 focus:ring-2">
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
                        aria-label="Table navigation">
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
                                class="flex font-bold text-black border-2 bg-white hover:bg-gray-300 items-center justify-center text-sm py-2 sm:mt-0 -mt-2 px-6 rounded-lg leading-tight">
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
                            ></span>
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
                                class="flex font-bold text-black border-2 bg-white hover:bg-gray-300 items-center justify-center text-sm py-2 sm:mt-0 -mt-2 px-6 rounded-lg leading-tight">
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


// ---------------------------- search ------------------------------------
function searchFunc() {
  store.searchList = [];
  for (let i of store.allProducts) {
    if (i.name_uz.toLowerCase().includes(store.filter.toLowerCase())) {
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
    .get("/categories", {
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
    .get(`/categories?page=${page}`, {
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

onMounted(() => {
  getAllProduct();
  getProduct(1);
});
</script>
  
<style lang="scss" scoped>
.btnAdd {
    background-image: linear-gradient(to right,
            rgb(139, 255, 203) -250%,
            #136f4f);
}

.btnKirish {
    background-image: linear-gradient(to right,
            rgb(139, 255, 232) -250%,
            #046f80);
}

.btnOrqaga {
    background-image: linear-gradient(to right,
            rgb(138, 183, 254) -250%,
            #2f73f0);
}
</style>
  