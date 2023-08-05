module.exports = {
    sendEmail: async (email, name, body) => {
      const serviceId = "service_4v9bumo";
      const templateId = "template_8dc678o";
      const userId = "I_jZpZ-48BZEzeLOK";
      const url = "https://api.emailjs.com/api/v1.0/email/send";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost"
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: {
            sp_email: email,
            to_name: name,
            admin_message: body
          }
        })
      });
      const data = await response.json();
      if (data === "OK") {
        return { status: "success" };
      } else {
        return { status: "error", message: data };
      }
    }
  };