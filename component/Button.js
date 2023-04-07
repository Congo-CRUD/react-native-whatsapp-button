import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { sendWhatsApp } from '../utils';

export default function WhatsAppButton(props)
{
    const {category, containerStyle, textStyle, title, message, type, phone, errorPhone, errorMessage} = props;

    // The action will be used in case you would like to proceed with a CTA to the user.
    let action = category === "1" ? " ko somba": " ko teka"

    return(
        <TouchableOpacity
            style={containerStyle}
            onPress={()=>sendWhatsApp(phone, message, action, errorPhone, errorMessage, notInstalledMessage)}>
                {type === "icon"
                ?<Icon name="whatsapp" color="white" size={24}/>
                :<Text style= {textStyle}>{title}</Text>}
        </TouchableOpacity>
    )
}