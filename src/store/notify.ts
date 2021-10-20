import Swal from 'sweetalert2'

export async function alertSuccess(text: string) {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: 'สำเร็จ!',
      text: text,
      icon: 'success',
      confirmButtonText: 'รับทราบ',
      confirmButtonColor: '#FFB800',
    }).then(result => {
      resolve(result.isConfirmed)
    })
  })
}

export async function alertWarning(text: string) {
  
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: 'แจ้งเตือน',
      text: text,
      icon: 'warning',
      confirmButtonText: 'รับทราบ',
      confirmButtonColor: '#FFB800',
    }).then(result => {
      resolve(result.isConfirmed)
    })
  })
}

export async function alertError(text: string) {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: 'เกิดข้อผิดพลาด!',
      text: text,
      icon: 'error',
      confirmButtonText: 'รับทราบ',
      confirmButtonColor: '#FFB800',
    })
  })
}