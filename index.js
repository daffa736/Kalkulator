const btn = document.querySelectorAll('.angka');
const output = document.getElementById('output');
const hasil = document.getElementById('jumlah');
const deletes = document.getElementById('hapus');
  let nilai = '';

  

btn.forEach(function(btn){
btn.addEventListener('click',function(){
    nilai += btn.innerText;

    output.innerText = nilai;
    update();
    });
});

hasil.addEventListener('click',function(){
let ekspresi = nilai
  .replaceAll('x','*')
  .replaceAll(':','/');

    nilai = eval(ekspresi);

    output.innerText = nilai;
});

deletes.addEventListener('click',function(){
    nilai = '';
    output.innerText= 0 ;
})

function update(){
    output.innerText = nilai;

    if(nilai.length <= 10){
        output.style.fontSize ='32px';
    }else if( nilai.length <= 15){
        output.style.fontSize ='25px';
    }else{
        output.style.fontSize ='15px';
    }
}