"use client"




export default function Contact() {
    return (
        <div>
                    <div>
                        <p>Contact Info</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                        <div>
                            <p>Office</p>
                            <p>Adresse</p>
                            <p>Tlf nr</p>
                            <p>Tlf nr</p>
                            <p>Email</p>
                        </div>
                        <div>
                            <p>Management</p>
                            <p>Adresse</p>
                            <p>Tlf nr</p>
                            <p>Tlf nr</p>
                            <p>Email</p>
                        </div>
                <div>
                        <p>Any Questions?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ut!</p>
                       <form action="get">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="number" name="phone" placeholder="Phone number"/>
                        <input type="text" name="subject" placeholder="Subject"/>
                        <input type="text" name="message" placeholder="Message"/>
                        <input type="submit" value="Submit" />
                       </form>
                </div>
        </div>
    )
}