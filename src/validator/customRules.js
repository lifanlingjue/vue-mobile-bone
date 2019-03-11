export default {
  mobile: {
    getMessage: field => '手机格式不正确',
    validate: (value, args) => {
      return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
  }
}
