


function getanswer( )
    {
    var x =parseFloat(document.FirstNum.value);
    var y =parseFloat(document.SecondNum.value);
    var sum;
    sum=x+y;
    document.Answer.value=sum;
    }
    <form name="form1">
        ค่าที่ 1:<INPUT TYPE="TEXT" NAME="FirstNum"><BR>
        ค่าที่ 2:<INPUT TYPE="TEXT" NAME="SecondNum"><BR>
        ผลลัพธ์:<INPUT TYPE="TEXT" NAME="Answer"><BR>
        <INPUT type="button" VALUE="คำตอบ" onClick="getanswer( );">
    </form>