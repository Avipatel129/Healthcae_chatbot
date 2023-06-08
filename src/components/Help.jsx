import React, { Component, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./help.css";
class Help extends Component {
    constructor(){
        super()
        this.form=React.createRef()
    }

    sendEmail=(e)=>{
        e.preventDefault()
        emailjs.sendForm("service_fpajiwa", "template_hfbhq52", this.form.current, "PwYeaRBQG-u92W9Ek")
        .then((result) =>{
            console.log(result.text)
            alert("Email Sent Sucessful")
        }, (error)=>{
            console.log(error.text)
            alert("Opps, Email Not Sent")
        })
    }
    render(){        
        return (
            <form className='form_help' ref={this.form} onSubmit={this.sendEmail}>
            
                <div className="name_help">
                <label>Name</label> <br></br>
                <input type="text" class='input_field_help' placeholder="Enter name" name="name"></input>
                </div>
                <div className="number_help">
                <label>Contact No.</label> <br />
                <input type="text" class='input_field_help' placeholder="Enter Contact Number" name="number"></input>
                </div>
                <div className="email_help">
                <label>email</label> <br />
                <input type="email" class='input_field_help' placeholder="Enter Email" name="email"></input>
                </div>
                <div className="message_help">
                <label>Message</label> <br />
                <textarea class='input_field_help' placeholder="Describe your message" name="message"></textarea>
                </div>
                <input type="submit" value="Send Email" className="help_send" /> 
            
            </form>
        )
    }
}

export default Help;
