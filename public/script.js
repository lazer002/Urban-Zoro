
 


$(document).ready(()=>{

    $.ajax({
          type: 'GET',
          url: '/cartonpage',
  
          success: function (response) {
            document.getElementById('cartbody').innerHTML = ' ';
  
            for (let i = 0; i < response.product.length; i++) {
  
  
  
            const fileString = String.fromCharCode(...response.product[i].pfile.data);
  
              $('#cartbody').append(`
              <div class="py-3 border-bottom border-light position-relative">
              <div class="row text-center cartim">
               
                <img src="/static/product/${fileString}" alt="" class="rounded-4">
          
            
    <div class="delthover">
    <i class="fa fa-solid fa-trash text deletcart"></i>
    <div class="">
      ${response.product[i].pname}
     </div> 
     <div class="">
     Rs.  ${response.product[i].pprice}
     </div>
       <div class=" text-center">
         ${response.product[i].pquantity} Qty
     </div>
       <div class="">
    
     </div>
  </div>
              </div> 
            </div>
              `);
           
            }
          }
        });

      })



      $(document).ready(function () {
        $('.card-body').each(function () { 
            var $this = $(this); 
            
            $this.find('.star').empty(); 
            
            var a = Math.floor(Math.random() *5)+1; 
            
            var stars = '★'.repeat(a); 
            
            $this.find('.star').append(stars); 
        });
    });

    // const x= $('#ajit').val()
  

// alert(x)
