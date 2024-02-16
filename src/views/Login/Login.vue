<template>
  <div class="base flex justify-center items-center min-h-screen bg-cover bg-center">
    <div class="w-[400px] md:w-[500px] p-10 bg-white rounded-xl bg-opacity-60">
      <img class="login__foto" src="/public/DEVOSOFT.png" alt="" />
      <h1 class="text-2xl sm:text-[28px] font-bold text-center py-5">
        Tizimga kirish
      </h1>
      <form @submit.prevent="formInfo">
        <div class="mb-4">
          <label for="login" class="block mb-2 font-semibold">Email</label>
          <input type="text" id="login" v-model="form.email" class="w-full p-2 sm:p-[10px] border rounded-[9px]"
            placeholder="email" required />
        </div>
        <div class="mb-4">
          <label for="password" class="block mt-3 sm:mt-9 mb-2 font-semibold">Parol</label>
          <input type="password" id="password" v-model="form.password" class="w-full p-2 sm:p-[10px] border rounded-[9px]"
            placeholder="••••••••" required />
        </div>
        <button type="submit"
          class="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-900 hover:border-blue-900 py-2 sm:py-[10px] rounded-md">
          Kirish
        </button>
      </form>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, reactive } from "vue";
import axios from "@/services/axios";
import { useRouter } from "vue-router";
import { useNotificationStore } from "@/stores/notification";
const notification = useNotificationStore();
const router = useRouter();

const form = reactive({
  password: "",
  email: "",
});

const formInfo = () => {
  axios
    .post("/login", {
      email: form.email,
      password: form.password,
    })
    .then((res) => {
      console.log(res);
      if (res.status == 200) {
        console.log(res.status);
        // localStorage.setItem("userId", res.data.id);
        localStorage.setItem("token", res.data.token);
        notification.success("Hush kelibsiz");
        router.push("/");
      } else {
        error("Error");
      }
    })
    .catch((error) => {
      notification.warning("Foydalanuvchi topilmadi!");
    });
};
</script>
  
<style lang="scss" scoped>
.base {
  background-color: #070F2B;
}

.login__foto {
  margin: 0 auto;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
  