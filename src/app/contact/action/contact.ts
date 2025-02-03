"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate a delay to mimic server processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data and return a success message

  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  console.log("Form submission:", { firstName, lastName, email, phone, message })

  return {
    success: true,
    message: "Thank you for your message. We'll get back to you soon!",
  }
}

