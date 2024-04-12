import React from "react";
import "./page.css"
import Textfield from "./components/Textfield";
import DateField from "./components/Datefield";
import SelectField from "./components/Selectield";
import Coupon from "./components/Coupon";
export default function QuicKRegister() {
      //  Please select your category option 
      const category_options=[
            {"value":"BPL" ,"displayName" : "BPL" } , 
            {"value":"SC/ST" ,"displayName" : "SC/ST" }
      ]
      //  gender select box options
      const gender_options =[
            {"value" :  "Male" , "displayName" : "Male"},
            {"value" : "Female" , "displayName" : "Female"} ,
            {"value" : "Transgender" , "displayName" : "Transgender"}
      ]

            const district_options=[
                  {"value" :  "KASARAGOD" , "displayName" : "KASARAGOD"},
                  {"value" :  "KANNUR" , "displayName" : "KANNUR"},
                  {"value" :  "WAYANAD" , "displayName" : "WAYANAD"},
                  {"value" :  "KOZHIKODE" , "displayName" : "KOZHIKODE"},
                  {"value" :  "MALAPPURAM" , "displayName" : "MALAPPURAM"},
                  {"value" :  "PALAKKAD" , "displayName" : "PALAKKAD"},
                  {"value" :  "THRISSUR" , "displayName" : "THRISSUR"},
                  {"value" :  "ERNAKULAM" , "displayName" : "ERNAKULAM"},
                  {"value" :  "IDUKKI" , "displayName" : "IDUKKI"},
                  {"value" :  "KOTTAYAM" , "displayName" : "KOTTAYAM"},
                  {"value" :  "ALAPPUZHA" , "displayName" : "ALAPPUZHA"},
                  {"value" :  "PATHANAMTHITTA" , "displayName" : "PATHANAMTHITTA"},
                  {"value" :  "KOLLAM" , "displayName" : "KOLLAM"},
                  {"value" :  "THIRUVANANTHAPURAM" , "displayName" : "THIRUVANANTHAPURAM"}
            ]
            const presentStatus = [
                  {"value" :  "Student" , "displayName" : "Student"},
                  {"value" :  "Employed" , "displayName" : "Employed"},
                  {"value" : "Unemployed" , "displayName" : "Unemployed"}
            ]

            const CourseName =[
                  {value : " Full Stack Development  .Net" , "displayName" : " Full Stack Development  .Net"},
                  {value: " Data Science and Analytics" , "displayName" :" Data Science and Analytics" } ,
                  {value: "  Software Testing" , "displayName" :" Software Testing" } ,
                  {value: " Cyber Security" , "displayName" :" Cyber Security" } ,
                  {value :  " 2D/3D Game Engineering" , displayName : " 2D/3D Game Engineering"}
            ]

            const Preferred_mode_of_delivery_options = [
                  {value :" Physical Batch" , displayName :"Physical Batch" } ,
                  {value : " Virtual Batch " , displayName : ' Virtual Batch'}

            ]

            const How_do_you_get_to_know_about_the_course_options = [
                  {value : "WhatsApp" , displayName : "WhatsApp"},
                  {value  : "Cinema hall / Theatre" , displayName : "Cinema hall / Theatre"},
                  {value : "Friends or Referral" , displayName : "Friends or Referral"},
                  {value : "Mail" , displayName : "Mail"} ,
                  { value : "Social Media" , displayName : "Social Media"} ,
                  {value : "Print Media" , displayName : "Print Media"} ,
                  {value : "Online Media" , displayName : "Online Media"} ,
                  {value : "Website" , displayName : "Website"} ,
                  {value : "Others" , displayName : "Others"}


            ]





      return (
            <div class="row">
                  <div class="col-md-12">
                        <form action="index.html" method="post">
                              <h1> Registration </h1>
                              <fieldset>
                                    <legend><span class="number">1</span>  Basic Info </legend>
                                    <Textfield name="name" id="name" label="Name"  type="text"/>
                                    <Textfield name="email" id="email" label="Email"  type="email"/>
                                    <DateField name="dob" id="dob" label='Date of Birth' />
                                    <SelectField  name="Please select your category" label="Please select your category" id="category" values={category_options}/>
                                    <SelectField  name="Gender" label="Gender" id="gender" values={gender_options}/>
                                    <SelectField  name="District" label="District" id="district" values={district_options}/>
                                    <SelectField  name="Present status" label="Present status" id="Present status" values={presentStatus}/>
                                    <SelectField name="Course Name" label="Course Name" id="Course Name" values={CourseName} />
                                    <SelectField name="Preferred mode of delivery" label="Preferred mode of delivery" id="Preferred mode of delivery" values={Preferred_mode_of_delivery_options}  />
                                    <SelectField name="How do you get to know about the course?"  label="How do you get to know about the course?" id="How do you get to know about the course?" values={How_do_you_get_to_know_about_the_course_options} />
                                    <Textfield name={"Amount"} label={"Amount"} id={"Amount"} value="250" type="number" disabled={true}/>
                                    <Coupon name={"Coupon"} label={"Coupon"} id={"Coupon"} type="number" />
                              </fieldset>
                              <button type="submit">Sign Up</button>

                        </form>
                  </div>
            </div>)
}