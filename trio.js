var height=window.innerHeight ;
document.getElementById("container").style="height:"+height+"px";
console.log("done");
function check_password()
{
    password=document.getElementById("password").value;
    cnfpassword=document.getElementById("cnfpassword").value;
    if(password !== cnfpassword)
    {
        document.getElementById("register").disabled=true;
        
        alert("Password Is Not Matching");
    }
    else
    {
        document.getElementById("register").disabled=false;
    }
}

function doctor_details()
            {
                console.log("done");
                var httpr=new XMLHttpRequest();
                
                httpr.onreadystatechange=function() {
                    if(this.readyState==4 && this.status==200)
                    {
                        document.getElementById("doctor_details").innerHTML=this.responseText;
                    }
                };
                httpr.open("GET","get_doctor_detail.php?code="+document.getElementById("doctorcode").value,true);
                httpr.send();
            }
function nextpatient(email)
{
     console.log("ho raha hai");
    var httpr=new XMLHttpRequest();

    httpr.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200)
        {
            document.getElementById("doctor_main").innerHTML=this.responseText;
        }
    };
    httpr.open("GET","get_patient_detail.php?email="+email,true);
    httpr.send();
}