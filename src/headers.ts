export default (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token, X-Access-Token, g-recaptcha-response, G-Recaptcha-Response'
  )
  next()
}