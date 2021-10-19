<script lang="ts">
  import UserLoginRequestModel from '../../model/users/UserLoginRequestModel'
  import UserModel from '../../model/users/UserModel';
  import { postLogin } from '../../store/user'

  let loginRequest: UserLoginRequestModel = new UserLoginRequestModel

  async function onLoginButtonClick() {
    const userDetail: UserModel = await postLogin(loginRequest)
    console.log(userDetail)
  }
</script>

<main id="loginMain">
  <div id="loginBox">
    <label for="login-text" id="loginHeaderText">เข้าสู่ระบบ</label>
    <div class="input-box">
      <i class="fa fa-user input-icon" style="position: absolute" aria-hidden="true"></i>
      <input class="input"  type="text" placeholder="ชื่อผู้ใช้ / อีเมล" bind:value={loginRequest.username}>
    </div>
    <div class="input-box">
      <i class="fa fa-lock input-icon" style="position: absolute" aria-hidden="true"></i>
      <input type="password" class="input" placeholder="รหัสผ่าน" bind:value={loginRequest.password}>
    </div>
    <button class="login-button" on:click={onLoginButtonClick}>เข้าสู่ระบบ</button>
    <div class="box-text">       
      <label for="login-text" class="label-login">ยังไม่มีบัญชีผู้ใช้?</label>
      <label for="login-text" class="label-regis"  > สมัครสมาชิก</label>
    </div>
  </div>
</main>

<style lang="scss">
  @import "Login.scss";
</style>