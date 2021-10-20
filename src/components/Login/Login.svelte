<script lang="ts">
  import UserLoginRequestModel from '../../model/users/UserLoginRequestModel'
  import UserModel from '../../model/users/UserModel';
  import { navigate } from "svelte-routing"
  import { post } from '../../store/api'
  import { alertSuccess, alertError, alertWarning } from '../../store/notify'
  import md5 from 'md5'
  import { setLogin } from '../../store/user'
  import { afterUpdate } from 'svelte';

  export let isLogin
  let loginRequest: UserLoginRequestModel = new UserLoginRequestModel
  let isLoading: boolean = false
  
  afterUpdate(() => {
    backToHomeIfNotLogin()
  })

  function backToHomeIfNotLogin(): void {
    if (isLogin) {
      navigate('/')
    }
  }
  
  async function onLoginButtonClick() {
    if (validateInputRequest() && !isLoading) {
      isLoading = true
      setTimeout(() => {
        postLogin()
        isLoading = false
      }, 1500)
    }
  }

  async function postLogin(): Promise<void> {
    try {
      const newRequest: UserLoginRequestModel = mapAndConvertRequestPasswordToMD5()
      const userDetail: UserModel = await post('/user/login', newRequest)
      if (userDetail.id) {
        setLogin(userDetail)
        await alertSuccess('เข้าสู่ระบบสำเร็จ')
        navigate('/')
      }
    } catch (error) {
      await alertError(error)
    }
  }

  function validateInputRequest(): boolean {
    for (const key in loginRequest) {
      if (!loginRequest[key]) {
        alertWarning('กรุณากรอกข้อมูลให้ครบถ้วน')
        return false
      }
    }
    return true
  }

  function mapAndConvertRequestPasswordToMD5(): UserLoginRequestModel {
    const newRequest: UserLoginRequestModel = {...loginRequest}
    newRequest.password = md5(newRequest.password)
    return newRequest
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
    {#if !isLoading}
      <button class={`login-button ${isLoading ? 'is-loading' : ''}`} on:click={onLoginButtonClick}>
          เข้าสู่ระบบ
      </button>
      {:else}
      <button class={`login-button ${isLoading ? 'is-loading' : ''}`} on:click={onLoginButtonClick}>
        <i class="fa fa-spinner fa-spin icon-loading"></i>
    </button>
    {/if}
    <div class="box-text">       
      <label for="login-text" class="label-login">ยังไม่มีบัญชีผู้ใช้?</label>
      <label for="login-text" class="label-regis" on:click={() => navigate('/register')}> สมัครสมาชิก</label>
    </div>
  </div>
</main>

<style lang="scss">
  @import "Login.scss";
</style>