let number = parseInt(prompt());
var  add_number = 0;
var new_number = number;
while(number > 0)
{
   last_number = number % 10;
   armstrong = last_number **3;
   add_number = add_number + armstrong; 
   b = number - last_number;
   number = b / 10;
}
if ( new_number == add_number)
{
    console.log(new_number, " This Number is Armstrong");
}
else{
    console.log(new_number," is NOT a Armstrong");
}

