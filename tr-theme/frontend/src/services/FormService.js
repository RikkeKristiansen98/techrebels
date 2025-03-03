const FormService = {
    sendContactForm: async (formId, formData, username, password) => {
        try {
            const formDataObject = new FormData();

            // Lägg till varje fält i FormData
            Object.keys(formData).forEach(key => {
                formDataObject.append(key, formData[key]);
            });

            // Skapa Basic Auth-header
            const authString = `${username}:${password}`;
            const authEncoded = btoa(authString); // Base64-encode användarnamn och lösenord

            const response = await fetch(`https://www.techforalla.se/wp-json/contact-form-7/v1/contact-forms/${formId}/`, {
                method: "POST",
                body: formDataObject, // Skickar som FormData istället för JSON
                headers: {
                    "Authorization": `Basic ${authEncoded}` // Lägg till Basic Auth-header
                }
            });

            const result = await response.json();
            if (result.status === "mail_sent") {
                console.log("Meddelande skickat!", result);
                return { success: true, message: result.message };
            } else {
                console.error("Fel vid skickande", result);
                return { success: false, message: result.message || "Något gick fel" };
            }
        } catch (error) {
            console.error("Request error", error);
            return { success: false, message: "Ett nätverksfel uppstod" };
        }
    }
};

export default FormService;
