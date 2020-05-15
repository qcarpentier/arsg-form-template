var app = new Vue({
  el: "#app",
  data: {
    username: "",
    password: "",
    isDefault: true,
    isError: false
  },
  computed: {
    checkUserInput: function () {
      if (this.isDefault || this.username !== '') return true;
      else return false;
    },
    checkPasswordInput: function () {
      if (this.isDefault || this.password !== '') return true;
      else return false;
    },
  },
  methods: {
    checkForm: function (e) {
      this.isDefault = false;

      if (this.username === 'admin' && this.password === 'admin') {
        return true
      }
      
      e.preventDefault();

      if (this.username !== '' && this.username !== '') {
        this.isError = true;
      }
    }
  }
});