
 


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
  