function validate() 
{
         if( document.myForm.first.value == "" ) {
            alert( "Please provide your first name!" );
            document.myForm.first.focus() ;
            return false;
         }
         if( document.myForm.lat.value == "" ) {
            alert( "Please provide your last name!" );
            document.myForm.first.focus() ;
            return false;
         }
         if( document.myForm.faname.value == "" ) {
            alert( "Please provide your father'sname!" );
            document.myForm.faname.focus() ;
            return false;
         }
         if( document.myForm.moname.value == "" ) {
            alert( "Please provide your mother'sname!" );
            document.myForm.moname.focus() ;
            return false;
         }
         if( document.myForm.email.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.email.focus() ;
            return false;
         }
         if( document.myForm.mobile.value == "" ) {
            alert( "Please provide your mobile in the format ##########." );
            document.myForm.mobile.focus() ;
            return false;
         }
         if( document.myForm.pin.value == "" || isNaN( document.myForm.pin.value ) || document.myForm.pin.value.length != 6 ) {
            alert( "Please provide a pin code in the format ######." );
            document.myForm.pin.focus() ;
            return false;
         }
         return( true );
}
 
function same_as_present_address()
  { 
   if(document.getElementById('same').checked)
     {
        a=document.getElementById('presentaddress').value;
        b=document.getElementById('presentcity').value;
        c=document.getElementById('presentpin').value;
        d=document.getElementById('presentstate').value;
        e=document.getElementById('presentdistrict').value;
        document.getElementById('permanentaddress').setAttribute("value",a);
        document.getElementById('permanentcity').setAttribute("value",b);
        document.getElementById('permanentpin').setAttribute("value",c);
        document.getElementById('permanentstate').setAttribute("value",d);
        document.getElementById('permanentdistrict').setAttribute("value",e);
     }
   else
     {
      document.getElementById('permanentaddress').setAttribute("value",'');
      document.getElementById('permanentcity').setAttribute("value",'');
      document.getElementById('permanentpin').setAttribute("value",'');
      document.getElementById('permanentstate').setAttribute("value",'');
      document.getElementById('permanentdistrict').setAttribute("value",'');
     }
}