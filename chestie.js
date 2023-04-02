var a=["Daisy Time" , "To Daffodils" , "After The Winter", "More Than Enough", "Spring, the sweet spring",
"To My Dear and Loving Husband" , "Take all my loves, my love, yea, take them all" , "Since brass, nor stone, nor earth, nor boundless sea","Drink to me only with thine eyes","Poem for My Love",
"Ozymandias" , "A Prayer for Travelers" , "Song of the Open Road","Freedom","P.S. I Love You",
"If Roses grow in Heaven" , "Death, be not proud" , "Do Not Stand at My Grave and Weep","The Mower","Remember"];


function cauta()
{
    unshow();
    var searchsir=document.getElementById("searchbox").value;
    searchsir=searchsir.toLowerCase();
    var cont=0;
    var sirfin=new Array();
    var i=0;
    while(a[i]!=undefined)
    {
        if(a[i].toLowerCase().includes(searchsir))
        {
            sirfin[cont]=a[i];
            cont++;
        }
        i++;
    }
    for(i=0;i<cont && i<3;i++)
    {
        var j=i+1;
        document.getElementById("opt"+(j).toString()).innerText=sirfin[i];
        document.getElementById("opt"+(j).toString()).style.display="flex";
    }
}

function unshow()
{
    for(var i=1;i<=3;i++)
    {
        document.getElementById("opt"+i.toString()).style.display="none";
    }
}

function optintxtbox(a)
{
    var th=document.getElementById("opt"+a.toString()).innerText;
    document.getElementById("searchbox").value=th;
    cauta();
}


//inca nu functioneaza
var txtbox=document.getElementById("searchbox");
txtbox.addEventListener("blur",unshow());