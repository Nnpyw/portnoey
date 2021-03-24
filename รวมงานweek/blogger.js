var text = document.getElementById('text1');
var i=0;

function postFunction(){
    let comment = text.value
    if(i == 0 && text!= ''){
        document.getElementById('topic1').innerHTML =comment;
        document.getElementById('text1').value='';
        
        i++
    }
    else if(i == 1 && text !=''){
        document.getElementById('comment1').innerHTML =comment;
        document.getElementById('text1').value='';
        i++
    }
    else if(i == 2 && text !=''){
        
        document.getElementById('comment2').innerHTML =comment;
        document.getElementById('text1').value='';
        i++
        
        
    }
    else if(comment ==''){
            alert("พิมข้อความ");
        }
}

    




function clearFunction(){
   
    document.getElementById('topic1').innerHTML ="";
    
    document.getElementById('comment1').innerHTML ="";
    
    document.getElementById('comment2').innerHTML ="";
    document.getElementById('text1').value='';
   
    i=0;
}