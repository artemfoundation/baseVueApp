import mobileDetect from 'mobile-detect'

const md = new mobileDetect(navigator.userAgent)

export default {
  locales: {
    tat: 'tat',
    rus: 'rus',
    eng: 'eng'
  },

  baseURL: '', // prod
  device: {
    phone: md.phone(),
    os: md.os()
  }
}
