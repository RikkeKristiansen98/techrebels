const TestForm = () => {
  const username = "wp_user";
  const password = "BhVF Jr3M UyLw wMH8 nbub Xr6Q";
  const encodedCredentials = btoa(`${username}:${password}`);

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    const formElement = event.target;
    const { action } = formElement;

    const formData = new FormData(formElement);

    // 🟢 Lägg till __wpcf7_unit_tag
    formData.append("__wpcf7_unit_tag", "wpcf7-f527-o1"); // Anpassa om nödvändigt

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Basic ${encodedCredentials}`,
          "Accept": "application/json",
        },
      });

      const jsonResponse = await response.json();

      if (jsonResponse.status !== "mail_sent") {
        console.error("Validation error:", jsonResponse);
      } else {
        console.log("Form submitted successfully:", jsonResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <form
        action="https://www.techforalla.se/wp-json/contact-form-7/v1/contact-forms/527/feedback"
        method="post"
        encType="multipart/form-data"
        onSubmit={formSubmissionHandler}
      >
        <label htmlFor="your-name">Your Name</label>
        <input id="your-name" type="text" name="your-name" required />

        <label htmlFor="your-email">Your Email</label>
        <input id="your-email" type="email" name="your-email" required />

        <label htmlFor="your-subject">Subject</label>
        <input id="your-subject" type="text" name="your-subject" required />

        <label htmlFor="your-message">Message</label>
        <textarea id="your-message" name="your-message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestForm;
