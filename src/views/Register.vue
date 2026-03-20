<template>
  <div class="page">
    <h4>Đăng ký tài khoản</h4>
    <Form @submit="handleRegister" :validation-schema="registerFormSchema">
      <div class="form-group">
        <label for="username">Tên đăng nhập</label>
        <Field
          name="username"
          type="text"
          class="form-control"
          v-model="userLocal.username"
        />
        <ErrorMessage name="username" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu</label>
        <Field
          name="password"
          type="password"
          class="form-control"
          v-model="userLocal.password"
        />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="form-group">
        <button class="btn btn-success">Đăng ký</button>
        <router-link to="/login" class="ml-2">Đã có tài khoản?</router-link>
      </div>
    </Form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import AuthService from "../services/auth.service";

export default {
  components: { Form, Field, ErrorMessage },
  data() {
    const registerFormSchema = yup.object().shape({
      username: yup
        .string()
        .required("Tên đăng nhập là bắt buộc.")
        .min(3, "Tên đăng nhập phải ít nhất 3 ký tự."),
      password: yup
        .string()
        .required("Mật khẩu là bắt buộc.")
        .min(6, "Mật khẩu phải ít nhất 6 ký tự."),
    });
    return {
      userLocal: {
        username: "",
        password: "",
      },
      registerFormSchema,
      message: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        await AuthService.register(this.userLocal);
        alert("Đăng ký thành công!");
        this.$router.push({ name: "login" }); // Dòng này giúp chuyển trang
      } catch (error) {
        console.log(error);
        this.message = "Đăng ký thất bại. Tên đăng nhập có thể đã tồn tại.";
      }
    },
  },
};
</script>
