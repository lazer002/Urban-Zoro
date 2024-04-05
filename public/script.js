
 


$(document).ready(()=>{

    $.ajax({
          type: 'GET',
          url: '/cartonpage',
  
          success: function (response) {
            document.getElementById('cartbody').innerHTML = ' ';
  
            for (let i = 0; i < response.product.length; i++) {
  
  
  
            const fileString = String.fromCharCode(...response.product[i].pfile.data);
  
              $('#cartbody').append(`
                <div class="py-3 border-bottom border-success">
                  <div class="row">
                 
                    <img src="/static/product/${fileString}" alt="" class="w-25">
                
                  <div class="col-2">
                    <span class="ps-2">${response.product[i].pname}</span>
                  </div> 
                  <div class="col-2">
                   ${response.product[i].pprice}
                  </div>
                    <div class="col-3">
                      ${response.product[i].pquantity}
                <input type="hidden" name="" id="product_id" value="${response.product[i]._id}">
  
                  </div>
                    <div class="col-2 ">
                    <button class="deletcart">
                      <i class="fa-solid fa-trash fs-4 text"></i>
                    </button>
                  </div> 
                  </div> 
                </div>
              `);
           
            }
          }
        });
      })


    






    // const x= $('#ajit').val()
  

// alert(x)
