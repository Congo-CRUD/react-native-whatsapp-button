import { Linking, Platform } from "react-native";

//A function for sending message directly through WhatsApp

export function sendWhatsApp(phone, message, action, errorPhone, errorMessage, notInstalledMessage)
{
    //define the mobile phone depending on the user's device.
    let mobile = Platform.OS === "ios" ? phone.substring(1) : phone;

    if(!iphone)
    {
        alert(errorPhone)
        return;
    }

    if(!message)
    {
        alert(errorMessage)
        return;
    }

    //Define the url for sending the whatsapp message
    let whatsAppUrl = "whatsapp://send?text=" + message+action+ "&phone=" +phone

    Linking.openURL(whatsAppUrl)
        .then(data => {
            console.log("WhatsApp is opening"),
            console.log(data)
        })
        .catch(()=>{
            alert(notInstalledMessage)
        })
}