console.log('my script')

const change=document.getElementById('change')

change.addEventListener('click', my_fun)

function my_fun(){

    console.log('my script works')
    if (document.getElementsByTagName('div')[3].innerHTML==='Спехова'){

                
        document.getElementsByTagName('div')[1].innerHTML='&nbsp'
        document.getElementsByTagName('div')[2].innerHTML='&nbsp'
        document.getElementsByTagName('div')[3].innerHTML='Spekhova'
        document.getElementsByTagName('div')[4].innerHTML='Anna'
        document.getElementsByTagName('div')[5].innerHTML='&nbsp'
        document.getElementsByTagName('div')[6].innerHTML='female &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 07.12.2007'
        document.getElementsByTagName('div')[7].innerHTML='&nbsp'
        document.body.style.backgroundImage="url('eng_pas.jpg')"
        
    
    }

    else{
        document.getElementsByTagName('div')[3].innerHTML='Spekhova'
         document.getElementsByTagName('div')[1].innerHTML='УМВД РОССИИ ПО ХМАО - ЮГРЕ'
         document.getElementsByTagName('div')[2].innerHTML='21.09.2020 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  330-128'
         document.getElementsByTagName('div')[3].innerHTML='Спехова'
         document.getElementsByTagName('div')[4].innerHTML='Анна'
         document.getElementsByTagName('div')[5].innerHTML='Сергеевна'
         document.getElementsByTagName('div')[6].innerHTML='жен &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 12.07.2007'
         document.getElementsByTagName('div')[7].innerHTML='г. Сургут'
         document.body.style.backgroundImage = "url('pasport_shablon.png')"
         
    }

    }

 
 
