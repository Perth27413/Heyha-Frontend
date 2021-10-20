<script lang="ts">
  import UserModel from '../../model/users/UserModel';
  import UserRegisterRequestModel from '../../model/users/UserRegisterRequestModel';
  import { post } from '../../store/api'
  import { alertSuccess, alertWarning, alertError } from '../../store/notify'

  let registerRequest: UserRegisterRequestModel = new UserRegisterRequestModel

  async function onRegisterButtonClick(): Promise<void> {
    if (validateInputRequest() && validateEmail()) {
      postRegister()
    }
  }

  async function postRegister(): Promise<void> {
    try {
      const userDetail: UserModel = await post('/user/register', registerRequest)
      if (userDetail.id) {
        alertSuccess('สมัครสมาชิกสำเร็จ')
      }
    } catch (error) {
      alertError(error)
    }
  }

  function validateInputRequest(): boolean {
    for (const key in registerRequest) {
      if (!registerRequest[key]) {
        alertWarning('กรุณากรอกข้อมูลให้ครบถ้วน')
        return false
      }
    }
    return true
  }

  function validateEmail(): boolean {
    const re: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const result: boolean = re.test(registerRequest.email.toLowerCase())
    if (!result) {
      alertWarning('โปรดกรอกอีเมลให้ถูกต้อง')
    }
    return result
  }
</script>

<main id="regisMain">
  <div id="regisBox">
    <label for="register-text" id="regisHeaderText">สมัครสมาชิก</label>
    <div class="input-box">
      <i class="fa fa-envelope input-icon" style="position: absolute" aria-hidden="true"></i>
      <input class="input"  type="text" placeholder="อีเมล" bind:value={registerRequest.email}>
    </div>
    <div class="input-box">
      <i class="fa fa-user input-icon" style="position: absolute" aria-hidden="true"></i>
      <input class="input"  type="text" placeholder="ชื่อผู้ใช้" bind:value={registerRequest.username}>
    </div>
    <div class="input-box">
      <i class="fa fa-lock input-icon" style="position: absolute" aria-hidden="true"></i>
      <input class="input"  type="password" placeholder="รหัสผ่าน" bind:value={registerRequest.password}>
    </div>
    <div class="input-box">
      <i class="fas fa-pen-square input-icon" style="position: absolute" aria-hidden="true"></i>
      <input class="input"  type="text" placeholder="ชื่อ" bind:value={registerRequest.firstname}>
    </div>
    <div class="input-box">
      <i class="fas fa-pen-square input-icon" style="position: absolute" aria-hidden="true"></i>
      <input class="input"  type="text" placeholder="นามสกุล" bind:value={registerRequest.lastname}>
    </div>
    <div class="input-box">
      <i class="fa fa-mobile input-icon" style="position: absolute" aria-hidden="true"></i>
      <input class="input"  type="text" placeholder="เบอร์โทรศัพท์" bind:value={registerRequest.phone}>
    </div>
    <div class="input-box">
      <i class="fa fa-address-book input-icon" style="position: absolute" aria-hidden="true"></i>
      <input class="input"  type="text" placeholder="ที่อยู่" bind:value={registerRequest.address}>
    </div>
    <button class="regis-button" on:click="{onRegisterButtonClick}">สมัครสมาชิก</button>
    <div class="box-text">
      <label for="register-text" class="label-regis">มีบัญชีผู้ใช้แล้ว?</label>
      <label for="register-text" class="label-login"> เข้าสู่ระบบ</label>
    </div>
  </div>
</main>

<style lang="sass">
   @import "Register.sass"
</style>