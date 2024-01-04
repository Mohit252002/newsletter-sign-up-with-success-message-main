function clearerror()
{
    document.querySelector('.error_space').innerHTML="";
}

function seterror(c_name,error)
{
const error_space = document.getElementsByClassName(c_name);
error_space[0].innerHTML=`${error}`;
}
function fun()
{
    
    const form_box = document.getElementsByClassName('outer_box');
    console.log(form_box);
    
    form_box[0].classList.add('hide');
 
    const suc_box = document.getElementsByClassName('success_box');
    suc_box[0].classList.remove('hide');
    const d_btn = document.getElementsByClassName("dismiss_btn");
    d_btn[0].addEventListener('click',()=>
    {
        suc_box[0].classList.add('hide');
        form_box[0].classList.remove('hide');
    })
  
}
function validateform()
{
   
   clearerror();
   var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   const email_val = document.getElementById('email_inp').value;
   console.log(email_val);

   if (email_val.match(mailformat))
   {
    fun();
    

   }

   else{
    seterror("error_space","Valid email required")
    retval =  false;
    console.log("error raised");
    document.getElementById('email_inp').focus();

   }
   
 

}

document.getElementById("email_sec").addEventListener('submit',(e)=>
{
    e.preventDefault();
    validateform();
})