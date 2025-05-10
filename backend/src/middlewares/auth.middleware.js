const authMiddleware = async (request, response, next) => {
  const { name, email, subject, message } = request.body
  
  name?.trim()
  email?.trim()
  subject?.trim()
  message?.trim()

  try {
    if (!name || !email || !subject || !message) { return response.status(400).json({ success: false, message: 'All The Fields Must be Filled' }) }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { return response.status(400).json({ success: false, message: 'Invalid email format' }) }

    next()
  } catch (error) {

  }

}

export default authMiddleware