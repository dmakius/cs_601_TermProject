 // JQUERY
 $("img").click(function(){
    imgC = this;
    var modal = $("#myModal");
    console.log(modal);
    modal.css("display","block");
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = $(".close")[0];

span.onclick = function() { 
    $("#myModal").css('display', "none");
}