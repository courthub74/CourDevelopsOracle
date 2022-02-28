import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si'
import './pages.css'

export const SendingEmail = () => {
    return (
        <div className='sendemail'>
            <Card className='card'>

                <Card.Header><h1 className='black'>Auto Send Email <SiIcons.SiPython /></h1></Card.Header>

                <Card.Body>
                    <Card.Text className='smtexty'>
                        <span className='notes'>#Import smtplib for the actual sending function</span> <br></br>
                        <span className='bold'>import smtplib</span> <br></br>
                        <br></br>
                        <span className='notes'>#Import MIME test format library (MIME = Multipurpose Internet Mail Extensions) its and internet standart to encode email contents</span> <br></br>
                        <span className='bold'>from email.mime.text import MIMEText</span> <br></br>
                        <br></br>
                        <span className='notes'>#Import the email modules we'll need</span> <br></br>
                        <span className='notes'>#from email.message import EmailMessage</span> <br></br>
                        <br></br>
                        <span className='bold'>sender_name = 'CourDevelops'</span> <br></br>
                        <span className='bold'>sender_email = 'csoc783@gmail.com'</span> <br></br>
                        <span className='bold'>password = 'passwordhere'</span> <br></br>
                        <br></br>
                        <span className='bold'>recipient_name = 'Mike Smooth'</span> <br></br>
                        <span className='bold'>recipient_email = 'courtneyj3470@gmail.com'</span> <br></br>
                        <br></br>
                        <span className='bold'>email_text = '''</span> <br></br>
                        <span className='bold tab5'>We are following email standards and protocols</span> <br></br>
                        <span className='bold'>'''</span> <br></br>
                        <br></br>
                        <span className='bold'>def send_email():</span> <br></br>
                        <span className='bold tab5'>print('\nSending email...\n')</span> <br></br>
                        <br></br>
                        <span className='notes'>#Populate the message object</span> <br></br>
                        <span className='bold tab5'>message['To'] = email.utils.formataddr((recipient_name, recipient_email))</span> <br></br>
                        <span className='bold tab5'>message['From'] = email.utils.formataddr((sender_name, sender_email))</span> <br></br>
                        <span className='bold tab5'>message['Subject'] = 'This is the Real email NOT SPAM'</span> <br></br>
                        <br></br>
                        <span className='notes'>#Setup the email server. Gmail host, and use a common port</span> <br></br>
                        <span className='bold'>server = smtplib.SMTP('smtp.gmail.com', 587) #smtp domain for gmail (google that)</span> <br></br>
                        <br></br>
                        <span className='notes'>#Additional security measures (transport layer security) all smtp commands will be encrypted after this</span> <br></br>
                        <span className='bold'>server.starttls()</span> <br></br>
                        <br></br>
                        <span className='notes'>#Login to senders email account</span> <br></br>
                        <span className='bold'>server.login(sender_email, password)</span> <br></br>
                        <br></br>
                        <span className='notes'>#print(message.as_string())</span> <br></br>
                        <br></br>
                        <span className='notes'>#Send email</span> <br></br>
                        <span className='bold'>server.sendmail(sender_email, recipient_email, message.as_string())</span> <br></br>
                        <br></br>
                        <span className='notes'>#Send email</span> <br></br>
                        <span className='bold'>server.quit()</span> <br></br>
                        <br></br>
                        <span className='bold'>print('\nEmail sent.\n')</span> <br></br>
                        <br></br>
                        <span className='bold'>send_email()</span> <br></br>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

