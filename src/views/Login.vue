<template>
  <div class="page">
    <h4>Đăng nhập</h4>
    <Form @submit="handleLogin" :validation-schema="loginFormSchema">
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
        <button class="btn btn-primary">Đăng nhập</button>
        <router-link to="/register" class="btn btn-outline-success ms-2">
          <i class="fas fa-user-plus"></i> Đăng ký
        </router-link>
      </div>
    </Form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { Form, Field, ErrorMessage },
  data() {
    const loginFormSchema = yup.object().shape({
      username: yup.string().required("Tên đăng nhập là bắt buộc."),
      password: yup.string().required("Mật khẩu là bắt buộc."),
    });
    return {
      userLocal: { username: "", password: "" },
      loginFormSchema,
      message: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await AuthService.login(this.userLocal);
        localStorage.setItem("user", JSON.stringify(response));
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.log(error);
        this.message = "Tên đăng nhập hoặc mật khẩu không đúng.";
      }
    },
  },
};
</script>
