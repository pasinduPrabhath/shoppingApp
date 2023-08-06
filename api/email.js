module.exports = {
    sendEmail: async (email, name, body,tmpltId) => {
      const serviceId = "service_4v9bumo";
      const templateId = tmpltId;
      const userId = "I_jZpZ-48BZEzeLOK";
      const url = "https://api.emailjs.com/api/v1.0/email/send";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://lapshopapp-f26f1576abb1.herokuapp.com/"
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: {
            sp_email: email,
            to_name: name,
            message: body
          }
        })
      });
      const data = await response.text();
    if (data.includes("OK")) {
      return { status: "success" };
    } else {
      return { status: "error", message: data };
    }
    }
  };