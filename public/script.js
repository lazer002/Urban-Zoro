
 


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


  // $(document).ready(function () {
  //   // Add input filters to table headers
  //   $("#filter th").each(function () {
  //     var title1 = $(this).text();
  //     let title = title1.replace(/^\s+|\s+$/gm, "");
  //     $(this).html('<input type="text" class="form-control  border border-secondary" />');
  //   });
  
  //   // Initialize DataTable with filtering and ordering options
  //   var table = $("#mytable").DataTable({
  //     ordering: true,
  //     order: [],
  //     paging: true,
  //     columnDefs: [{ orderable: false, targets: [0] }],
  //     language: {
  //       paginate: {
  //         previous: '<span class="fa fa-chevron-left"></span>',
  //         next: '<span class="fa fa-chevron-right"></span>',
  //       },
  //       lengthMenu:
  //         'Display <select class="form-control input-sm mt-2">' +
  //         '<option value="10">10</option>' +
  //         '<option value="20">20</option>' +
  //         '<option value="30">30</option>' +
  //         '<option value="40">40</option>' +
  //         '<option value="50">50</option>' +
  //         '<option value="-1">All</option>' +
  //         "</select> entries",
  //     },
  //   });
  
  //   // Add event listener for input changes to perform filtering
  //   $("#filter th input").on("keyup change", function () {
  //     table
  //       .column($(this).parent().index() + ":visible")
  //       .search(this.value)
  //       .draw();
  //   });
  // });
  