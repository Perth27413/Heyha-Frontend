<script>
</script>

<main id="loginMain">
    <div id="loginBox">
        <label for="login-text" id="loginHeaderText">เข้าสู่ระบบ</label>
        <div class="input-box">
            <i class="fa fa-user input-icon" style="position: absolute" aria-hidden="true"></i>
            <input class="input"  type="text" placeholder="ชื่อผู้ใช้ / อีเมล">
        </div>
        <div class="input-box">
            <i class="fa fa-lock input-icon" style="position: absolute" aria-hidden="true"></i>
            <input type="password" class="input" placeholder="รหัสผ่าน">
        </div>
        <button class="login-button">เข้าสู่ระบบ</button>
        <div class="box-text">       
            <label for="login-text" class="label-login">ยังไม่มีบัญชีผู้ใช้?</label>
            <label for="login-text" class="label-regis"  > สมัครสมาชิก</label>
        </div>
    </div>
</main>

<style lang="scss">
    @import "Login.scss";
</style>