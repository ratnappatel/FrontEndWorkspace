import React,{useState} from 'react'

export default function SubscriptionForm() {

    const [isDisabled, setIsDisabled]=useState(true);
    const[email,setEmail]=useState("");


   function handleChange(e){
    setEmail(e.target.value);
    setIsDisabled(e.target.value=== "");
   }

  return (
    <div>
        <h1>Subscription Form</h1>
        <form>
            <label htmlFor="email"> Email Address</label>
            <input type="email" id="email" placeholder='Email Address' value={email}
                onChange={handleChange}/><br></br>
            <input type="checkbox" name="agreement" id="agreement"/>
            <label htmlFor="agreement">I agree to all Terms & Conditions</label><br></br>
            <button name="subscribe" type="submit" disabled={isDisabled}>Subscribe</button>
        </form>
    </div>
  )
}
